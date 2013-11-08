/*!
 * microsecond - test/microsecond.test.js
 * 
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var microtime = require('microtime');
var microsecond = require('../');

describe('microsecond.test.js', function () {
  it('should got diff', function () {
    var start = microsecond.start();
    var now = microtime.now();
    console.log('%s, %s', microsecond.diff(start), microtime.now() - now);
  });
});
