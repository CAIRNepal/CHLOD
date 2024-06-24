<?php


namespace Procrastinator\Job;

class Method extends Job
{
    private $object;
    private $methodName;

    public function __construct($object, $methodName)
    {
        $this->object = $object;
        $this->methodName = $methodName;
    }

    protected function runIt()
    {
        return call_user_func([$this->object, $this->methodName]);
    }
}
