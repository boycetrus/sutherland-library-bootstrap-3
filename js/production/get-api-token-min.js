$(document).ready(function(){$.ajax({url:"https://webpac.sutherlandshire.nsw.gov.au:443/iii/sierra-api/v6/token/",beforeSend:function(e){e.setRequestHeader("Authorization","Basic [API KEY + SECRET (BASE64)]")},success:function(e){console.log(e)},error:function(e){console.log(e)}}),$.get("http://webpac.sutherlandshire.nsw.gov.au/feeds/newbiographies.xml",function(e){console.log(e)})});