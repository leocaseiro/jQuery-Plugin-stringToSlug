jQuery plugin stringToSlug [![Bower version](https://badge.fury.io/bo/jquery.stringtoslug.svg)](https://badge.fury.io/bo/jquery.stringtoslug) [![Build Status](https://travis-ci.org/leocaseiro/jQuery-Plugin-stringToSlug.svg?branch=master)](https://travis-ci.org/leocaseiro/jQuery-Plugin-stringToSlug)
=============

A simple plugin in jQuery to create a URL.
The stringToSlug converts string in any language, including those with accents and special characters, to a SLUG.

Documentation
--------------
Full documentation with examples at [http://leocaseiro.github.io/jQuery-Plugin-stringToSlug/](http://leocaseiro.github.io/jQuery-Plugin-stringToSlug/)


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

[Download](https://github.com/leocaseiro/jQuery-Plugin-stringToSlug/archive/v2.1.0.zip):
-----------------
[Click here to download the latest version](https://github.com/leocaseiro/jQuery-Plugin-stringToSlug/archive/v2.1.0.zip)

Description
--------------
The stringToSlug uses a third-party library called [speakingURL](http://pid.github.io/speakingurl/) that removes special characters and converts the string to lowercase. The **StringToSlug** replaces spaces with space characters(separators) and offers the option to add a prefix and/or a suffix for your slug.

In order to transform a string into a url-friendly permalink, use the plugin to display a preview in a *html element* or in an *input form*.

Contributing
------------
The **StringToSlug** uses [**NodeJS with NPM**](http://nodejs.org/) and [**Gulp**](http://gulpjs.com/) to compile a code, and [**QUnit**](https://qunitjs.com/) and [**Karma**](http://karma-runner.github.io/) for testing:

To install **Bower** and **Gulp** globally, use **npm install -g**:
```shell
npm install bower -g
npm install gulp -g
```

Download and install all dependencies with **NPM** and make sure **Bower** is up to date:
```shell
npm install
bower install
```

List all tasks with **Gulp**
```shell
gulp
```

Watch all files with **gulp watcher** to develop and test in realtime
```shell
gulp watcher
```

Use **gulp tests** for testing
```shell
gulp tests
```

Use **gulp build** to compile
```shell
gulp build
```


License
------------
Copyright (c) 2009-2018 Leo Caseiro. This is free software and is licensed under the MIT License.

Created and maintained by [Leo Caseiro](http://about.me/leocaseiro)

