/*
 * jQuery stringToSlug plug-in 1.2.1
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

jQuery.fn.stringToSlug = function(options) {
	var defaults = {
 		setEvents: 'keyup keydown blur', //set Events that your script will work
		getPut: '#permalink', //set output field
		space: '-', //Sets the space character. If the hyphen,
		prefix: '',
		suffix: '',
		replace: '', //Sample: /\s?\([^\)]*\)/gi
		callback: false
	};
	
	var opts = jQuery.extend(defaults, options);

	jQuery(this).bind(defaults.setEvents, function () {
		var text = jQuery(this).val();
		text = defaults.prefix + text + defaults.suffix; //Concatenate with prefix and suffix		
		text = text.replace(defaults.replace, ""); //replace
		text = jQuery.trim(text.toString()); //Remove side spaces and convert to String Object
		
		var chars = []; //Cria vetor de caracteres
		for (var i = 0; i < 32; i++) {
			chars.push ('');
		}	
		
		/*** Abaixo a lista de caracteres ***/
		chars.push (defaults.space); // Unicode 32
		chars.push ('');   // !
		chars.push ('');   // "
		chars.push ('');   // #
		chars.push ('');   // $
		chars.push ('');   // %
		chars.push ('');   // &
		chars.push ("");   // '
		chars.push (defaults.space);  // (
		chars.push (defaults.space);  // ); 
		chars.push ('');   // *
		chars.push ('');   // +
		chars.push (defaults.space);  // ); 
		chars.push (defaults.space);  // -
		chars.push (defaults.space);  // .
		chars.push (defaults.space);  // /
		chars.push ('0');  // 0
		chars.push ('1');  // 1
		chars.push ('2');  // 2
		chars.push ('3');  // 3
		chars.push ('4');  // 4
		chars.push ('5');  // 5
		chars.push ('6');  // 6
		chars.push ('7');  // 7
		chars.push ('8');  // 8
		chars.push ('9');  // 9
		chars.push ('');   // :
		chars.push ('');   // ;
		chars.push ('');   // <
		chars.push ('');   // =
		chars.push ('');   // >
		chars.push ('');   // ?
		chars.push ('');   // @
		chars.push ('A');  // A
		chars.push ('B');  // B
		chars.push ('C');  // C
		chars.push ('D');  // D
		chars.push ('E');  // E
		chars.push ('F');  // F
		chars.push ('G');  // G
		chars.push ('H');  // H
		chars.push ('I');  // I
		chars.push ('J');  // J
		chars.push ('K');  // K
		chars.push ('L');  // L
		chars.push ('M');  // M
		chars.push ('N');  // N
		chars.push ('O');  // O
		chars.push ('P');  // P
		chars.push ('Q');  // Q
		chars.push ('R');  // R
		chars.push ('S');  // S
		chars.push ('T');  // T
		chars.push ('U');  // U
		chars.push ('V');  // V
		chars.push ('W');  // W
		chars.push ('X');  // X
		chars.push ('Y');  // Y
		chars.push ('Z');  // Z
		chars.push (defaults.space);  // [
		chars.push (defaults.space);  // /
		chars.push (defaults.space);  // ]
		chars.push ('');   // ^
		chars.push (defaults.space);  // _
		chars.push ('');   // `
		chars.push ('a');  // a
		chars.push ('b');  // b
		chars.push ('c');  // c
		chars.push ('d');  // d
		chars.push ('e');  // e
		chars.push ('f');  // f
		chars.push ('g');  // g
		chars.push ('h');  // h
		chars.push ('i');  // i
		chars.push ('j');  // j
		chars.push ('k');  // k
		chars.push ('l');  // l
		chars.push ('m');  // m
		chars.push ('n');  // n
		chars.push ('o');  // o
		chars.push ('p');  // p
		chars.push ('q');  // q
		chars.push ('r');  // r
		chars.push ('s');  // s
		chars.push ('t');  // t
		chars.push ('u');  // u
		chars.push ('v');  // v
		chars.push ('w');  // w
		chars.push ('x');  // x
		chars.push ('y');  // y
		chars.push ('z');  // z
		chars.push (defaults.space);  // {
		chars.push ('');   // |
		chars.push (defaults.space);  // }
		chars.push ('');   // ~
		chars.push ('');   // ? 007F control char: del

		// start of C1 Controls (Range: 0080–009F)
		// TODO: shouldn't control chars be empty?
		chars.push ('C'); // 0080 control char 
		chars.push ('A');
		chars.push ('');
		chars.push ('f'); 
		chars.push (''); 
		chars.push (''); 
		chars.push ('T'); 
		chars.push ('t'); 
		chars.push (''); 
		chars.push (''); 
		chars.push ('S'); 
		chars.push (''); 
		chars.push ('CE'); 
		chars.push ('A'); 
		chars.push ('Z'); 
		chars.push ('A'); // 008F control char
		chars.push ('A'); 
		chars.push (''); 
		chars.push (''); 
		chars.push (''); 
		chars.push (''); 
		chars.push (''); 
		chars.push (defaults.space); 
		chars.push (defaults.space); 
		chars.push (''); 
		chars.push ('TM'); 
		chars.push ('s'); 
		chars.push (''); 
		chars.push ('ae'); 
		chars.push ('A'); 
		chars.push ('z');
		chars.push ('Y'); // 009F control char: application program command

		// start of Latin-1 Supplement (Range: 00A0-00FF)
		chars.push (''); // 00A0 control char: no break space 
		chars.push ('');
		chars.push ('c'); 
		chars.push ('L'); 
		chars.push ('o'); 
		chars.push ('Y'); 
		chars.push (''); 
		chars.push ('S'); 
		chars.push (''); 
		chars.push ('c'); 
		chars.push ('a');
		chars.push (''); 
		chars.push (''); 
		chars.push (''); 
		chars.push ('r'); 
		chars.push (defaults.space); 
		chars.push ('o'); 
		chars.push (''); 
		chars.push ('2'); 
		chars.push ('3'); 
		chars.push (''); 
		chars.push ('u'); 
		chars.push ('p'); 
		chars.push (''); 
		chars.push (''); 
		chars.push ('1'); 
		chars.push ('o'); 
		chars.push (''); 
		chars.push (''); 
		chars.push (''); 
		chars.push (''); 
		chars.push (''); 
		chars.push ('A'); //00C0 À
		chars.push ('A'); 
		chars.push ('A'); 
		chars.push ('A'); 
		chars.push ('A'); 
		chars.push ('A'); 
		chars.push ('AE'); 
		chars.push ('C'); 
		chars.push ('E'); 
		chars.push ('E'); 
		chars.push ('E'); 
		chars.push ('E'); 
		chars.push ('I'); 
		chars.push ('I'); 
		chars.push ('I'); 
		chars.push ('I'); 
		chars.push ('D'); 
		chars.push ('N'); 
		chars.push ('O'); 
		chars.push ('O'); 
		chars.push ('O'); 
		chars.push ('O'); 
		chars.push ('O'); 
		chars.push ('x'); 
		chars.push ('O'); 
		chars.push ('U'); 
		chars.push ('U'); 
		chars.push ('U'); 
		chars.push ('U'); 
		chars.push ('Y'); 
		chars.push ('D'); 
		chars.push ('B'); 
		chars.push ('a'); 
		chars.push ('a'); 
		chars.push ('a'); 
		chars.push ('a'); 
		chars.push ('a'); 
		chars.push ('a'); 
		chars.push ('ae'); 
		chars.push ('c'); 
		chars.push ('e'); 
		chars.push ('e'); 
		chars.push ('e'); 
		chars.push ('e'); 
		chars.push ('i'); 
		chars.push ('i'); 
		chars.push ('i'); 
		chars.push ('i'); 
		chars.push ('o'); 
		chars.push ('n'); 
		chars.push ('o'); 
		chars.push ('o'); 
		chars.push ('o'); 
		chars.push ('o'); 
		chars.push ('o'); 
		chars.push (''); 
		chars.push ('o'); 
		chars.push ('u'); 
		chars.push ('u'); 
		chars.push ('u'); 
		chars.push ('u'); 
		chars.push ('y'); 
		chars.push (''); 
		chars.push ('y'); // 00FF

		// start of Latin Extended-A (Range: Range: 0100–017F)
		chars.push ('A'); // 0100 Ā
		chars.push ('a');
		chars.push ('A'); 
		chars.push ('a'); 
		chars.push ('A'); 
		chars.push ('a');
		chars.push ('C'); // 0106 Ć 
		chars.push ('c'); 
		chars.push ('C'); 
		chars.push ('c'); 
		chars.push ('C'); 
		chars.push ('c'); 
		chars.push ('C'); 
		chars.push ('c'); 
		chars.push ('D'); // 010E Ď
		chars.push ('d'); 
		chars.push ('D'); 
		chars.push ('d'); 
		chars.push ('E'); // 0112 Ē
		chars.push ('e'); 
		chars.push ('E'); 
		chars.push ('e'); 
		chars.push ('E'); 
		chars.push ('e'); 
		chars.push ('E'); 
		chars.push ('e'); 
		chars.push ('E'); 
		chars.push ('e'); 
		chars.push ('G'); // 011C Ĝ 
		chars.push ('g'); 
		chars.push ('G'); 
		chars.push ('g'); 
		chars.push ('G'); 
		chars.push ('g'); 
		chars.push ('G'); 
		chars.push ('g'); 
		chars.push ('H'); // 0124 Ĥ
		chars.push ('h'); 
		chars.push ('H'); 
		chars.push ('h'); 
		chars.push ('I'); // 0128 Ĩ
		chars.push ('i'); 
		chars.push ('I'); 
		chars.push ('i'); 
		chars.push ('I'); 
		chars.push ('i'); 
		chars.push ('I'); 
		chars.push ('i'); 
		chars.push ('I'); 
		chars.push ('i');
		chars.push ('IJ'); // 0132 Ĳ 
		chars.push ('ij'); 
		chars.push ('J'); 
		chars.push ('j'); 
		chars.push ('K'); // 0136 Ķ
		chars.push ('k'); 
		chars.push ('k'); 
		chars.push ('L'); // 0139 Ĺ 
		chars.push ('l'); 
		chars.push ('L'); 
		chars.push ('l'); 
		chars.push ('L'); 
		chars.push ('l'); 
		chars.push ('L'); 
		chars.push ('l'); 
		chars.push ('L'); 
		chars.push ('l'); 
		chars.push ('N'); // 0143 Ń  
		chars.push ('n'); 
		chars.push ('N'); 
		chars.push ('n'); 
		chars.push ('N'); 
		chars.push ('n'); 
		chars.push ('n'); // 0149 deprecated ŉ
		chars.push ('N'); 
		chars.push ('n'); 
		chars.push ('O'); // 014C Ō 
		chars.push ('o'); 
		chars.push ('O'); 
		chars.push ('o'); 
		chars.push ('O'); 
		chars.push ('o'); 
		chars.push ('OE');
		chars.push ('oe'); 
		chars.push ('R'); // 0154 Ŕ
		chars.push ('r'); 
		chars.push ('R'); 
		chars.push ('r'); 
		chars.push ('R');
		chars.push ('r'); 
		chars.push ('S'); // 015A Ś
		chars.push ('s'); 
		chars.push ('S'); 
		chars.push ('s'); 
		chars.push ('S'); 
		chars.push ('s'); 
		chars.push ('S'); 
		chars.push ('s'); 
		chars.push ('T'); // 0162 Ţ 
		chars.push ('t'); 
		chars.push ('T'); 
		chars.push ('t'); 
		chars.push ('T'); 
		chars.push ('t'); 
		chars.push ('U'); // 0168 Ũ
		chars.push ('u'); 
		chars.push ('U'); 
		chars.push ('u'); 
		chars.push ('U'); 
		chars.push ('u'); 
		chars.push ('U'); 
		chars.push ('u'); 
		chars.push ('U'); 
		chars.push ('u'); 
		chars.push ('U'); 
		chars.push ('u'); 
		chars.push ('W'); // 0174 Ŵ 
		chars.push ('w'); 
		chars.push ('Y'); // 0176 Ŷ
		chars.push ('y'); 
		chars.push ('Y'); 
		chars.push ('Z'); // 0179 Ź
		chars.push ('z'); 
		chars.push ('Z'); 
		chars.push ('z'); 
		chars.push ('Z'); 
		chars.push ('z'); 
		chars.push ('s'); // 017F
		// end of Latin Extended-A
		// TODO: add other characters
		
		for (var i = 256; i < 100; i++) {
			chars.push ('');
		}
		
		var stringToSlug = new String (); //Create a stringToSlug String Object
		var lenChars = chars.length; // store length of the array
		for (var i = 0; i < text.length; i ++) {
			var cCAt = text.charCodeAt(i);
			if(cCAt < lenChars) stringToSlug += chars[cCAt]; //Insert values converts at slugs (if it exists in the array)
		}
		
		stringToSlug = stringToSlug.replace (new RegExp ('\\'+defaults.space+'{2,}', 'gmi'), defaults.space); // Remove any space character followed by Breakfast
		stringToSlug = stringToSlug.replace (new RegExp ('(^'+defaults.space+')|('+defaults.space+'$)', 'gmi'), ''); // Remove the space at the beginning or end of string
		
		stringToSlug = stringToSlug.toLowerCase(); //Convert your slug in lowercase		
		
		
		jQuery(defaults.getPut).val(stringToSlug); //Write in value to input fields (input text, textarea, input hidden, ...)
		jQuery(defaults.getPut).html(stringToSlug); //Write in HTML tags (span, p, strong, h1, ...)
		
		if(defaults.callback!=false){		
			defaults.callback(stringToSlug);
		}
		
		return this;
	});
        
  return this;
}
