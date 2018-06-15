<?php
namespace CGB\Relax5datepicker\Controller;


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
 * HolidayController
 */
class HolidayController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{

    /**
     * holidayRepository
     *
     * @var \CGB\Relax5datepicker\Domain\Repository\HolidayRepository
     * @inject
     */
    protected $holidayRepository = NULL;
    
    /**
     * action list
     * 
     * returns the holidaylist as json representation
     * will be embedded on avery page by typoscript
     *
     * @return void
     */
    public function listAction()
    {
        $holidays = $this->holidayRepository->findAll();
        $holidayList = array();
        foreach ($holidays as $holiday) {
            if ($holiday->getOrigin()) {
                $obj = new \stdClass();
                $obj->tooltip = $holiday->getName();
                $obj->origin = $holiday->getOrigin();
                $obj->offset = $holiday->getOffset();
                $holidayList['variable'][] = $obj;
            } else {
                $index = $holiday->getMonth() . '_' . $holiday->getDay();
                $obj = new \stdClass();
                $obj->tooltip = $holiday->getName();

                $holidayList[$index] = $obj;
            }
        }
        
        return 
            '<script>var _holidayList = ' . json_encode($holidayList) . '</script>';
    }

}