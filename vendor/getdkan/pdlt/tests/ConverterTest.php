<?php

namespace PDLT\Tests;

use PDLT\CompilationMap\MySQL;
use PDLT\Compiler;
use PDLT\Converter;
use PDLT\Grammar\Strptime;
use PDLT\Parser;
use PHPUnit\Framework\TestCase;

/**
 * Unit tests for Converter class.
 */
class ConverterTest extends TestCase {

  public function provideFormats(): array {
    return [
      'from-readme' => ['%c/%e/%y', '%-m/%-d/%y'],
      ['%a', '%a'],

      ['%W', '%A'],

      ['%w', '%w'],
      ['%d', '%d'],
      ['%b', '%b'],

      ['%M', '%B'],

      ['%m', '%m'],
      ['%y', '%y'],
      ['%Y', '%Y'],
      ['%H', '%H'],
      ['%I', '%I'],
      ['%p', '%p'],

      ['%i', '%M'],
      ['%s', '%S'],

      ['%f', '%f'],
      ['%U', '%U'],

      ['%u', '%W'],

      ['%%', '%%'],
    ];
  }

  /**
   * @dataProvider provideFormats
   */
  public function testStrptimeToMySqlConverter(string $expected, string $input_format): void {
    $converter = new Converter(
      new Parser(new Strptime()),
      new Compiler(new MySQL())
    );

    $this->assertEquals($expected, $converter->convert($input_format));
  }

}
