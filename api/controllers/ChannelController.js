/**
 * ChannelController
 *
 * @description :: Server-side logic for managing channels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `ChannelController.index()`
     */
    // index: function (req, res) {
    //   return res.json({
    //     todo: 'index() is not implemented yet!'
    //   });
    // },


    /**
     * `ChannelController.show()`
     */

    show: function(req, res) {

        Channel.find().populate(['email', 'sms', 'webPush', 'pushNotification']).exec(function(err, show) {
            if (err) {
                res.send(err, 500);
            }
            var result = {
                email: [],
                sms: [],
                webPush: [],
                pushNotification: []
            }
            var response = {};
            _.each(_.flatten((_.map(show, 'email'))), e => { result.email.push(e) })
            _.each(_.flatten((_.map(show, 'sms'))), e => { result.sms.push(e) })
            _.each(_.flatten((_.map(show, 'webPush'))), e => { result.webPush.push(e) })
            _.each(_.flatten((_.map(show, 'pushNotification'))), e => { result.pushNotification.push(e) })
            res.json(result);
        });
    },

    /**
     * `ChannelController.new()`
     */
    new: function(req, res) {
        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `ChannelController.create()`
     */
    create: function(req, res) {
        var param = req.allParams();
        Channel.create(param, function(err, created) {
            if (err) {
                res.send(err, 500);
            }
            res.json(created);
        });
    },


    /**
     * `ChannelController.edit()`
     */
    edit: function(req, res) {
        var id = req.param('id');
        Channel.findOne(id, function(err, edit) {
            if (err) {
                res.send(err, 500);
            }
            res.json(edit);
        });
    },

    /**
     * `ChannelController.update()`
     */
    update: function(req, res) {
        var id = req.param('id');
        var param = req.allParams();
        Channel.update(id, param, function(err, updated) {
            if (err) {
                res.send(err, 500);
            }
            res.json(updated);
        });
    },


    /**
     * `ChannelController.destroy()`
     */

    destroy: function(req, res) {
        var id = req.param('id');
        Channel.destroy({ id: id }).exec(function(err, channeldelete) {
            if (err) return res.send(err, 500);
            res.json("delete");
        });
    }
};
