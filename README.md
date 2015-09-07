jQuery Plugin stringToSlug
=============

A Simple Plugin in jQuery JavaScript Framework.
The stringToSlug converts any string to SLUG supporting all Languages using or not accent and special chars as well.

Documentation
--------------
Full Documentation with Examples at [http://leocaseiro.github.io/jQuery-Plugin-stringToSlug/](http://leocaseiro.github.io/jQuery-Plugin-stringToSlug/)


Default Usage:
--------------

```javascript
$(document).ready( function() {
    $("#string").stringToSlug();
});
```


Install via Bower:
-----------------
```
bower install --save jquery.stringtoslug
```

[Download](https://github.com/leocaseiro/jQuery-Plugin-stringToSlug/archive/v2.0.0.zip):
-----------------
[Click here to download the latest version](https://github.com/leocaseiro/jQuery-Plugin-stringToSlug/archive/v2.0.0.zip)

Description
--------------
The stringToSlug uses a third-party library speakingURL that removes special characters, converts the string to lowercase. The StringToSlug also defines a space character and set optionally a prefix and/or a suffix for your slug.

Transforming a string into a url-friendly permalink.
You can use the plugin to display a view in html elements or form inputs.

Contributing
------------
The StringToSlug uses [**NodeJS with NPM**](http://nodejs.org/) and **Gulp** for compile, **Jasmine** and **Karma** for testing:

To install **Bower** and **Gulp** globally, use **npm install -g**:
```shell
npm install -g bower
npm install -g gulp
```

Install all dependencies with NPM and make sure Bower is up to date:
```shell
npm install
bower install
```

List all tasks with gulp
```shell
gulp
```

Gulp Watcher for Development
```shell
gulp watcher
```

Gulp Tests for Tests
```shell
gulp tests
```

Gulp Build to Compile
```shell
gulp build
```


License
------------
Copyright (c) 2009-2015 Leo Caseiro. This is a free software is licensed under the MIT License.

[Leo Caseiro](http://about.me/leocaseiro)
