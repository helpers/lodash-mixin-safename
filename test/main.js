/**
 * Lodash Mixin: {{lodash-mixin-safename}}
 * Copyright (c) 2014 Brian Woodward, Jon Schlinkert, contributors.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect;
var _ = require('lodash');

_.mixin(require('../'));

describe('lodash-mixin-safename', function() {

	before(function(){
		// run any code before tests here
	});

  it('should do something awesome', function() {
    var expected = 'FOO';
    var actual = _.safename('foo');
    expect(actual).to.eql(expected);
  });

});