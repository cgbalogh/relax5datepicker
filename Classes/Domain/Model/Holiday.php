<?php
namespace CGB\Relax5datepicker\Domain\Model;


/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2017 Christoph Balogh <cb@lustige-informatik.at>
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * Holidays
 */
class Holiday extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
{

    /**
     * name
     *
     * @var string
     * @validate NotEmpty
     */
    protected $name = '';
    
    /**
     * Day
     *
     * @var int
     */
    protected $day = 0;
    
    /**
     * month
     *
     * @var int
     */
    protected $month = 0;
    
    /**
     * year
     *
     * @var int
     */
    protected $year = 0;
    
    /**
     * origin
     *
     * @var int
     */
    protected $origin = 0;
    
    /**
     * offset
     *
     * @var int
     */
    protected $offset = 0;
    
    /**
     * Returns the name
     *
     * @return string $name
     */
    public function getName()
    {
        return $this->name;
    }
    
    /**
     * Sets the name
     *
     * @param string $name
     * @return void
     */
    public function setName($name)
    {
        $this->name = $name;
    }
    
    /**
     * Returns the day
     *
     * @return int $day
     */
    public function getDay()
    {
        return $this->day;
    }
    
    /**
     * Sets the day
     *
     * @param int $day
     * @return void
     */
    public function setDay($day)
    {
        $this->day = $day;
    }
    
    /**
     * Returns the month
     *
     * @return int $month
     */
    public function getMonth()
    {
        return $this->month;
    }
    
    /**
     * Sets the month
     *
     * @param int $month
     * @return void
     */
    public function setMonth($month)
    {
        $this->month = $month;
    }
    
    /**
     * Returns the year
     *
     * @return int $year
     */
    public function getYear()
    {
        return $this->year;
    }
    
    /**
     * Sets the year
     *
     * @param int $year
     * @return void
     */
    public function setYear($year)
    {
        $this->year = $year;
    }
    
    /**
     * Returns the origin
     *
     * @return int $origin
     */
    public function getOrigin()
    {
        return $this->origin;
    }
    
    /**
     * Sets the origin
     *
     * @param int $origin
     * @return void
     */
    public function setOrigin($origin)
    {
        $this->origin = $origin;
    }
    
    /**
     * Returns the offset
     *
     * @return int $offset
     */
    public function getOffset()
    {
        return $this->offset;
    }
    
    /**
     * Sets the offset
     *
     * @param int $offset
     * @return void
     */
    public function setOffset($offset)
    {
        $this->offset = $offset;
    }

}