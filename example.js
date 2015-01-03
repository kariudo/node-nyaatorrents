#!/usr/bin/env node

var NT = require("./"),     // import nyaatorrents
    nt = new NT("http://www.nyaa.se/"), // configure new connection with default url
    term = "toradora",      // title to search for
    options = {
      category: "enAnime",  // english translated anime
      filter: "trusted"    // trusted releases only
    };

nt.search(term, options, function(err, res) {
  if (err) {
    return console.warn(err); // if failure, print error to console
  }

  console.log(JSON.stringify(res, null, 2)); // format as json, print to console
});
