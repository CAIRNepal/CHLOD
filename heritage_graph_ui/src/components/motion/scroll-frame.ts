/**
 * One scroll loop for the whole page.
 *
 * Each pinned stage needs to know where it is on every frame the page moves.
 * Giving each its own scroll listener means N listeners doing N layout reads
 * per event, interleaved with each other's writes — the pattern that forces a
 * reflow per stage per event. Here there is one passive listener, one
 * requestAnimationFrame per frame however many events fire inside it, and
 * every subscriber runs inside that frame: all of them read, then write CSS
 * custom properties, and the browser lays out once.
 *
 * A subscriber must not touch React state on every call. Write CSS variables;
 * change state only when a derived value (an index) actually changes.
 */

type Frame = () => void;

const frames = new Set<Frame>();
let scheduled = false;

function run() {
  scheduled = false;
  frames.forEach((frame) => frame());
}

function schedule() {
  // The re-entrancy flag: a burst of scroll events inside one frame queues a
  // single callback, not one per event.
  if (scheduled) return;
  scheduled = true;
  window.requestAnimationFrame(run);
}

/** Run `frame` once now and on every animation frame in which the page scrolls or resizes. */
export function onScrollFrame(frame: Frame): () => void {
  frames.add(frame);
  if (frames.size === 1) {
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
  }
  schedule();
  return () => {
    frames.delete(frame);
    if (frames.size === 0) {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    }
  };
}

/** Ask for a frame without a scroll event — after a measurement changes, say. */
export function requestScrollFrame() {
  if (typeof window !== 'undefined' && frames.size > 0) schedule();
}
