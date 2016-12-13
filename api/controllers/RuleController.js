/**
 * RuleController
 *
 * @description :: Server-side logic for managing rules
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `RuleController.index()`
     */
    index: function(req, res) {
        //console.log("index");
        return res.json({
            todo: 'index() is not implemented yet!'
        });
    },


    /**
     * `RuleController.show()`
     */
    show: function(req, res) {
        var id = req.param('id');
        Rule.findOne(id).populate('nestedConditions').populate('singleConditions').populate('customerSegments').exec(function(err, showrules) {
            if (err) {
                res.send(err, 500);
            }
            res.json(showrules);
        });
    },

    /**
     * `RuleController.new()`
     */
    new: function(req, res) {
        return res.json();
    },


    /**
     * `RuleController.create()`
     */
    create: function(req, res) {
        var param = _.extend(req.query || req.params || {}, req.body || {});
        Rule.create(param, function(err, createrule) {
            if (err) {
                return res.send(err, 500);
            }
            var id = createrule.id;
            Rule.findOne(id).populate('nestedConditions').populate('singleConditions').populate('customerSegments').exec(function(err, showrules) {
                if (err) {
                    res.send(err, 500);
                }
                res.json(showrules);
            });
        });
    },


    /**
     * `RuleController.edit()`
     */
    edit: function(req, res) {
        var id = req.param('id');
        Rule.findOne(id, function(err, editrule) {
            if (err) {
                res.send(err, 500);
            }
            res.json('editrule');
        });
    },


    /**
     * `RuleController.update()`
     */
    update: function(req, res) {
        var id = req.param('id');
        var param = req.allParams();
        Rule.update(id, param, function(err, updaterule) {
            if (err) {
                res.send(err, 500);
            }
            res.json(updaterule);
        });
    },


    /**
     * `RuleController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');

        SingleCondition.destroy({ ruleId: id }, function(err, deleteNestedcondition) {
            if (err) {
                res.send(err, 500);
            }
            NestedCondition.destroy({ ruleId: id }, function(err, deleteNestedcondition) {
                if (err) {
                    res.send(err, 500);
                }
                CustomerSegment.destroy({ ruleId: id }, function(err, deleteCustomersegment) {
                    if (err) {
                        res.send(err, 500);
                    }
                    Rule.destroy(id, function(err, deleterule) {
                        if (err) {
                            res.send(err, 500);
                        }
                        res.json('deleted');
                    });
                });
            });
        });

    }
};
