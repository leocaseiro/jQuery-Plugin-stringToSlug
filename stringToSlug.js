function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();
  
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;ğĞüÜşŞiİöÖçÇıI";
  var to   = "aaaaeeeeiiiioooouuuunc------gguussiiooccii";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '');
  str = str.replace(/\s+/g, '-');
  str = str.replace(/-+/g, '-');

  return str;
}
