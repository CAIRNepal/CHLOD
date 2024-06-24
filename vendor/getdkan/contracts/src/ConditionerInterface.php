<?php

namespace Contracts;

interface ConditionerInterface
{
    public function conditionByIsEqualTo(string $property, string $value);
}
