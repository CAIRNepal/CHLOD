<?php

namespace Contracts;

interface HydratableInterface extends \JsonSerializable
{
    public static function hydrate(string $json, $instance = null);
}
