<?php

namespace Drupal\Core\Queue;

use Drupal\Component\Plugin\PluginManagerInterface;

/**
 * Provides an interface for a queue worker manager.
 */
interface QueueWorkerManagerInterface extends PluginManagerInterface {

  /**
   * The default time duration in seconds spent calling a queue worker.
   *
   * @var int
   */
  public const DEFAULT_QUEUE_CRON_TIME = 15;

  /**
   * The default lease time duration in seconds a queue item should get.
   *
   * @var int
   *
   * @see \Drupal\Core\Queue\QueueInterface::claimItem()
   */
  public const DEFAULT_QUEUE_CRON_LEASE_TIME = 30;

}
