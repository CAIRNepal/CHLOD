<?php

namespace Drupal\facets\Controller;

use Drupal\Core\Ajax\ReplaceCommand;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Cache\CacheableResponseInterface;
use Drupal\Core\Render\BubbleableMetadata;
use Drupal\Core\Render\RenderContext;
use Drupal\views\Ajax\ViewAjaxResponse;
use Drupal\views\Controller\ViewAjaxController;
use Symfony\Component\HttpFoundation\Request;

/**
 * Controller that allows for to replace exposed forms in blocks.
 */
class FacetsViewsAjaxController extends ViewAjaxController {

  /**
   * {@inheritdoc}
   */
  public function ajaxView(Request $request) {
    $this->facetsRemoveQueryParams($request);
    $response = parent::ajaxView($request);

    $view = $response->getView();
    $display = $view->getDisplay();
    if ($display->getOption('exposed_block') && $display->usesExposedFormInBlock()) {
      $metadata = $this->addExposedBlockToResponse($response);
      if ($response instanceof CacheableResponseInterface) {
        $response->addCacheableDependency($metadata);
      }
    }

    return $response;
  }

  /**
   * If there's an AJAX request, remove the 'f' and 'page' key.
   *
   * ... in case they are in the current browser URL.
   *
   * This only applies when the method is POST.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object to process.
   */
  protected function facetsRemoveQueryParams(Request $request) {
    if ($request->isXmlHttpRequest()) {
      // @todo replace hardcoded 'f' by facet setting.
      foreach (['f', 'page', 'fulltext'] as $key) {
        if ($request->query->has($key)) {
          $request->query->remove($key);
        }
      }
    }
  }

  /**
   * Adds the exposed form to the response if necessary.
   */
  protected function addExposedBlockToResponse(ViewAjaxResponse $response): CacheableMetadata {
    $view = $response->getView();
    $context = new RenderContext();
    $exposed_block = $this->renderer->executeInRenderContext($context, function () use ($view) {
      $output = $view->display_handler->viewExposedFormBlocks();
      if (is_array($output) && !empty($output)) {
        return $output;
      }

      return [];
    });

    if (!$context->isEmpty() && !empty($exposed_block)) {
      $bubbleable_metadata = $context->pop();
      BubbleableMetadata::createFromRenderArray($exposed_block)
        ->merge($bubbleable_metadata)
        ->applyTo($exposed_block);
    }

    // Replace exposed block.
    $selector = 'views-exposed-form-' . strtr($view->id(), '_', '-') . '-' . strtr($view->current_display, '_', '-');
    $response->addCommand(new ReplaceCommand("#" . $selector, $exposed_block));

    return CacheableMetadata::createFromRenderArray($exposed_block);
  }

}
