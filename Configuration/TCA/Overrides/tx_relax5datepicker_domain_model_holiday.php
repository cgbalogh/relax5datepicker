<?php

## EXTENSION BUILDER DEFAULTS END TOKEN - Everything BEFORE this line is overwritten with the defaults of the extension builder

/**
 * adjust select values for origin
 */
$GLOBALS['TCA']['tx_relax5datepicker_domain_model_holiday']['columns']['origin'] = array(
    'exclude' => 1,
    'label' => 'LLL:EXT:relax5datepicker/Resources/Private/Language/locallang_db.xlf:tx_relax5datepicker_domain_model_holiday.origin',
    'config' => array(
        'type' => 'select',
        'renderType' => 'selectSingle',
        'items' => array(
            array('-- Origin --', ''),
            array('Easter', 'easter'),
        ),
        'size' => 1,
        'maxitems' => 1,
        'eval' => ''
    ),
);
