/**
 * Module dependencies
 */

var crypto = require('./crypto'),
    utils = require('./utils'),
    getDomain = utils.getDomain;

/**
 * Export module
 */

var hash = module.exports = function(url, pass) {
  url = getDomain(url);
  if(!url || !pass) return;

  var encrypted = crypto.PBKDF2(pass, url, { keySize: 64/32 });
  encrypted = '$' + encrypted.toString(crypto.enc.Base64);

  return encrypted;
};
