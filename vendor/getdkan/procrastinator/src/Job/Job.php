<?php


namespace Procrastinator\Job;

use Procrastinator\JsonSerializeTrait;
use Procrastinator\Result;

/**
 * @todo Change name to AbstractJob.
 */
abstract class Job implements \JsonSerializable
{
    use JsonSerializeTrait;

    private ?Result $result = null;

    /**
     * Time limit in seconds.
     *
     * Defaults to three days.
     *
     * @var int
     */
    private int $timeLimit = 259200;

    abstract protected function runIt();

    public function run(): Result
    {
        if ($this->getResult()->getStatus() == Result::DONE) {
            return $this->getResult();
        }

        // Trying again, clear the previous error.
        if ($this->getResult()->getStatus() == Result::ERROR) {
            $this->getResult()->setError("");
        }

        $this->setStatus(Result::IN_PROGRESS);

        try {
            $data = $this->runIt();
        } catch (\Exception $e) {
            $this->setError($e->getMessage());
            return $this->getResult();
        }

        if ($data) {
            $this->processDataFromRunIt($data);
        } else {
            $this->setStatus(Result::DONE);
        }

        return $this->result;
    }

    private function processDataFromRunIt($data): void
    {
        if ($data instanceof Result) {
            $this->result = $data;
        } elseif (is_string($data)) {
            $this->result->setData($data);
            $this->setStatus(Result::DONE);
        } else {
            throw new \Exception("Invalid result or data format.");
        }
    }

    public function setTimeLimit(int $seconds): bool
    {
        $this->timeLimit = $seconds;
        return true;
    }

    /**
     * @todo Check why we need to allow external parties to affect our state.
     * @todo Should this be renamed to setDataProperty? Should it be in Result?
     */
    public function setStateProperty($property, $value): void
    {
        $state = $this->getState();
        $state[$property] = $value;
        $this->setState($state);
    }

    public function getTimeLimit(): int
    {
        return $this->timeLimit;
    }

    public function getState()
    {
        return (array) json_decode($this->getResult()->getData());
    }

    public function getStateProperty(string $property, $default = null)
    {
        $state = $this->getState();
        if (array_key_exists($property, $state)) {
            return $state[$property];
        } elseif (isset($default)) {
            return $default;
        } else {
            return false;
        }
    }

    public function getResult(): Result
    {
        if (!isset($this->result)) {
            $this->result = new Result();
        }
        return $this->result;
    }

    /**
     * @return mixed
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
        return $this->serialize();
    }

    protected function setStatus($status)
    {
        $this->getResult()->setStatus($status);
    }

    protected function setError($message)
    {
        $this->result->setError($message);
        $this->setStatus(Result::ERROR);
    }

    protected function setState($state)
    {
        $this->getResult()->setData(json_encode($state));
    }
}
