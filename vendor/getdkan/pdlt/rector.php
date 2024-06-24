<?php

/**
 * @file
 * Rector configuration for PHP 7.4 compatibility.
 */

declare(strict_types=1);

use Rector\CodeQuality\Rector\Class_\CompleteDynamicPropertiesRector;
use Rector\Config\RectorConfig;
use Rector\DeadCode\Rector\ClassMethod\RemoveUselessParamTagRector;
use Rector\DeadCode\Rector\ClassMethod\RemoveUselessReturnTagRector;
use Rector\DeadCode\Rector\Property\RemoveUselessVarTagRector;
use Rector\Php73\Rector\FuncCall\JsonThrowOnErrorRector;
use Rector\PHPUnit\Rector\MethodCall\GetMockBuilderGetMockToCreateMockRector;
use Rector\Set\ValueObject\SetList;

return static function (RectorConfig $rectorConfig): void {
  $rectorConfig->paths([
    __DIR__ . '/src',
    __DIR__ . '/tests',
    __FILE__,
  ]);

  $rectorConfig->rules([
    CompleteDynamicPropertiesRector::class,
  ]);

  $rectorConfig->sets([
    SetList::PHP_74,
    // Please no dead code or unneeded variables.
    SetList::DEAD_CODE,
    // Try to figure out type hints.
    SetList::TYPE_DECLARATION,
    // Interestingly, LevelSetList::UP_TO_PHP_82 does not preserve PHP 7.4,
    // so we have to specify all the PHP versions leading up to it if we
    // want to keep 7.4 idioms.
  ]);

  $rectorConfig->skip([
    // Keep getMockBuilder() for now.
    GetMockBuilderGetMockToCreateMockRector::class,
    // Don't throw errors on JSON parse problems. Yet.
    // @todo Throw errors and deal with them appropriately.
    JsonThrowOnErrorRector::class,
    // We like our tags.
    RemoveUselessParamTagRector::class,
    RemoveUselessVarTagRector::class,
    RemoveUselessReturnTagRector::class,
  ]);

};
