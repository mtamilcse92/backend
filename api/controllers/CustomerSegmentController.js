/**
 * CustomerSegmentController
 *
 * @description :: Server-side logic for managing CustomerSegments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `CustomerSegmentController.index()`
     */
    index: function(req, res) {

        //console.log("index");
        return res.json({
            todo: 'index() is not implemented yet!'
        });
    },


    /**
     * `CustomerSegmentController.show()`
     */
    show: function(req, res) {

        var id = req.param('id');
        CustomerSegment.findOne(id, function(err, showCustomerSegment) {
            if (err) {
                res.send(err, 500);
            }
            res.json(showCustomerSegment);
        });
    },


    /**
     * `CustomerSegmentController.new()`
     */
    new: function(req, res) {

        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `CustomerSegmentController.create()`
     */
    create: function(req, res) {

        var param = req.allParams();
        CustomerSegment.create(param, function(err, createCustomerSegment) {
            if (err) {
                res.send(err, 500);
            }
            res.json(createCustomerSegment);
        });
    },


    /**
     * `CustomerSegmentController.edit()`
     */
    edit: function(req, res) {

        var id = req.param('id');
        CustomerSegment.findOne(id, function(err, editCustomerSegment) {
            if (err) {
                res.send(err, 500);
            }
            res.json('editCustomerSegment');
        });
    },


    /**
     * `CustomerSegmentController.update()`
     */
    update: function(req, res) {

        var id = req.param('id');
        var param = req.allParams();
        CustomerSegment.update(id, param, function(err, updateCustomerSegment) {
            if (err) {
                res.send(err, 500);
            }

            CustomerSegment.findOne(id, function(err, findCustomerSegment) {
                if (err) {
                    res.send(err, 500);
                }
                res.json(findCustomerSegment);
            });

        });
    },


    /**
     * `CustomerSegmentController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        CustomerSegment.destroy(id, function(err, deleteCustomerSegment) {
            if (err) {
                res.send(err, 500);
            }
            res.json('deleteCustomerSegment');
        });
    }
};
