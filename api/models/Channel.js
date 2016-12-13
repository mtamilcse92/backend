/**
 * Channel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	 email:
    {
      collection: 'email',
      via: 'channelId'
    },

    sms:
    {
      collection: 'sms',
      via: 'channelId'

    },
    webPush:
    {
      collection: 'webPush',
      via: 'channelId'
    },

    pushNotification:
    {
      collection: 'pushNotification',
      via: 'channelId'  
    },

  	campaignId:
  	{
  		model: 'campaign'
  	},
    
  	escalationId:
  	{
  		model: 'escalation'
  	}

  }
};

