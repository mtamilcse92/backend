/**
 * WebPushController
 *
 * @description :: Server-side logic for managing WebPushes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `WebPushController.index()`
     */
    // index: function (req, res) {
    //   return res.json({
    //     todo: 'index() is not implemented yet!'
    //   });
    // },


    /**
     * `WebPushController.show()`
     */
    show: function(req, res) {
        WebPush.find(function(err, show) {
            if (err) {
                res.send(err, 500);
            }
            res.json(show);
        })
    },


    /**
     * `WebPushController.new()`
     */
    new: function(req, res) {
        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `WebPushController.create()`
     */
    create: function(req, res) {
        var param = req.allParams();
        WebPush.create(param, function(err, created) {
            if (err) {
                res.send(err, 500);
            }
            res.json(created);
        });
    },


    /**
     * `WebPushController.edit()`
     */
    edit: function(req, res) {
        var id = req.param('id');
        WebPush.findOne(id, function(err, edited) {
            if (err) {
                res.send(err, 500);
            }
            res.json(edited);
        });
    },


    /**
     * `WebPushController.update()`
     */
    update: function(req, res) {
        var id = req.param('id');
        var param = req.allParams();
        WebPush.update(id, param, function(err, updated) {
            if (err) {
                res.send(err, 500);
            }
            res.json(updated);
        });
    },


    /**
     * `WebPushController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');

        WebPush.destroy(id, function(err, destroyed) {
            if (err) {
                res.send(err, 500);
            }
            res.json("deleted");
        });
    }
};
