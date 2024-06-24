<?php

namespace Drupal\facets\Plugin\better_exposed_filters\filter;

use Drupal\better_exposed_filters\Plugin\better_exposed_filters\filter\FilterWidgetBase;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Form\FormStateInterface;

/**
 * Default widget implementation.
 *
 * @BetterExposedFiltersFilterWidget(
 *   id = "facets",
 *   label = @Translation("Facets"),
 * )
 */
class Facets extends FilterWidgetBase {

  /**
   * {@inheritdoc}
   */
  public function exposedFormAlter(array &$form, FormStateInterface $form_state) {
    if ($form_state->facets_not_built ?? FALSE) {
      return;
    }

    $field_id = $this->getExposedFilterFieldId();
    if (!empty($form[$field_id]) && !empty($form[$field_id]['#content'])) {
      $metadata = new CacheableMetadata();
      if (isset($form['#cache'])) {
        $metadata = CacheableMetadata::createFromRenderArray($form);
      }

      foreach ($form[$field_id]['#content'] as &$facet_content) {
        /** @var \Drupal\facets\FacetInterface $facet */
        $facet = $facet_content['content'][0]['#facet'] ?? NULL;
        if (!$facet) {
          continue;
        }

        switch ($facet->getWidgetInstance()->getPluginId()) {
          case 'array':
            // Not supported here.
            break;

          case 'checkbox':
          case 'dropdown':
          case 'links':
          default:
            parent::exposedFormAlter($form, $form_state);

            /** @var \Drupal\views\Plugin\views\filter\FilterPluginBase $filter */
            $filter = $this->handler;

            if ($filter->view->ajaxEnabled() || $filter->view->display_handler->ajaxEnabled()) {
              array_walk_recursive( $facet_content, function(&$value, $key) {
                if ($key === 'data-drupal-facet-ajax') {
                  $value = '1';
                }
              });
            }

            $metadata = $metadata->merge(CacheableMetadata::createFromRenderArray($facet_content));

            break;
        }
      }
      unset($facet_content);

      $metadata->applyTo($form);
    }
  }

  public static function isApplicable($filter = NULL, array $filter_options = []) {
    $is_applicable = parent::isApplicable($filter, $filter_options);
    if (is_a($filter, 'Drupal\facets\Plugin\views\filter\FacetsFilter')) {
      $is_applicable = TRUE;
    }
    return $is_applicable;
  }
}
