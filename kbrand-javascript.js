jQuery.noConflict();
jQuery( document ).ready(function( $ ) {
	if($('#responsive-ads') != undefined){
		var gaPannel = $('#responsive-ads');
		if(gaPannel.height() == 0) {
			gaPannel.attr('class', 'please-unblock');
			gaPannel.html('<strong>To our blogging community, please unblock or whitelist us in AdsBlocker</strong>');
			
			ga('send', 'event', 'AdsBlocker', 'enabled');
		} else {
			ga('send', 'event', 'AdsBlocker', 'disabled');
		}
	}
});
