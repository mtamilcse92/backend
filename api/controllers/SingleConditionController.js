/**
 * SingleConditionController
 *
 * @description :: Server-side logic for managing SingleConditions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `SingleConditionController.index()`
     */
    index: function(req, res) {
        return res.json({
            todo: 'index() is not implemented yet!'
        });
    },


    /**
     * `SingleConditionController.show()`
     */
    show: function(req, res) {
        var id = req.param('id');
        SingleCondition.findOne(id, function(err, showSingleCondition) {
            if (err) {
                res.send(err, 500);
            }
            res.json(showSingleCondition);
        });
    },


    /**
     * `SingleConditionController.new()`
     */
    new: function(req, res) {
        return res.json();
    },


    /**
     * `SingleConditionController.create()`
     */
    create: function(req, res) {
        var param = req.allParams();
        SingleCondition.create(param, function(err, createSingleCondition) {
            if (err) {
                res.send(err, 500);
            }
            res.json(createSingleCondition);
        });
    },


    /**
     * `SingleConditionController.edit()`
     */
    edit: function(req, res) {
        var id = req.param('id');
        SingleCondition.findOne(id, function(err, editSingleCondition) {
            if (err) {
                res.send(err, 500);
            }
            res.json('editSingleCondition');
        });
    },


    /**
     * `SingleConditionController.update()`
     */
    update: function(req, res) {
        var id = req.param('id');
        var param = req.allParams();
        SingleCondition.update(id, param, function(err, updateSingleCondition) {
            if (err) {
                res.send(err, 500);
            }
            res.json(updateSingleCondition);
        });
    },


    /**
     * `SingleConditionController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        SingleCondition.destroy(id, function(err, SingleConditiondeleted) {
            if (err) {
                res.send(err, 500);
            }
            res.json("deleted");
        });
    }
};
