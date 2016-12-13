/**
 * Customersegment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	newCustomerSegment:
  	{
  		type: 'string'
  	},

  	ageBetween:
  	{
  		type: 'integer'
  	},

  	ageTo:
  	{
  		type: 'integer'
  	},

  	location:
  	{
  		type: 'array'
  	},

  	gender:
  	{
  		type: 'string'
  	},

  	spendsBetween:
  	{
  		type: 'string'
  	},

  	spendsTo:
  	{
  		type: 'string'
  	},

  	ruleId:
  	{
  		model: 'rule'
  	}
  }
};

