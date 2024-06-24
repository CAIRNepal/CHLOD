<?php

namespace Contracts\Mock\Storage;

use Contracts\RetrieverInterface;
use Contracts\StorerInterface;
use Contracts\BulkRetrieverInterface;

class Memory implements RetrieverInterface, StorerInterface, BulkRetrieverInterface
{

    protected $storage = [];

    public function retrieve(string $id)
    {
        if (isset($this->storage[$id])) {
            return $this->storage[$id];
        }
        return null;
    }

    public function retrieveAll(): array
    {
        return $this->storage;
    }

    public function store($data, string $id = null): string
    {
        if (!isset($id)) {
            throw new \Exception("An id is required to store the data.");
        }
        if (!isset($this->storage[$id])) {
            $this->storage[$id] = $data;
            return $id;
        }
        $this->storage[$id] = $data;
        return true;
    }

    public function remove(string $id)
    {
        if (isset($this->storage[$id])) {
            unset($this->storage[$id]);
            return true;
        }
        return false;
    }
}
