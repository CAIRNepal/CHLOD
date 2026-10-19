# Nepali strings awaiting native review (008)

This branch adds 30 message keys to `heritage_graph_ui/messages/ne.json`. Their Nepali text is a
**draft**: a first translation that keeps CI's locale-parity gate green and reads correctly to a
non-native check. It has not been reviewed by a native speaker. Please correct any line in `ne.json`
directly. Keys, ICU placeholders (`{year}`, `{count}`, `{current}`, `{total}`) and array lengths
must stay as they are.

Proper nouns that stay in Latin script on purpose: `CAIR-Nepal`, `CIDOC-CRM`, `WebGL 2`, `Enter`.

Generated from `git diff v1 -- heritage_graph_ui/messages/ne.json`.

| Key | English | Nepali (draft) |
|---|---|---|
| `heritageMuseum.xr.street.viewLabel` | Gallery view | ग्यालरी दृश्य |
| `heritageMuseum.xr.street.viewGrid` | Grid | ग्रिड |
| `heritageMuseum.xr.street.viewStreet` | Street (3D) | सडक (३D) |
| `heritageMuseum.xr.street.unavailableWebgl` | The 3D street needs WebGL 2, which this browser does not offer. | ३D सडकका लागि WebGL 2 चाहिन्छ, जुन यो ब्राउजरमा उपलब्ध छैन। |
| `heritageMuseum.xr.street.unavailableMotion` | The 3D street is off because your device asks for reduced motion. | तपाईंको उपकरणले कम गति माग्ने भएकाले ३D सडक बन्द छ। |
| `heritageMuseum.xr.street.region` | 3D street of exhibits | प्रदर्शनीहरूको ३D सडक |
| `heritageMuseum.xr.street.hint` | Scroll, drag or use the arrow keys to walk. Enter opens the exhibit in front of you. | हिँड्न स्क्रोल, ड्र्याग वा एरो कीहरू प्रयोग गर्नुहोस्। Enter थिच्दा अगाडिको प्रदर्शनी खुल्छ। |
| `heritageMuseum.xr.street.loading` | Building the street… | सडक बनाउँदै… |
| `heritageMuseum.xr.street.position` | {current} of {total} | {total} मध्ये {current} |
| `heritageMuseum.xr.street.open` | Open record | अभिलेख खोल्नुहोस् |
| `heritageMuseum.xr.street.prev` | Previous exhibit | अघिल्लो प्रदर्शनी |
| `heritageMuseum.xr.street.next` | Next exhibit | अर्को प्रदर्शनी |
| `heritageMuseum.xr.street.credits` | Credits for what you can see ({count}) | देखिएका तस्बिरहरूको श्रेय ({count}) |
| `heritageMuseum.xr.street.exhibits` | Exhibits in this street | यस सडकका प्रदर्शनीहरू |
| `unescoEntry.how.steps.record.tags` | Festivals · Shrines · Guthis · Photographs | जात्रा · देवस्थल · गुठी · तस्बिर |
| `unescoEntry.how.steps.check.tags` | Named reviewer · Source cited · Provenance | नाम खुलेका समीक्षक · स्रोत उल्लेख · उत्पत्ति |
| `unescoEntry.how.steps.connect.tags` | Linked data · CIDOC-CRM · Open licence | लिङ्क्ड डेटा · CIDOC-CRM · खुला इजाजत |
| `unescoEntry.how.label` | // How it works | // यसले कसरी काम गर्छ |
| `unescoEntry.how.headingLines` | Written down, checked, connected | लेखिएको, जाँचिएको, जोडिएको |
| `unescoEntry.how.backdropOf` | Background photograph: {name} | पृष्ठभूमि तस्बिर: {name} |
| `unescoEntry.hero.badgeChip` | CAIR-Nepal | CAIR-Nepal |
| `unescoEntry.hero.badge` | An open, sourced record of Nepal's cultural heritage | नेपालको सांस्कृतिक सम्पदाको खुला, स्रोतसहितको अभिलेख |
| `unescoEntry.hero.headline` | Nepal's living heritage, connected | नेपालको जीवित सम्पदा, एकअर्कासँग जोडिएको |
| `unescoEntry.hero.ctaMuseum` | Explore the museum | सङ्ग्रहालय हेर्नुहोस् |
| `unescoEntry.hero.ctaHow` | How it works | यसले कसरी काम गर्छ |
| `unescoEntry.hero.stats.zones` | Monument zones, inscribed together in {year} as one World Heritage property | स्मारक क्षेत्रहरू, {year} मा एउटै विश्व सम्पदा सम्पत्तिका रूपमा सँगै सूचीकृत |
| `unescoEntry.hero.stats.lumbini` | The year Lumbini, birthplace of the Buddha, was inscribed | बुद्धको जन्मस्थल लुम्बिनी विश्व सम्पदा सूचीमा सूचीकृत भएको वर्ष |
| `unescoEntry.hero.photoControls` | Photograph controls | तस्बिर नियन्त्रण |
| `unescoEntry.trust.label` | Built on open sources, each one credited | खुला स्रोतहरूमा आधारित, प्रत्येकको श्रेयसहित |
| `unescoEntry.trust.linkLabel` | How these sources are used | यी स्रोतहरू कसरी प्रयोग हुन्छन् |
