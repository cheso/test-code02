/* add library */
var addDatePickerLib = function(){
	document.write("<link href='../resource/css/datepicker/mobiscroll.animation.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.icons.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.frame.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.frame.android.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.frame.android-holo.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.frame.wp.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.scroller.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.scroller.android.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.scroller.android-holo.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.scroller.wp.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.android-holo-light.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.wp-light.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/mobiscroll.mobiscroll-dark.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='../resource/css/datepicker/style-datepicker.css' rel='stylesheet' type='text/css' />");
	
	document.write("<script src='../resource/js/datepicker/mobiscroll.core.js'></script>");
	document.write("<script src='../resource/js/datepicker/mobiscroll.frame.js'></script>");
	document.write("<script src='../resource/js/datepicker/mobiscroll.scroller.js'></script>");
	document.write("<script src='../resource/js/datepicker/mobiscroll.util.datetime.js'></script>");
	document.write("<script src='../resource/js/datepicker/mobiscroll.datetimebase.js'></script>");
	document.write("<script src='../resource/js/datepicker/mobiscroll.datetime.js'></script>");
	document.write("<script src='../resource/js/datepicker/mobiscroll.frame.android.js'></script>");
	document.write("<script src='../resource/js/datepicker/mobiscroll.frame.android-holo.js'></script>");
	document.write("<script src='../resource/js/datepicker/mobiscroll.android-holo-light.js'></script>");
	document.write("<script src='../resource/js/datepicker/mobiscroll.i18n.js'></script>");
};

function datePickerSet(){
    try{
        if($('.datePicker').length > 0){
            $('.datePicker').mobiscroll().date({
                //theme: 'android',
                //theme: 'android-holo',
                theme: 'android-holo-light',
                mode: 'scroller',
                //display: 'bottom',
                headerText: "<h1>날짜선택 <a href='#' class='btnX'></a></h1>",
                lang: 'ko_yymmdd'           //use to set format for value after picking
            });
        }

        if($('.timePicker').length > 0){
            $('.timePicker').mobiscroll().time({
                //theme: 'android',
                //theme: 'android-holo',
                theme: 'android-holo-light',
                mode: 'scroller',
                //display: 'bottom',
                headerText: "<h1>날짜선택 <a href='#' class='btnX'></a></h1>",
                lang: 'ko_HHii'             //use to set format for value after picking
            });
        }

        if($('.dateTimePicker').length > 0){
            $('.dateTimePicker').mobiscroll().datetime({
                //theme: 'android',
                //theme: 'android-holo',
                theme: 'android-holo-light',
                mode: 'scroller',
                //display: 'bottom',
                headerText: "<h1>날짜선택 <a href='#' class='btnX'></a></h1>",
                lang: 'ko_yymmddHHii'       //use to set format for value after picking
            });
        }    
    }catch(e){
        return false;
    }
}

$(function(){
    datePickerSet();
});