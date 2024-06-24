<?php

namespace Contracts;

interface LimiterInterface
{
    public function limitTo(int $number_of_items);
}
