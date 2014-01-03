/**
 * Lodash Mixin: {{lodash-mixin-safename}}
 * Copyright (c) 2014 Brian Woodward, Jon Schlinkert, contributors.
 * Licensed under the MIT License (MIT).
 */

// This code was pulled from 
// https://github.com/assemble/grunt-readme/blob/master/tasks/lib/mixins.js
// to make it useful in other projects.

var _ = require('lodash');

// Export mixins
var mixins = module.exports = {};
/**
 * {{safename}}
 */
mixins.safename = function(name, patterns) {
	var prefixes = ['grunt', 'helper', 'handlebars-helper', 'mixin', 'assemble-contrib', 'assemble'];
  var remove = _.unique(_.flatten(_.union([], prefixes, patterns || [])));
  var re = new RegExp('^(?:' + remove.join('|') + ')[-_]?');
  return name.replace(re, '').replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
};

mixins.shortname = function(name, patterns) {
	return mixins.safename(name, patterns);
};