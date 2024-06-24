<?php

namespace Drupal\facets\EventSubscriber;

use Drupal\Core\Routing\RouteBuildEvent;
use Drupal\Core\Routing\RoutingEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Modify certain routes.
 */
class RouteAlterSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   */
  public function onRouteAlter(RouteBuildEvent $event) {
    $collection = $event->getRouteCollection();
    if ($route = $collection->get('views.ajax')) {
      $route->setDefault('_controller', '\Drupal\facets\Controller\FacetsViewsAjaxController::ajaxView');
    }
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events[RoutingEvents::ALTER][] = ['onRouteAlter', -100];
    return $events;
  }

}
