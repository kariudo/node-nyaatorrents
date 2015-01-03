node-nyaatorrents
=================

Search and fetch torrent information from [NyaaTorrents](http://www.nyaa.eu/).

Overview
--------

This is a light abstraction of the search and view functions of NyaaTorrents
(nyaa.eu, formerly nyaatorrents.info and nyaatorrents.org). It can currently
search the main site and the sukebei variant.

Now supports simpler formatting.

Based on the work of deoxxa (@deoxxa), github.com/deoxxa/node-nyaatorrents.

Installation
------------

Available via [npm](http://npmjs.org/):

> $ npm install git://github.com/kariudo/node-nyaatorrents.git

Or via git:

> $ git clone git://github.com/kariudo/node-nyaatorrents.git node_modules/nyaatorrents

Usage
-----

```javascript
var NT = require("nyaatorrents"),
    nt = new NT("http://www.nyaa.eu");

nt.search({term: "toradora"}, function(err, entries) {
  if (err) {
    return console.warn(err);
  }

  entries.forEach(function(entry) {
    nt.get(entry.id, function(err, entry) {
      if (err) {
        return console.warn(err);
      }

      console.log(JSON.stringify(entry));
    });
  });
});
```

Todo
----

* Support paging results
* Detect and filter by sub group based on tag
* Detect and filter by resolution based on tag
* Update docs with new syntax and features

License
-------

kariudo - MIT
deoxxa - 3-clause BSD

See source's LICENSE.md

Contact
-------

* GitHub ([kariudo](http://github.com/kariudo))
* Twitter ([@kariudo](http://twitter.com/kariudo))
* Email ([kariudo@gmail.com](mailto:kariudo@gmail.com))
