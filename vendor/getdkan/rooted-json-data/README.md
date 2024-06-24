# RootedJsonData

[![Build status](https://circleci.com/gh/GetDKAN/RootedJsonData.svg?style=svg)](https://app.circleci.com/pipelines/github/GetDKAN/RootedJsonData?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/0b3a46899cbf9f2c9343/maintainability)](https://codeclimate.com/github/GetDKAN/RootedJsonData/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/0b3a46899cbf9f2c9343/test_coverage)](https://codeclimate.com/github/GetDKAN/RootedJsonData/test_coverage)

Access and modify JSON-based data objects while enforcing JSON Schema.

This library primarily wires together [JsonPath-PHP](https://github.com/Galbar/JsonPath-PHP/) and [Opis JSON Schema](https://github.com/opis/json-schema), providing a JSON Object class that functions like a small internal service. Data can be added, retrieved and modified through a simple API, and any changes will immediately provoke a re-validation. Validation errors through exceptions with actionable messages.

Example:

```php
$json = '{"number":3}';
$schema = '{"type": "object","properties": {"number":{ "type": "number" }}}';
$data = new RootedJsonData($json, $schema);
echo $data->{"$.number"}; // 3
echo $data->{"$[number]"}; // 3
echo "{$data}"; // {"number":3}
$data->{"$.number"} = "three"; // EXCEPTION
```