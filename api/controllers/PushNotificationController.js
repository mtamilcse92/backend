/**
 * PushNotificationController
 *
 * @description :: Server-side logic for managing pushnotifications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {




    /**
     * `PushNotificationController.create()`
     */
    create: function(req, res) {
        var param = req.allParams();
        PushNotification.create(param, function(err, created) {
            if (err) {
                res.send(err, 500);
            }
            res.json(created);
        });
    },


    /**
     * `PushNotificationController.update()`
     */
    update: function(req, res) {
        var id = req.param('id');
        var param = req.allParams();
        PushNotification.update(id, param, function(err, updated) {
            if (err) {
                res.send(err, 500);
            }
            res.json(updated);
        });
    },


    /**
     * `PushNotificationController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        PushNotification.findOne(id, function(err, findfcm) {
            if (err) {
                res.send(err, 500);
            }
            PushNotification.destroy(id, function(err, destroyed) {
                if (err) {
                    res.send(err, 500);
                }
                res.json("deleted");
            });
        });
    }
};
