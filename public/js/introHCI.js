'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	//$(".likeBtn").click( ga("send", "event", 'like', 'click'));
    $(".likeBtn").click(function(e){
        gtag('event', 'click', {
            'event_category': 'like',
            'event_label': 'user clicked like',
            'value': 1
        });
    });
}