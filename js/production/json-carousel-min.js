$("document").ready(function(){var e=$("#book-carousel");$.getJSON("/js/json/booklist.json",function(){console.log("json request made")}).done(function(o){console.log(o),$.each(o.entries,function(o,s){var t=s.cover_img,n=s.title,i="http://encore.sutherlandshire.nsw.gov.au/iii/encore/record/C__R"+s.id,a=s.author,r=s.isbn;$('<div class="item"><a target="_blank" title="'+n+'" href="'+i+'"><img src="'+t+'" /><p class="sr-only">'+n+" by "+a+"</p></a></div>").appendTo(e)}),e.owlCarousel({margin:10,nav:!0,dots:!0,loop:!0,responsive:{0:{items:1},400:{items:2},600:{items:3},800:{items:4},1e3:{items:5},1200:{items:6},1400:{items:7},1600:{items:8}}}),$(".owl-nav > *").addClass("btn btn-default btn-xs")})});