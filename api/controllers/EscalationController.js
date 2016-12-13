/**
 * EscalationController
 *
 * @description :: Server-side logic for managing escalations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `EscalationController.index()`
     */
    // index: function (req, res) {
    //   return res.json({
    //     todo: 'index() is not implemented yet!'
    //   });
    // },


    /**
     * `EscalationController.show()`
     */
    show: function(req, res) {
        var id = req.param('id');
        Escalation.find().populate('channel').exec(function(err, show) {
            if (err) {
                res.send(err, 500);
            }
            res.json(show);
        });
    },

    /**
     * `EscalationController.new()`
     */
    new: function(req, res) {
        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `EscalationController.create()`
     */
    create: function(req, res) {
        var param = req.allParams();
        Escalation.create(param, function(err, created) {
            if (err) {
                res.send(err, 500);
            }
            res.json(created);
        });
    },


    /**
     * `EscalationController.edit()`
     */
    edit: function(req, res) {
        var id = req.param('id');
        Escalation.findOne(id, function(err, edit) {
            if (err) {
                res.send(err, 500);
            }
            res.json(edit);
        });
    },

    /**
     * `EscalationController.update()`
     */
    update: function(req, res) {
        var id = req.param('id');
        var param = req.allParams();
        Escalation.update(id, param, function(err, updated) {
            if (err) {
                res.send(err, 500);
            }
            res.json(updated);
        });
    },

    /**
     * `EscalationController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        Escalation.find(id, function(err, findescalation) {
            if (err) {
                res.send(err, 500);
            }
            Escalation.destroy({ id: id }).exec(function(err, escalationdelete) {
                if (err) return res.send(err, 500);
                Channel.destroy({ escalationId: id }).exec(function(err, channeldelete) {
                    if (err) return res.send(err, 500);
                    res.json("delete");
                });
            });
        });
    }
};
