<?php

namespace PDLT\Tests;

use PDLT\Grammar\Strptime;
use PDLT\Parser;
use PDLT\UnknownTokenException;
use PHPUnit\Framework\TestCase;

/**
 * @coversDefaultClass \PDLT\Parser
 */
class ParserTest extends TestCase {

  /**
   * @covers ::lex
   * @see https://www.php.net/manual/en/function.strftime.php
   */
  public function testLexException(): void {
    $this->expectException(UnknownTokenException::class);
    $this->expectExceptionMessage('Invalid format provided; token "%i" not found in grammar "PDLT\Grammar\Strptime".');

    $grammar = new Strptime();
    $parser = new Parser($grammar);
    $parser->parse('%i');
  }

}
