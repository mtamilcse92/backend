/**
 * PeopleController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * `PeopleController.create()`
     */
    create: function(req, res) {
        People.create(req.params.all(), function(err, created) {
            if (err) {
                return res.send(err, 500);
            }
            People.findOne(created.id).populate('groups').exec(function(err, foundValue) {
                if (err) {
                    return res.send(err, 500)
                }
                res.json(foundValue);
            });
        });
    },

    /**
     * `PeopleController.show()`
     */
    show: function(req, res) {
        People.find().populate('groups').exec(function(err, values) {
            if (err) {
                return res.send(err, 500)
            }
            res.json(values)
        });
    },


    /**
     * `PeopleController.update()`
     */
    update: function(req, res) {

        People.update(req.param('id'), req.params.all(), function(err, updated) {
            if (err) {
                return res.send(err, 500);
            }
            res.json(updated);
        });

    },


    /**
     * `PeopleController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        People.destroy(id, function(err, destroy) {
            if (err) {
                return res.send(err, 500);
            }
            Group.destroy({groups: id}, function(err, destroy) {
                if (err) {
                    return res.send(err, 500);
                }
                res.json("deleted");
            });
        });
    }
};
