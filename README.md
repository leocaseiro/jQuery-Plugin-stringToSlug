jQuery Plugin stringToSlug
=============

A simple plugin in jQuery to create a URL.
The stringToSlug converts string in any Language, including those with accents and special caracheteres, to a SLUG.

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
The stringToSlug uses a third-party library called [speakingURL](http://pid.github.io/speakingurl/) that removes special characters and converts the string to lowercase. The **StringToSlug** replaces spaces with space characteres(separator) and offers the option to add a prefix and/or a suffix for your slug.

Transforming a string into a url-friendly permalink.
You can use the plugin to display a preview in a html element or in an input form.

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

Watch all files with *gulp watcher* to develop and test in realtime
```shell
gulp watcher
```

Use **gulp tests** for testing
```shell
gulp tests
```

Use *gulp build* to compile
```shell
gulp build
```


License
------------
Copyright (c) 2009-2015 Leo Caseiro. This is free software and is licensed under the MIT License.

Created and maintained by [Leo Caseiro](http://about.me/leocaseiro)
