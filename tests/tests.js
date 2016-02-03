function setupBefore() {
    $('body').append('<input id="text" type="hidden" /><input type="hidden" id="permalink" />');
}

function teardownAfter() {
    $('#text').remove();
    $('#permalink').remove();
}

function fromToTest(preText, resultExpect, params) {
    params = params || {};
    $('#text').stringToSlug(params);

    $('#text')
		.val(preText)
		.trigger('blur');

	var result = $('#permalink').val();
	equal(result, resultExpect, preText + ': ' + result);
}


test('speakingurl Dependency', function(){
    strictEqual(true, typeof getSlug !== 'undefined', 'getURL() passed');
});

module('Features', {
    setup: setupBefore,
    teardown: teardownAfter
});

test( "Replace", function() {
    var params = {
        replace: /\s?\([^\)]*\)/gi
   	};

	var preText 		= "I'll be alone (because Ill be removed)!";
	var resultExpect 	= 'i-ll-be-alone';

	fromToTest(preText, resultExpect, params);
});

test( "Space", function() {
    var params = {
        space: '_'
   	};

	var preText 		= "The space is an undescore";
	var resultExpect 	= 'the_space_is_an_undescore';

	fromToTest(preText, resultExpect, params);
});

test( "Prefix", function() {
    var params = {
        prefix: 'http://'
   	};

	var preText 		= "I will get a prefix!";
	var resultExpect 	= 'http://i-will-get-a-prefix';

	fromToTest(preText, resultExpect, params);
});


test( "Suffix", function() {
    var params = {
        suffix: '.jpg'
   	};

	var preText 		= "I will get a suffix!";
	var resultExpect 	= 'i-will-get-a-suffix.jpg';

	fromToTest(preText, resultExpect, params);
});

test( "& AND", function() {
    var params = {
        AND: 'e'
   	};

	var preText 		= "Man & Woman";
	var resultExpect 	= 'man-e-woman';

	fromToTest(preText, resultExpect, params);
});


module('Bug fixes', {
    setup: setupBefore,
    teardown: teardownAfter
});

test( "“ and ” (Undefined chars)", function() {

	var preText 		= "A text betweet quotes “ and ” are not going to be a problem!";
	var resultExpect 	= 'a-text-betweet-quotes-and-are-not-going-to-be-a-problem';

	fromToTest(preText, resultExpect);
});

test( "callback don't bind", function() {
    var params = {
        callback: function(){console.log('callback as console');}
    };

    var preText         = "A text betweet quotes “ and ” are not going to be a problem!";
    var resultExpect    = 'a-text-betweet-quotes-and-are-not-going-to-be-a-problem';

    fromToTest(preText, resultExpect, params);
});

test( "titleCase with accent", function() {
    var params = {
        options: {
            titleCase: true,
            lang: 'pt'
        }
    };

	var preText 		= "Ánhanguera should be Anhanguera, but it's getting ANhanguera, same as Anguéra";
	var resultExpect 	= 'Anhanguera-Should-Be-Anhanguera-But-It-s-Getting-ANhanguera-Same-As-Anguera';

	fromToTest(preText, resultExpect, params);
});
