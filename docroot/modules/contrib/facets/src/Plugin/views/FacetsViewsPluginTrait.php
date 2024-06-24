<?php

namespace Drupal\facets\Plugin\views;

use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Form\FormStateInterface;

/**
 * Helper for the main Views plugin.
 */
trait FacetsViewsPluginTrait {

  /**
   * Builds the options form.
   *
   * @param array $form
   *   The form array that is being added to.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The form state object.
   */
  public function facetsViewsBuildOptionsForm(array &$form, FormStateInterface $form_state) {
    $options = [];

    /** @var \Drupal\facets\Entity\Facet[] $facets */
    $facets = $this->facetStorage->loadMultiple();

    $format = 'search_api:views_%s__%s__%s';
    $source = sprintf($format, $this->view->getDisplay()->getPluginId(), $this->view->id(), $this->view->current_display);
    foreach ($facets as $facet) {
      if ($facet->getFacetSourceId() === $source) {
        $options[$facet->id()] = $facet->label();
      }
    }

    $form['facets'] = [
      '#title' => 'Facets',
      '#options' => $options,
      '#type' => 'checkboxes',
      '#required' => TRUE,
      '#default_value' => isset($this->options['facets']) ? $this->options['facets'] : [],
    ];

    $form['label_display'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Display block title'),
      '#default_value' => ($this->options['label_display'] === BlockPluginInterface::BLOCK_LABEL_VISIBLE),
      '#return_value' => BlockPluginInterface::BLOCK_LABEL_VISIBLE,
    ];
  }

  /**
   * Gets the facets to render.
   *
   * @return array
   *   The facet blocks to be output, in render array format.
   */
  public function facetsViewsGetFacets() {
    $build = [];

    /** @var \Drupal\facets\Entity\Facet[] $facets */
    $items = [];
    $facets = $this->facetStorage->loadMultiple(array_filter($this->options['facets']));
    foreach ($facets as $facet) {
      $facet_build = $this->facetManager->build($facet);
      if (!empty($facet_build)) {
        $item = [
          '#theme' => 'block',
          '#configuration' => [
            'provider' => 'facets',
            'label' => $facet->label(),
            'label_display' => ($this->options['label_display'] === BlockPluginInterface::BLOCK_LABEL_VISIBLE),
          ],
          '#id' => $facet->id(),
          '#plugin_id' => 'facet_block:' . $facet->id(),
          '#base_plugin_id' => 'facet_block',
          '#derivative_plugin_id' => $facet->id(),
          '#weight' => $facet->getWeight(),
          'content' => $facet_build,
        ];

        $metadata = CacheableMetadata::createFromObject($facet);
        foreach (array_keys($this->view->getExposedInput()) as $input_key) {
          if ($input_key) {
            // Fulltext searches anf other exposed filters might influence a
            // facet.
            $metadata->addCacheContexts(['facets_filter:' . $input_key]);
          }
        }

        $metadata->applyTo($item);
        if  ($metadata->getCacheMaxAge() != 0) {
          // Try to cache the rendered facet.
          $item['#cache']['keys'] = ['facet', $facet->id()];
        }

        $items[] = $item;
      }
    }

    if (!empty($items)) {
      $build = [
        '#theme' => 'facets_views_plugin',
        '#content' => $items,
      ];
    }

    return $build;
  }

}
