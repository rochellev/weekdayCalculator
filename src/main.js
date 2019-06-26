import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CoolDate } from './coolDate.js';

$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    let monthInput = parseInt($('#month').val());
    let dayInput = parseInt($('#day').val());
    let yearInput = parseInt($('#year').val());
    let dateInput = new CoolDate(yearInput, monthInput, dayInput);


    $("#solution").append("<li>" + dateInput.toString() + "</li>");



    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
  });
});
