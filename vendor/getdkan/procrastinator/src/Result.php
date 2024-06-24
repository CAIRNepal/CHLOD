<?php

namespace Procrastinator;

use Contracts\HydratableInterface;

class Result implements HydratableInterface
{
    use HydratableTrait;

    public const WAITING = 'waiting';
    public const STOPPED = 'stopped';
    public const IN_PROGRESS = 'in_progress';
    public const ERROR = 'error';
    public const DONE = 'done';

    private $status = self::WAITING;
    private string $data = "";
    private string $error = "";

    public function setStatus($status): void
    {
        $statuss = [self::WAITING, self::STOPPED, self::IN_PROGRESS, self::ERROR, self::DONE];
        if (in_array($status, $statuss)) {
            $this->status = $status;
        } else {
            throw new \Exception("Invalid status {$status}");
        }
    }

    public function setData(string $data): void
    {
        $this->data = $data;
    }

    public function setError(string $error): void
    {
        $this->error = $error;
    }

    public function getStatus()
    {
        return $this->status;
    }

    public function getData(): string
    {
        return $this->data;
    }

    public function getError(): string
    {
        return $this->error;
    }

    /**
     * @return mixed
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
        return (object) ['status' => $this->status, 'data' => $this->data, 'error' => $this->error];
    }
}
