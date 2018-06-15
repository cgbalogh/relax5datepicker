/**
 * Adds a certain number of days to a date value
 */
Date.prototype.addDays = function(days) {
	this.setDate(this.getDate() + days);
} 

/**
 * initialize date and timepickers
 */
/*
$.timepicker.setDefaults($.timepicker.regional['de']); 
$( '.timepicker' ).datetimepicker({timeOnly: true, showButtonPanel: false});

$( '.datetimepicker' ).datetimepicker({beforeShowDay: function(date) {
        return markHoliday(date);
    }
});

$( '.datetimepicker' ).datetimepicker( "option", "changeYear", true );
$( '.datetimepicker' ).datetimepicker( "option", "changeMonth", true );
$( '.datetimepicker' ).datetimepicker( "option", "numberOfMonths", 3 );
$( '.datetimepicker' ).datetimepicker( "option", "showButtonPanel", true );
$( '.datetimepicker' ).datetimepicker( "option", "showWeek", true );
$( '.datetimepicker' ).datetimepicker( "option", "minDate", +1);
*/



/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */
$.datepicker.regional['de'] = {
	closeText: "Schließen",
	prevText: "&#x3C;Zurück",
	nextText: "Vor&#x3E;",
	currentText: "Heute",
	monthNames: [ "Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember" ],
	monthNamesShort: [ "Jan","Feb","Mär","Apr","Mai","Jun",	"Jul","Aug","Sep","Okt","Nov","Dez" ],
	dayNames: [ "Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag" ],
	dayNamesShort: [ "So","Mo","Di","Mi","Do","Fr","Sa" ],
	dayNamesMin: [ "So","Mo","Di","Mi","Do","Fr","Sa" ],
	weekHeader: "KW",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };

$.datepicker.regional['en'] = {
	closeText: "Done",
	prevText: "Prev",
	nextText: "Next",
	currentText: "Today",
	monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
	monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
	dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ],
	weekHeader: "Wk",
	dateFormat: "mm/dd/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };

/**
 * activateDatepicker
 * activates the datepicker
 */
function activateDatepicker ( lang, holiday ) {
    // if language code is given, choose that one, otherwise see if global var _lang is set take en as default
    _lang = $('html').attr('lang');
    if ( (typeof(lang) == 'undefined') || (lang == null)) {
        if (typeof(_lang) == 'undefined') {
            lang = 'en';
        } else {
            lang = _lang;
        }
    }

    // set language coding
    $.datepicker.setDefaults($.datepicker.regional[lang]);
    $.timepicker.setDefaults($.timepicker.regional[lang]); 

	$( '.datepicker' ).each(function(key, el){
		minDate = makeInt($(this).attr('mindate'));
		maxDate = makeInt($(this).attr('maxdate'));
		workingdays = makeInt($(this).attr('workingdays'));

		if ( workingdays > 0) {
			minDate = findWorkingday( minDate );
			maxDate = findWorkingday( maxDate );
		}
		
		$(this).datepicker({ 
            beforeShow: function(input, obj) {
                $(input).after($(input).datepicker('widget'));
                if ($(document).scrollTop() != 0) {
                    window.setTimeout(function() {
                        correctedPosition = $(input).offset().top-$(document).scrollTop()+$(input).outerHeight();
                        $('#ui-datepicker-div').css('top', correctedPosition + 'px');
                    },10);
                }
            },
			beforeShowDay: markHoliday,
			changeYear: true,
			changeMonth: true,
			numberOfMonths: 3,
			minDate: minDate,
			maxDate: maxDate
		});
	});
}

/**
 * 
 * @returns {undefined}
 */
function activateDatetimepicker () {
    // if language code is given, choose that one, otherwise see if global var _lang is set take en as default
    _lang = $('html').attr('lang');
    if ( (typeof(lang) == 'undefined') || (lang == null)) {
        if (typeof(_lang) == 'undefined') {
            lang = 'en';
        } else {
            lang = _lang;
        }
    }

    // set language coding
    $.datepicker.setDefaults($.datepicker.regional[lang]);
    $.timepicker.setDefaults($.timepicker.regional[lang]); 

    $( '.datetimepicker' ).each(function(key, el){
		minDate = makeInt($(this).attr('mindate'));
		maxDate = makeInt($(this).attr('maxdate'));
		workingdays = makeInt($(this).attr('workingdays'));
		
		today = new Date;
		if ( workingdays > 0) {
			minDate = findWorkingday( today, minDate );
			maxDate = findWorkingday( today, maxDate );
		}
		
		$(this).datetimepicker({
            beforeShow: function(input, obj) {
                $(input).after($(input).datepicker('widget'));
                if ($(document).scrollTop() != 0) {
                    window.setTimeout(function() {
                        inputHeight = $(input).outerHeight();
                        correctedPosition = $(input).offset().top-$(document).scrollTop() + inputHeight;
                        $('#ui-datepicker-div').css('top', correctedPosition + 'px');
                        
                        maxViewport = window.innerHeight + $(document).scrollTop();
                        maxWindow = $('#ui-datepicker-div').offset().top + $('#ui-datepicker-div').outerHeight();
                        if (maxWindow > maxViewport) {
                            height = $('#ui-datepicker-div').outerHeight();
                            newtop = $('#ui-datepicker-div').position().top - height - inputHeight;
                            $('#ui-datepicker-div').css('top', newtop + 'px');
                        }
                        
                    },10);
                }
            },
			beforeShowDay: function(date) {return markHoliday(date);},
			changeYear: true,
			changeMonth: true, 
			numberOfMonths: 3,
			showButtonPanel: true,
			showWeek: true,
			minuteGrid: 5,
			hourGrid: 1,
			minDate: minDate,
			maxDate: maxDate
		});
	});
}

/**
 * function markHoliday
 * 
 * @param {type} date
 * @returns {Array}
 */
function markHoliday ( date ) {
    ymdDay = date.getFullYear() + '_' + ((date.getMonth() + 1)) + '_' + date.getDate();
    mdDay = ((date.getMonth() + 1)) + '_' + date.getDate();
    year = date.getFullYear();

	if (_holidayList[mdDay]) {
		return [true, 'ui-datepicker-holiday', _holidayList[mdDay].tooltip, true];
	}
	
    if (typeof _holidayList['variable'] !== "undefined") {
        for (i = 0; i < _holidayList['variable'].length; i++) {
            offsetDate = calculateOffsetDate ( year, _holidayList['variable'][i].origin, _holidayList['variable'][i].offset);
            if ((offsetDate.getTime() === date.getTime())) return [true, 'ui-datepicker-holiday', _holidayList['variable'][i].tooltip, true];
        }
    }
    return [true,'','',false]; 
}

/**
 * function easter
 *
 * Calculates the date of eatser based on the year in y
 * Based on Gauss' algorithm
 * 
 * @params (int) y
 */
function easter( y ) {
	var a = y % 19;
	var b = Math.floor( y / 100 );
	var c = y % 100;
	var d = Math.floor( b / 4 );
	var e = b % 4;
	var f = Math.floor( (b + 8) / 25 );
	var g = Math.floor( (b - f + 1) / 3 );
	var h = (19 * a + b - d - g + 15) % 30;
	var i = Math.floor( c / 4 );
	var k = c % 4;
	var l = (32 + 2 * e + 2 * i - h - k) % 7; 
	var m = Math.floor ( (a + 11 * h + 22 * l) / 451 );
	var n =	Math.floor ( (h + l - 7 * m + 114) / 31 );
	var p =	( (h + l - 7 * m + 114) % 31 );
	return new Date( y, n - 1, p + 1 );
}

/**
 * function findWorkingday
 * 
 * The function counts from a given date and counts up to the number of given workingdays
 * 
 * @param {type} workingdays
 * @param {date} date
 * @returns {Number|counter}
 */
function findWorkingday ( workingdays, date ) {
    if ((typeof(date) == 'undefined') || (typeof date.getMonth !== 'function')) {
        date = new Date;
    }
    
	counter = 0;
	if (workingdays < 0) {
		while ( workingdays < 0 && counter < 100) {
			counter--;
			date.addDays(-1);
			
			if ( ! redDay(date) ) {
				workingdays++;
			}
		}
	} else if (workingdays > 0) {
		while ( workingdays > 0 && counter < 100) {
			counter++;
			date.addDays(1);

			if ( ! redDay(date) ) {
				workingdays--;
			}
		}
	}
	return counter;
}

/**
 * 
 * @param {type} date
 * @returns {Array}
 */
function redDay ( date ) {
	if (( date.getDay() == 6) || ( date.getDay() == 0)) return true;
    
    holiday = markHoliday( date );
    return holiday[3];
}

/**
* function calculateOffsetDate

 * @param {type} y
 * @param {type} origin
 * @param {type} offset
 * @returns {unresolved} */
function calculateOffsetDate ( y, origin, offset ) {
    var e;
    fnString = "e = " + origin + "(" + y + "); e.addDays(" + offset + "); return e;" ;
    fn = makeFn(fnString);
    return fn();
}