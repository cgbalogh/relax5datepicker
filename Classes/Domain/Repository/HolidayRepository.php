<?php
namespace CGB\Relax5datepicker\Domain\Repository;

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
 * The repository for Holidays
 */
class HolidayRepository extends \TYPO3\CMS\Extbase\Persistence\Repository
{

	/**
     * function findAll
     * 
     * overrides the standard query to add the ability to select localized records
     * 
     * 
     * @return type
     */ 
    public function findAll () {
		$query = $this->createQuery();
        
        $query->getQuerySettings()
            ->setRespectStoragePage(FALSE)
            ->setLanguageUid($GLOBALS['TSFE']->sys_language_uid);
         
		return $query->execute();
	 }
    
    
    
}