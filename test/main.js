/**
 * Lodash Mixin: {{lodash-mixin-safename}}
 * Copyright (c) 2014 Brian Woodward, Jon Schlinkert, contributors.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect;
var _ = require('lodash');

_.mixin(require('../'));

describe('lodash-mixin-safename', function() {

  describe('safename', function() {
  
    it('should remove grunt prefix', function() {
      var expected = 'readme';
      var actual = _.safename('grunt-readme');
      expect(actual).to.eql(expected);
    });

    it('should remove foo prefix', function() {
      var expected = 'bar';
      var actual = _.safename('foo-bar', ['foo']);
      expect(actual).to.eql(expected);
    });
  
  });

  describe('shortname', function() {
  
    it('should remove grunt prefix', function() {
      var expected = 'readme';
      var actual = _.safename('grunt-readme');
      expect(actual).to.eql(expected);
    });

    it('should remove foo prefix', function() {
      var expected = 'bar';
      var actual = _.safename('foo-bar', ['foo']);
      expect(actual).to.eql(expected);
    });
  
  });

});