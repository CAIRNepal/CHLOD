<?php

namespace Procrastinator;

trait JsonSerializeTrait
{
    /**
     * @return array<string, mixed>
     */
    private function serialize(): array
    {
        $serialized = [];

        $properties = [];
        $parent = new \ReflectionClass(static::class);
        while ($parent) {
            $properties = [...$properties, ...$parent->getProperties()];
            $parent = $parent->getParentClass();
        }

        /* @var $property \ReflectionProperty */
        foreach ($properties as $property) {
            $name = $property->getName();
            if (!in_array($name, $this->serializeIgnoreProperties())) {
                $property->setAccessible(true);
                $serialized[$property->getName()] = $this->serializeProcessValue($property->getValue($this));
            }
        }

        return $serialized;
    }

    private function serializeProcessValue($value)
    {
        if (is_object($value)) {
            return $this->serializeProcessValueObject($value);
        } elseif (is_array($value)) {
            return $this->serializeProcessValueArray($value);
        }
        return $value;
    }

    private function serializeProcessValueObject($object)
    {
        if ($object instanceof \stdClass) {
            return $object;
        } elseif ($object instanceof \JsonSerializable) {
            return ['@type' => 'object', '@class' => get_class($object), 'data' => $object->jsonSerialize()];
        } else {
            $class = get_class($object);
            $interface = \JsonSerializable::class;
            $message = "Failed to serialize {$class} object as it does not implement {$interface}";
            throw new \Exception($message);
        }
    }

    private function serializeProcessValueArray($array): array
    {
        $serialized = [];

        foreach ($array as $key => $value) {
            $serialized[$key] = $this->serializeProcessValue($value);
        }

        return ['@type' => 'array', 'data' => $serialized];
    }

    protected function serializeIgnoreProperties(): array
    {
        return [];
    }
}
