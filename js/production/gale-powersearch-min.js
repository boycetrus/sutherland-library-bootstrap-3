function searchGale(){var e="https://support.gale.com/widgets/search/?loc=sutherland&id=gps&q=",c=$("#quicksearchInput").val(),n=e+c;window.location.href=n}$(document).ready(function(){$("#quickSearchBtn").on("click",function(e){e.preventDefault(),searchGale()}),$("#quicksearchInput").keydown(function(e){13===e.which&&(e.preventDefault(),searchGale())})});