<?php

namespace Drupal\select2\Plugin\better_exposed_filters\filter;

use Drupal\better_exposed_filters\Plugin\better_exposed_filters\filter\FilterWidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Select2 widget implementation.
 *
 * @BetterExposedFiltersFilterWidget(
 *   id = "bef_select2",
 *   label = @Translation("Select2"),
 * )
 */
class Select2 extends FilterWidgetBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    $config = parent::defaultConfiguration();
    $config['advanced']['placeholder_text'] = (string) $this->t('- None -');
    return $config;
  }

  /**
   * {@inheritdoc}
   */
  public function exposedFormAlter(array &$form, FormStateInterface $form_state): void {

    $field_id = $this->getExposedFilterFieldId();

    parent::exposedFormAlter($form, $form_state);

    if (!empty($form[$field_id])) {
      $filter = $this->handler;

      $form[$field_id]['#type'] = 'select2';
      $form[$field_id]['#autocomplete'] = !empty($filter->options['type']) && $filter->options['type'] === 'textfield';
      $form[$field_id]['#multiple'] = $filter->options['expose']['multiple'] ?? FALSE;
      $form[$field_id]['#select2'] = [
        'width' => '100%',
        'allowClear' => FALSE,
        'placeholder' => $this->configuration['advanced']['placeholder_text'],
      ];
    }
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {

    $form = parent::buildConfigurationForm($form, $form_state);

    $form['advanced']['placeholder_text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Placeholder text'),
      '#required' => TRUE,
      '#description' => $this->t('Text to be shown in the Select2 field until a value is selected.'),
      '#default_value' => $this->configuration['advanced']['placeholder_text'],
    ];

    return $form;
  }

}
