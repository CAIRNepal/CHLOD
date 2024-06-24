<?php

namespace Drupal\facets\Plugin\views\area;

use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\facets\FacetManager\DefaultFacetManager;
use Drupal\facets\Plugin\views\FacetsViewsPluginTrait;
use Drupal\views\Plugin\views\area\AreaPluginBase;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides exposing facets in an area.
 *
 * @ingroup views_area_handlers
 *
 * @ViewsArea("facets_area")
 */
class FacetsArea extends AreaPluginBase {

  use FacetsViewsPluginTrait;

  /**
   * The facet manager.
   *
   * @var \Drupal\facets\FacetManager\DefaultFacetManager
   */
  protected $facetManager;

  /**
   * The entity storage used for facets.
   *
   * @var \Drupal\Core\Entity\EntityStorageInterface
   */
  protected $facetStorage;

  /**
   * Constructs a new FacetsArea instance.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\facets\FacetManager\DefaultFacetManager $facet_manager
   *   The facet manager.
   * @param \Drupal\Core\Entity\EntityStorageInterface $facet_storage
   *   The entity storage used for facets.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, DefaultFacetManager $facet_manager, EntityStorageInterface $facet_storage) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);

    $this->facetManager = $facet_manager;
    $this->facetStorage = $facet_storage;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('facets.manager'),
      $container->get('entity_type.manager')->getStorage('facets_facet')
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    // Set the default to TRUE so it shows on empty pages by default.
    $options['empty']['default'] = TRUE;
    $options['facets'] = ['default' => []];
    $options['label_display']['default'] = BlockPluginInterface::BLOCK_LABEL_VISIBLE;
    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    $this->facetsViewsBuildOptionsForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function adminSummary() {
    return implode(', ', array_filter($this->options['facets']));
  }

  /**
   * {@inheritdoc}
   */
  public function render($empty = FALSE) {
    return $this->facetsViewsGetFacets();
  }

}
