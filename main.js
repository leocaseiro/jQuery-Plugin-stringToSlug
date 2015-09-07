
$(document).ready( function() {

    $(".basic-usage").stringToSlug();
    $("#input-blur").stringToSlug({
                                      setEvents: 'blur',
                                      getPut: '.input-blur-preview'
                                  });
    $("#input-getput").stringToSlug({
                                        getPut: '.input-getput-preview'
                                    });
    $("#input-space").stringToSlug({
                                       space: '_',
                                       getPut: '.input-space-preview'
                                   });
    $("#input-prefix").stringToSlug({
                                        prefix: 'js-',
                                        getPut: '.input-prefix-preview'
                                    });
    $("#input-suffix").stringToSlug({
                                        suffix: '.jpg',
                                        getPut: '.input-suffix-preview'
                                    });
    $("#input-replace").stringToSlug({
                                         replace: /\s?\([^\)]*\)/gi,
                                         getPut: '.input-replace-preview'
                                     });
    $("#input-and").stringToSlug({
                                     AND: 'y',
                                     getPut: '.input-and-preview'
                                 });
    $("#input-options").stringToSlug({
                                         options: {
                                             lang: 'ar',
                                             titleCase: true
                                         },
                                         getPut: '.input-options-preview'
                                     });
    $("#input-callback").stringToSlug({
                                          callback: function(text) {
                                              console.warn('This warn is a callback: ' + text);
                                          },
                                          getPut: '.input-callback-preview'
                                      });

    $('[data-spy="affix"]').affix({
                                      offset: {
                                          top: $('[data-spy="affix"]').offset().top,
                                          bottom: 120
                                      }
                                  } ).css('top','0');
});
