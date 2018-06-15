<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
	'CGB.' . $_EXTKEY,
	'Holiday',
	'Holiday'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'relax5datepicker');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_relax5datepicker_domain_model_holiday', 'EXT:relax5datepicker/Resources/Private/Language/locallang_csh_tx_relax5datepicker_domain_model_holiday.xlf');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_relax5datepicker_domain_model_holiday');
