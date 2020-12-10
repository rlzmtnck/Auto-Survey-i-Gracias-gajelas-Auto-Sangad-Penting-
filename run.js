// ==UserScript==
// @name         AutoSurvey
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Auto Survey Script!
// @author       rlzmtnck <hi@tod.dev>
// @match        https://igracias.telkomuniversity.ac.id/survey/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */
(function() {
    'use strict';

    var multi = 'Sangat Penting';
    var option = 'Ya';

    $('.answerlist1:contains('+multi+'), .answerlist1:contains('+option+')').each(function(){
        $(this).parent().each(function(){
            $(this).find('.answerlist2').children().click()
        })
    });
    $("input[class='opt']").each(( idx, data )=>{
        if(idx%10===9){
            data.checked = true
        }
    });
})();