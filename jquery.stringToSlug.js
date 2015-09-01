/*
 * jQuery stringToSlug plug-in 1.3.1
 *
 * Plugin HomePage http://leocaseiro.com.br/jquery-plugin-string-to-slug/
 *
 * Copyright (c) 2009 Leo Caseiro
 *
 * Based on Edson Hilios (http://www.edsonhilios.com.br/ Algoritm
 *
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
var _stringToSlug_API = function( text, options ) {
    'use strict';

    var defaults = {
            setEvents: 'keyup keydown blur', //set Events to bind
            getPut: '#permalink', //set output field
            space: '-', //Sets the space(separator) character
            prefix: '', //Concatenated before the slug
            suffix: '', //Concatenated after the slug
            replace: '', //RegExp replacement: /\s?\([^\)]*\)/gi
            AND: 'and',
            options: {},
            callback: false
        },
        stringToSlug;

    jQuery.extend( defaults, options );

    /**
     * from stringToSlug.space to getSlug.separator
     */
    if ( ! defaults.options.hasOwnProperty( 'separator' ) ) {
        defaults.options.separator = defaults.space;
    }

    /**
     * from stringToSlug.space to getSlug.separator
     */
    if ( ! defaults.options.hasOwnProperty( 'custom' ) ) {
        defaults.options.custom = { '&': defaults.AND };
    }

    text = text.replace( defaults.replace, '' ); //replace

    try {
        text = getSlug( text, defaults.options );
    } catch ( err ) {
        console.warn( 'Make sure you insert speakingurl.min.js before jquery.stringToSlug.min.js' );
    }

    stringToSlug = defaults.prefix + text + defaults.suffix; //Concatenate with prefix and suffix

    return stringToSlug;
};

jQuery.fn.stringToSlug = function( options ) {
    'use strict';

    var defaults = {
        setEvents: 'keyup keydown blur', //set Events that your script will work
        getPut: '#permalink', //set output field
        space: '-', //Sets the space character. If the hyphen,
        prefix: '',
        suffix: '',
        replace: '', //Sample: /\s?\([^\)]*\)/gi
        AND: 'and',
        callback: false
    };

    jQuery.extend( defaults, options );

    jQuery( this ).bind( defaults.setEvents, function() {
        var text = jQuery( this ).val(),
            stringToSlug = _stringToSlug_API( text, options );

        jQuery( defaults.getPut ).val( stringToSlug ); //Write in value to input fields (input text, textarea, input hidden, ...)
        jQuery( defaults.getPut ).html( stringToSlug ); //Write in HTML tags (span, p, strong, h1, ...)

        if ( false !== defaults.callback ) {
            defaults.callback( stringToSlug );
        }

        return this;
    } );

    return this;
};
