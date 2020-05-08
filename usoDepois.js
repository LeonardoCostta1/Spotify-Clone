
import $ from 'jquery'

$(document).ready(function(){

    $('.overview_menu ul li').click(function(){

      $('ul li').removeClass("active");

      $(this).addClass("active");
  });
  });
