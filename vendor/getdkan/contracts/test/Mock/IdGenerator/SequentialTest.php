<?php

namespace ContractsTest\Mock\IdGenerator;

use Contracts\Mock\IdGenerator\Sequential;
use PHPUnit\Framework\TestCase;

class SequentialTest extends TestCase
{
    public function test(): void
    {
        $generator = new Sequential();
        $id1 = $generator->generate();
        $this->assertEquals(1, $id1);
        $id2 = $generator->generate();
        $this->assertEquals(2, $id2);
    }
}
