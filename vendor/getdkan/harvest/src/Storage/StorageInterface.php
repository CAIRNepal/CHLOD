<?php

namespace Harvest\Storage;

use Contracts\BulkRetrieverInterface;
use Contracts\StorerInterface;

interface StorageInterface extends StorerInterface, BulkRetrieverInterface
{

}
