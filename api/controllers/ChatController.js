/**
 * Chatcontroller
 *
 * @description :: Server-side logic for managing chat
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

   chat: function(req, res) {
    console.log("starting chat");
    sails.log.debug('Chatcontroller');
    return res.view('/views/home/chat.ejs');
   }

};

