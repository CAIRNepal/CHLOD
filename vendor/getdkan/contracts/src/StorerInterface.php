<?php

namespace Contracts;

interface StorerInterface
{
    /**
     * Store.
     *
     * @param string|HydratableInterface $data
     *   The data to be stored.
     * @param string|null $id
     *   The identifier for the data. If the act of storing generates the
     *   id, there is no need to pass one.
     *
     * @return string
     *   The identifier.
     *
     * @throws \Exception
     *   Issues storing the data.
     */
    public function store($data, string $id = null): string;
}
