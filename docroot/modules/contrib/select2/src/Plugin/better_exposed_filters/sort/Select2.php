<?php

namespace Drupal\select2\Plugin\better_exposed_filters\sort;

use Drupal\better_exposed_filters\Plugin\better_exposed_filters\sort\SortWidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Select2 sort widget implementation.
 *
 * @BetterExposedFiltersSortWidget(
 *   id = "select2",
 *   label = @Translation("Select2"),
 * )
 */
class Select2 extends SortWidgetBase {

  /**
   * {@inheritdoc}
   */
  public function exposedFormAlter(array &$form, FormStateInterface $form_state) {
    parent::exposedFormAlter($form, $form_state);

    foreach ($this->sortElements as $element) {
      if (!empty($form[$element])) {
        $form[$element]['#type'] = 'select2';
        $form[$element]['#select2'] = [
          'width' => '100%',
          'allowClear' => FALSE,
        ];
      }
    }
  }

}
