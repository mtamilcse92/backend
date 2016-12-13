/**
 * SmsController
 *
 * @description :: Server-side logic for managing sms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `SmsController.index()`
    //  */
    // index: function (req, res) {
    //   return res.json({
    //     todo: 'index() is not implemented yet!'
    //   });
    // },


    /**
     * `SmsController.show()`
     */
    show: function(req, res) {
        Sms.find(function(err, show) {
            if (err) {
                res.send(err, 500);
            }
            res.json(show);
        })
    },



    /**
     * `SmsController.new()`
     */
    new: function(req, res) {
        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `SmsController.create()`
     */
    create: function(req, res) {
        var param = req.allParams();
        Sms.create(param, function(err, created) {
            if (err) {
                res.send(err, 500);
            }
            res.json(created);
        });
    },


    /**
     * `SmsController.edit()`
     */
    edit: function(req, res) {
        var id = req.param('id');
        Sms.findOne(id, function(err, edited) {
            if (err) {
                res.send(err, 500);
            }
            res.json(edited);
        });
    },

    /**
     * `SmsController.update()`
     */
    update: function(req, res) {
        var id = req.param('id');
        var param = req.allParams();
        Sms.update(id, param, function(err, updated) {
            if (err) {
                res.send(err, 500);
            }
            res.json(updated);
        });
    },




    /**
     * `SmsController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');

        Sms.destroy(id, function(err, destroyed) {
            if (err) {
                res.send(err, 500);
            }
            res.json("deleted");
        });
    }
};
