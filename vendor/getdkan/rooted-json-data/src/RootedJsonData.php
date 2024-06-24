<?php

namespace RootedData;

use InvalidArgumentException;
use JsonPath\InvalidJsonException;
use Opis\JsonSchema\Schema;
use Opis\JsonSchema\Validator;
use JsonPath\JsonObject;
use Opis\JsonSchema\ValidationResult;
use RootedData\Exception\ValidationException;

/**
 * RootedJsonData class. Instantiate for a service-like object for working with
 * JSON.
 */
class RootedJsonData
{

    private ?string $schema = null;
    private JsonObject $data;

    /**
     * Constructor method.
     *
     * @param string $json
     *   String of JSON data.
     * @param string $schema
     *   JSON schema document for validation.
     * @throws InvalidJsonException
     */
    public function __construct(string $json = "{}", string $schema = "{}")
    {
        if (Schema::fromJsonString($schema)) {
            $this->schema = $schema;
        }

        $result = self::validate($json, $this->schema);
        if (!$result->isValid()) {
            throw new ValidationException("JSON Schema validation failed.", $result);
        }

        $this->data = new JsonObject($json, true);
    }

    /**
     * Validate JSON.
     *
     * @param string $json
     *   JSON string to validate against schema.
     * @param string $schema
     *   JSON Schema string.
     *
     * @return ValidationResult
     *   Validation result object, contains error report if invalid.
     */
    public static function validate(string $json, string $schema): ValidationResult
    {
        $decoded = json_decode($json);

        if (!isset($decoded)) {
            throw new InvalidArgumentException("Invalid JSON: " . json_last_error_msg());
        }

        $opiSchema = Schema::fromJsonString($schema);
        $validator = new Validator();
        return $validator->schemaValidation($decoded, $opiSchema);
    }

    /**
     * String version of object is the string version of the JsonObject.
     *
     * @return string
     */
    public function __toString(): string
    {
        return $this->data->getJson();
    }
    
    /**
     * Return pretty-formatted JSON string
     *
     * @return string
     */
    public function pretty()
    {
        return $this->data->getJson(JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    }

    /**
     * @param string $path
     *   JSON Path
     *
     * @return mixed
     *   Result of JsonPath\JsonObject::__get()
     */
    public function get(string $path)
    {
        if ($this->__isset($path) === false) {
            return null;
        }
        return $this->data->get($path);
    }

    /**
     * @param string $path
     *
     * @return mixed
     *   Result of JsonPath\JsonObject::__get()
     * @see \JsonPath\JsonObject::__get()
     *
     */
    public function __get(string $path)
    {
        return $this->get($path);
    }

    /**
     * Set JSON Path to value.
     *
     * @param string $path
     * @param mixed $value
     *
     * @return JsonObject
     * @throws InvalidJsonException
     */
    public function set(string $path, $value)
    {
        $this->normalizeSetValue($value);
        $validationJsonObject = new JsonObject((string) $this->data);
        $validationJsonObject->set($path, $value);

        $result = self::validate($validationJsonObject, $this->schema);
        if (!$result->isValid()) {
            $keywordArgs = $result->getFirstError()->keywordArgs();
            $message = "{$path} expects a {$keywordArgs['expected']}";
            throw new ValidationException($message, $result);
        }

        return $this->data->set($path, $value);
    }

    /**
     * Ensure consistent data type whether RootedJsonData or stdClass.
     *
     * @param mixed $value
     */
    private function normalizeSetValue(&$value): void
    {
        if ($value instanceof RootedJsonData) {
            $value = $value->{"$"};
        }
        if ($value instanceof \stdClass) {
            $value = new RootedJsonData(json_encode($value));
            $this->normalizeSetValue($value);
        }
    }

    /**
     * @see \JsonPath\JsonObject::__get()
     *
     * @param mixed $path
     * @param mixed $value
     *
     * @return JsonObject
     */
    public function __set(string $path, $value)
    {
        return $this->set($path, $value);
    }

    /**
     * Magic __isset method for a path.
     *
     * @param mixed $path
     *   Check if a property at this path is set or not.
     *
     * @return bool
     */
    public function __isset($path)
    {
        $notSmart = new JsonObject("{$this->data}");
        return $notSmart->get($path) ? true : false;
    }

    /**
     * Magic __unset method, detects field from path.
     *
     * @param mixed $path
     *   Path to unset, including specific field.
     */
    public function __unset($path)
    {
        $exploded = explode(".", $path);
        $field = array_pop($exploded);
        $imploded = implode(".", $exploded);
        $this->remove($imploded, $field);
    }

    /**
     * Wrapper for JsonObject::remove() method, plus validation.
     *
     * @param mixed $path
     *   jsonPath.
     * @param mixed $field
     *   Field to remove.
     *
     * @return JsonObject
     *  Modified object (self).
     */
    public function remove($path, $field)
    {
        $validationJsonObject = new JsonObject((string) $this->data);
        $validationJsonObject->remove($path, $field);

        $result = self::validate($validationJsonObject, $this->schema);
        if (!$result->isValid()) {
            $keywordArgs = $result->getFirstError()->keywordArgs();
            $message = "{$path} expects a {$keywordArgs['expected']}";
            throw new ValidationException($message, $result);
        }

        return $this->data->remove($path, $field);
    }

    /**
     * Get the JSON Schema as a string.
     *
     * @return string|null
     *   The JSON Schema for this object.
     */
    public function getSchema(): ?string
    {
        return $this->schema;
    }

    /**
     * Wrapper for JsonObject add() method
     *
     * @param string $path
     *   Path to an array
     * @param mixed $value
     *   Value to add
     * @param string $field
     *   Key if adding key/value pair
     *
     * @return JsonObject
     * @throws InvalidJsonException
     *
     * @see JsonPath\JsonObject::add()
     */
    public function add($path, $value, $field = null)
    {
        $this->normalizeSetValue($value);
        $validationJsonObject = new JsonObject((string) $this->data);
        $validationJsonObject->add($path, $value, $field);

        $result = self::validate($validationJsonObject, $this->schema);
        if (!$result->isValid()) {
            $message = "JSON Schema validation failed.";
            throw new ValidationException($message, $result);
        }

        return $this->data->add($path, $value, $field);
    }
}
