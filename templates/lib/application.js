/*!
 * <%= appName %> — <%= appDescription %>
 */

'use strict';

/**
 * Module dependencies
 */
const EventEmitter = require( 'events' ).EventEmitter;
const mixin  = require( 'merge-descriptors' );
const proto = require( './prototype' );
const controllers = require( './controllers/controllers.js' );
const models = require( './models/models.js' );
const views = require( './views/views.js' );

/**
 * Expose `createApplication()`
 */
exports = module.exports = createApplication;

/**
 * Create an application
 *
 * @return {Function}
 * @api public
 */
function createApplication () {
  var app = function () {};

  mixin( app, EventEmitter.prototype, false );
  mixin( app, proto, false );

  app.init();
  return app;
};

/**
 * Expose the prototypes.
 */
exports.application = proto;
exports.controllers = controllers;
exports.models = models;
exports.views = views;
