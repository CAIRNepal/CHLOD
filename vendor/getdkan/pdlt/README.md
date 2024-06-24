[![Maintainability](https://api.codeclimate.com/v1/badges/e7bf8f7b56a6f1bf4c68/maintainability)](https://codeclimate.com/github/GetDKAN/pdlt/maintainability) | [![Test Coverage](https://api.codeclimate.com/v1/badges/e7bf8f7b56a6f1bf4c68/test_coverage)](https://codeclimate.com/github/GetDKAN/pdlt/test_coverage)

# PHP Date Language Tool

A simple parser generator for reading, processing, or translating regular date language formats.

## Usage

To convert a Strptime to MySQL date format:

``` php
<?php

use PDLT\CompilationMap\MySQL as MySQLCompilationMap;
use PDLT\Compiler;
use PDLT\Converter;
use PDLT\Grammar\Strptime as StrptimeGrammar;
use PDLT\Parser;

// Build Strptime to MySQL date format converter using Strptime date format
// parser and MySQL date format Compiler.
$strptime_parser = new Parser(new StrptimeGrammar());
$mysql_compiler = new Compiler(new MySQLCompilationMap());
$converter = new Converter($strptime_parser, $mysql_compiler);

// Convert a Strptime date format.
echo $converter->convert('%-m/%-d/%y');
// Output: "%c/%e/%y".
```

## Supported Date Format Languages

### Supported Input Formats

- [strptime](https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior)

### Supported Output Formats

- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-format)