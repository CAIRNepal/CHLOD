<?php

namespace Harvest;

class Util
{
    public static function generateHash($item): string
    {
        return hash('sha256', serialize($item));
    }


    public static function getDatasetId($dataset): string
    {
        if (!is_object($dataset)) {
            throw new \Exception("The dataset " . json_encode($dataset) . " is not an object.");
        }

        if (filter_var($dataset->identifier, FILTER_VALIDATE_URL)) {
            $i = explode("/", $dataset->identifier);
            $id = end($i);
        } else {
            $id = $dataset->identifier;
        }
        return "{$id}";
    }
}
