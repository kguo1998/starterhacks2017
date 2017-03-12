/**
 * Chatcontroller
 *
 * @description :: Server-side logic for managing chat
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

   chat: function(req, res) {
    sails.log.debug('Chatcontroller');
    res.view('./chat.html');
   }

};

