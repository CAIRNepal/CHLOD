<?php

namespace PDLT\Tests;

use PDLT\CompilationMap\MySQL;
use PDLT\CompilationMapInterface;
use PDLT\Compiler;
use PDLT\DirectiveToken;
use PDLT\TokenInterface;
use PDLT\UnsupportedTokenException;
use PHPUnit\Framework\TestCase;

/**
 * @coversDefaultClass \PDLT\Compiler
 */
class CompilerTest extends TestCase {

  /**
   * @covers ::compileToken
   */
  public function testCompileTokenException(): void {
    $this->expectException(UnsupportedTokenException::class);
    $this->expectExceptionMessage('Unable to compile unsupported token type');

    $map_mock = $this->getMockForAbstractClass(CompilationMapInterface::class);
    (new Compiler($map_mock))->compile([
      // Mock object is never DirectiveToken or LiteralToken.
      $this->getMockForAbstractClass(TokenInterface::class),
    ]);
  }

  /**
   * @covers ::compileDirective
   */
  public function testCompileDirectiveException(): void {
    $this->expectException(UnsupportedTokenException::class);
    $this->expectExceptionMessage('Unable to compile unsupported directive "this-directive-should-not-exist"; not found in compilation map "PDLT\CompilationMap\MySQL".');

    (new Compiler(new MySQL()))->compile([
      new DirectiveToken('this-directive-should-not-exist'),
    ]);
  }

}
