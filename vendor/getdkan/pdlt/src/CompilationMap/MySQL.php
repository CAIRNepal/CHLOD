<?php

namespace PDLT\CompilationMap;

use PDLT\CompilationMapInterface;

/**
 * MySQL compilation map.
 *
 * Date Format Directives:
 *
 * | **Description**                            | **MySQL** |
 * |--------------------------------------------|-----------|
 * | Abbreviated weekday name (Sun to Sat)      | %a        |
 * | Abbreviated month name (Jan to Dec)        | %b        |
 * | Numeric month name (0 to 12)               | %c        |
 * | Numeric day of the month (01 to 31)        | %d        |
 * | Numeric day of the month (0 to 31)         | %e        |
 * | Microseconds (000000 to 999999)            | %f        |
 * | Hour (00 to 23)                            | %H        |
 * | Hour (00 to 12)                            | %I        |
 * | Minutes (00 to 59)                         | %i        |
 * | Day of the year (001 to 366)               | %j        |
 * | Hour (0 to 23)                             | %k        |
 * | Hour (1 to 12)                             | %l        |
 * | Month name in full (January to December)   | %M        |
 * | Month name as a numeric value (01 to 12)   | %m        |
 * | AM or PM                                   | %p        |
 * | Seconds (00 to 59)                         | %S or %s  |
 * | Week where Sunday is first day (00 to 53)  | %U        |
 * | Week where Monday is first day (00 to 53)  | %u        |
 * | Weekday name in full (Sunday to Saturday)  | %W        |
 * | Numeric day of week where Sun=0 and Sat=6  | %w        |
 * | Year as a numeric, 4-digit value           | %Y        |
 * | Year as a numeric, 2-digit value           | %y        |
 * | A literal '%' character                    | %%        |
 * | Numeric day of month with suffix (3rd)     | %D        |
 * | Time in 12 hour format (hh:mm:ss AM/PM)    | %r        |
 * | Time in 24 hour format (hh:mm:ss)          | %T        |
 * | Week where Sunday is first day (01 to 53)  | %V        |
 * | Week where Monday is first day (01 to 53)  | %v        |
 * | Year for week where Sunday is first day    | %X        |
 * | Year for week where Monday is first day    | %x        |
 */
class MySQL extends \ArrayObject implements CompilationMapInterface {

  /**
   * {@inheritdoc}
   */
  protected $storage = [
    // Abbreviated weekday name (Sun to Sat).
    '%a' => '%a',
    // Weekday name in full (Sunday to Saturday).
    '%A' => '%W',
    // Abbreviated month name (Jan to Dec).
    '%b' => '%b',
    // Month name in full (January to December).
    '%B' => '%M',
    // Day of the month as a numeric value (01 to 31).
    '%d' => '%d',
    // Microseconds (000000 to 999999).
    '%f' => '%f',
    // Hour (00 to 23).
    '%H' => '%H',
    // Hour (00 to 12).
    '%I' => '%I',
    // Numeric month name (0 to 12).
    '%m' => '%m',
    // Minutes (00 to 59).
    '%M' => '%i',
    // AM or PM.
    '%p' => '%p',
    // Seconds (00 to 59).
    '%S' => '%s',
    // Week where Sunday is the first day of the week (00 to 53).
    '%U' => '%U',
    // Weekday as decimal value (0 to 6).
    '%w' => '%w',
    // Week where Monday is the first day of the week (00 to 53).
    '%W' => '%u',
    // Year as a numeric, 2-digit value.
    '%y' => '%y',
    // Year as a numeric, 4-digit value.
    '%Y' => '%Y',
    // A literal '%' character.
    '%%' => '%%',
    // Day of the month as a numeric value (0 to 31).
    '%-d' => '%e',
    // Day of the year (001 to 366).
    '%-j' => '%j',
    // Hour (0 to 23).
    '%-H' => '%k',
    // Hour (1 to 12).
    '%-I' => '%l',
    // Month name as a numeric value (01 to 12).
    '%-m' => '%c',
    // Minutes (00 to 59).
    '%-M' => '%i',
    // Seconds (00 to 59).
    '%-S' => '%s',
  ];

  /**
   * Creates a MySQL compilation map.
   */
  public function __construct() {
    parent::__construct($this->storage);
  }

}
