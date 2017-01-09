/*!
 * <%= appName %> — <%= appDescription %>
 */

'use strict';

/**
 * Module dependencies
 * @private
 */
const fs = require( 'fs' );

/**
 * Expose prototypes
 */
const app = exports = module.exports = {};

/**
 * Start the application
 *
 * @private
 */
app.init = function init () {
  this.defaultConfiguration();
};

/**
 * Initialize application configuration.
 *
 * @private
 */
app.defaultConfiguration = function defaultConfiguration () {
};

/**
 * Assign `setting` to `val`, or return `setting`'s value
 *
 *    app.set( 'foo', 'bar' );
 *    app.get( 'foo' );
 *    // => "bar"
 *
 * @param {String} setting
 * @param {*} [val]
 * @return {Server} for chaining
 * @public
 */
app.set = function set ( setting, val ) {
  if ( arguments.length === 1 ) {
    // app.get( setting )
    return this.settings[setting];
  }
  // set value
  this.settings[setting] = val;
  return this;
};

/**
 * Return `setting`'s value
 *
 *    app.get( 'foo' );
 *    // => "bar"
 *
 * @uses {function} app.set
 * @param {String} setting
 * @return {set} for chaining
 */
app.get = function get ( setting ) {
  return this.set( setting );
};

/**
 * Returns an error
 *
 *    app.error( 'error messae' );
 *    // => "error message"
 *
 * @param {String} error - the error to display
 * @return {set} for chaining
 */
app.error = function error ( error ) {
  app.log( error );
  throw new Error( error );
};

/**
 * Handles logging errors to files
 *
 * @uses {function} fs
 * @param {String} error - the error to log
 */
app.log = function error ( error ) {
  error = error + "\n";
  fs.appendFile( './logs/node.error.log', error );
};
