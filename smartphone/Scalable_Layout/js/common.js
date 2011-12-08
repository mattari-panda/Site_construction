(function(){
var _UA = navigator.userAgent;
var _asAndroid  = (_UA.indexOf('Android') > -1)? true:false;
var _androidVer = parseFloat(_UA.slice(_UA.indexOf('Android')+8, _UA.indexOf('Android')+11),10);
var _asOldAnd   = (_androidVer < 2.2)? true:false;
var _asiOS3     = (_UA.indexOf('iPhone OS 3') > -1)? true:false;

$(function() {
	//Android's landscape mode setting.
	//if(_asAndroid){
		window.addEventListener("resize, load", setContentsWidth, false);
		setContentsWidth();
		
		function setContentsWidth(){
			
			var scrollY        = $(window).scrollTop();
			var winOrient      = window.orientation;
			var setScreenWidth = $(window).width();
			
			alert(setScreenWidth);
			
			var zoomParcent = Math.ceil((setScreenWidth/320)*100);
			$('html').css('zoom',zoomParcent + '%');

			return false;
		}
	//}
});
})();