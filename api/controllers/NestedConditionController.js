                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      /**
 * NestedConditionController
 *
 * @description :: Server-side logic for managing NestedConditions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `NestedConditionController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `NestedConditionController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    NestedCondition.findOne(id).exec(function(err,showNestedCondition){
      if(err){
        res.send(err,500);
      }
      res.json(showNestedCondition);
    });
  },


  /**
   * `NestedConditionController.new()`
   */
  new: function (req, res) {
    return res.json();
  },


  /**
   * `NestedConditionController.create()`
   */
   create: function (req, res) {
   var param = req.allParams();
   NestedCondition.create(param, function(err, createNestedCondition){
    if(err){
      res.send(err,500);
    }
    res.json(createNestedCondition);
   });
  },

  /**
   * `NestedConditionController.edit()`
   */
  edit: function (req, res) {
    var id = req.param('id');
    NestedCondition.findOne(id, function(err, editNestedCondition){
      if(err){
        res.send(err,500);
      }
      res.json(editNestedCondition);
    });
    },


  /**
   * `NestedConditionController.update()`
   */
  update: function (req, res) {
    var id = req.param('id');
    var param = req.allParams();
    NestedCondition.update(id, param, function(err,updateNestedCondition){
      if(err){
        res.send(err,500);
      }
      res.json(updateNestedCondition);
    });
  },


  /**
   * `NestedConditionController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
      NestedCondition.destroy(id, function(err, deleteNestedCondition){
        if(err){
          res.send(err,500);
        }
      res.json('deleted');
      });
  }
};


