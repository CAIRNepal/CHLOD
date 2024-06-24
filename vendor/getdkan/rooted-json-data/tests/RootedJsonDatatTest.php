<?php


namespace RootedDataTest;

use PHPUnit\Framework\TestCase;
use RootedData\RootedJsonData;
use Opis\JsonSchema\Exception\InvalidSchemaException;
use Opis\JsonSchema\Exception\SchemaKeywordException;
use RootedData\Exception\ValidationException;

class RootedJsonDataTest extends TestCase
{
    public function testJsonInOut()
    {
        $data = new RootedJsonData();
        $data->set("$.title", "Hello");
        $this->assertEquals('{"title":"Hello"}', "{$data}");

        $data->set("$.publisher.name", "Frank");

        $this->assertEquals('{"title":"Hello","publisher":{"name":"Frank"}}', (string) $data);
    }

    public function testMagicGetterAndSetter()
    {
        $data = new RootedJsonData();
        $data->{"$.title"} = "Hello";
        $this->assertEquals('{"title":"Hello"}', "{$data}");
        $this->assertEquals("Hello", $data->{"$.title"});
    }

    public function testBracketSyntax()
    {
        $data = new RootedJsonData();
        $data->{"$[title]"} = "Hello";
        $this->assertEquals('{"title":"Hello"}', "{$data}");
        $this->assertEquals("Hello", $data->{"$[title]"});
    }

    public function testAccessToNonExistentProperties()
    {
        $data = new RootedJsonData();
        $this->assertNull($data->get("$.city"));
        $this->assertFalse(isset($data->{"$.city"}));
    }

    public function testJsonFormat()
    {
      // We want our data to keep its integrity in the in-betweens: From input to output.
        $this->expectExceptionMessage("Invalid JSON: Syntax error");
        $json = "{";
        new RootedJsonData($json);
    }

    public function testJsonIntegrityFailure()
    {
        $json = '{"number":"hello"}';
        $schema = '{"type": "object","properties": {"number":{ "type": "number" }}}';
        try {
            new RootedJsonData($json, $schema);
        } catch (ValidationException $e) {
            $this->assertInstanceOf(ValidationException::class, $e);
            $this->assertEquals("type", $e->getResult()->getFirstError()->keyword());
        }
    }

    // Schema does not follow JSON Schema spec
    public function testSchemaIntegrity()
    {
        $this->expectException(SchemaKeywordException::class);
        $json = '{"number":"hello"}';
        // Keyword "properties" should be an object not an array.
        $schema = '{"type":"object","properties":[{"number":{"type":"number"}}]}';
        new RootedJsonData($json, $schema);
    }

    // Schema is not even valid JSON
    public function testSchemaJsonIntegrity()
    {
        $this->expectException(InvalidSchemaException::class);
        $json = '{"number":"hello"}';
        // Missing a closing bracket
        $schema = '{"type":"object","properties":{"number":{"type":"number"}}';
        new RootedJsonData($json, $schema);
    }

    public function testJsonIntegrity()
    {
        $json = '{"number":51}';
        $schema = '{"type": "object","properties":{"number":{"type":"number"}}}';
        $data = new RootedJsonData($json, $schema);
        $this->assertEquals($json, "{$data}");
    }

    public function testJsonIntegrityFailureAfterChange()
    {
        $this->expectExceptionMessage("\$.number expects a number");

        $json = '{"number":51}';
        $schema = '{"type":"object","properties": {"number":{ "type":"number"}}}';
        $data = new RootedJsonData($json, $schema);

        $data->set("$.number", "Alice");
    }

    /**
     * Do schemas still work with magic setter?
     */
    public function testJsonIntegrityFailureMagicSetter()
    {
        $this->expectExceptionMessage("\$[number] expects a number");

        $json = '{"number":51}';
        $schema = '{"type":"object","properties": {"number":{ "type":"number"}}}';
        $data = new RootedJsonData($json, $schema);
        $data->{"$[number]"} = "Alice";
    }

    /**
     * Simple get value from JSON path.
     */
    public function testJsonPathGetter()
    {
        $json = '{"container":{"number":51}}';
        $data = new RootedJsonData($json);
        $this->assertEquals(51, $data->get("$.container.number"));
    }

    /**
     * Simple set by JSON path.
     */
    public function testJsonPathSetter()
    {
        $json = '{"container":{"number":51}}';
        $data = new RootedJsonData($json);
        $data->set("$.container.number", 52);
        $this->assertEquals(52, $data->get("$.container.number"));
    }

    /**
     * Adding JSON structures in multiple formats should have predictable results.
     */
    public function testAddJsonData()
    {
        // Test adding RootedJsonData structure.
        $json = '{}';
        $containerSchema = '{"type":"object","properties":{"number":{"type":"number"}}}';
        $schema = '{"type":"object","properties":{"container":'.$containerSchema.'}}';
        $subJson = '{"number":51}';
        $data = new RootedJsonData($json, $schema);
        $data->set("$.container", new RootedJsonData($subJson));
        $this->assertEquals(51, $data->get("$.container.number"));
        
        // If we add stdClass object, it should be work and be an array.
        $data2 = new RootedJsonData($json, $schema);
        $data2->set("$.container", json_decode($subJson));
        $this->assertEquals(51, $data2->get("$.container.number"));
        $this->assertIsArray($data2->get("$.container"));
    }
    
    /**
     * getSchema() should return the same string that was provided to constructor.
     */
    public function testSchemaGetter()
    {
        $json = '{"number":51}';
        $schema = '{"type": "object","properties":{"number":{"type":"number"}}}';
        $data = new RootedJsonData($json, $schema);
        $this->assertEquals($schema, $data->getSchema());
    }

    /**
     * Regular string should be one line, pretty() should return multiple lines.
     */
    public function testPretty()
    {
        $json = '{"number":51}';
        $data = new RootedJsonData($json);
        $this->assertEquals(0, substr_count("$data", "\n"));
        $this->assertEquals(2, substr_count($data->pretty(), "\n"));
    }

    /**
     * Adds string elements to an array.
     */
    public function testAdd()
    {
        $json = '{"numbers":["zero","one","two"]}';
        $data = new RootedJsonData($json);
        $data->add("$.numbers", "three");
        $this->assertEquals("three", $data->{"$.numbers[3]"});
    }

    /**
     * Adds object elements to an array.
     */
    public function testAddObject()
    {
        $json = '{"numbers":[{"name":"zero","value":0}]}';
        $data = new RootedJsonData($json);
        $data->add("$.numbers", ["name" => "one", "value" => 1]);
        $this->assertEquals("one", current($data->{"$.numbers[?(@.value == 1)].name"}));
    }

    /**
     * If a schema is provided, adding elements that match array should work,
     * elements that violate schema will fail.
     */
    public function testAddWithSchema()
    {
        $json = '{"numbers":["zero","one"]}';
        $schema = '{"type": "object","properties":{"numbers":{"type":"array","items":{"type":"string"}}}}';
        $data = new RootedJsonData($json, $schema);
        $data->add("$.numbers", "two");
        $this->assertEquals("two", $data->{"$.numbers[2]"});
        $this->expectException(ValidationException::class);
        $data->add("$.numbers", ["name" => "three", "value" => 3]);
    }

    /**
     * If a schema is provided, adding elements that match array should work,
     * elements that violate schema will fail.
     */
    public function testRemove()
    {
        $json = '{"field1":"foo","field2":"bar"}';
        $schema = '
            {
                "type": "object",
                "required":["field1"],
                "properties": {
                    "field1": {
                        "type":"string"
                    },
                    "field2": {
                        "type":"string"
                    }
                }
            }';
        $data = new RootedJsonData($json, $schema);
        $data->remove("$", "field2");
        $this->assertEquals("foo", $data->{"$.field1"});
        $this->expectException(ValidationException::class);
        $data->remove("$", "field1");
    }

    /**
     * If a schema is provided, adding elements that match array should work,
     * elements that violate schema will fail.
     */
    public function testUnset()
    {
        $json = '{"field1":"foo","field2":"bar"}';
        $schema = '
            {
                "type": "object",
                "required":["field1"],
                "properties": {
                    "field1": {
                        "type":"string"
                    },
                    "field2": {
                        "type":"string"
                    }
                }
            }';
        $data = new RootedJsonData($json, $schema);
        unset($data->{"$.field2"});
        $this->assertEquals("foo", $data->{"$.field1"});
        $this->expectException(ValidationException::class);
        unset($data->{"$.field1"});
    }
}
