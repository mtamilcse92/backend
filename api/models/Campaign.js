/**
 * Campaign.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: 
  	{
  		type: 'string'
  	},
  	tags:  
  	{
  		type: 'string'
  	},
  	from:
  	{
  		type: 'string'
  	},
  	to:
  	{
  		type: 'string'
  	},
    channel:
    {
      collection: 'channel',
      via: 'campaignId'
    },
    escalation:
    {
      collection: 'escalation',
      via: 'campaignId'
    },
    rule:
    {
      type: 'string'
    }
  }
};

