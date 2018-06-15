<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'CGB.' . $_EXTKEY,
	'Holiday',
	array(
		'Holiday' => 'list',
		
	),
	// non-cacheable actions
	array(
		'Holiday' => '',
		
	)
);
