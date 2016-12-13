/**
 * Rule.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ruleName:
    {
      type: 'string'
    },

    entityType:
    {
      type: 'string'
    },

    trueButton:
    {
      type: 'string'
    },

    nestedConditions: {
      collection:'nestedCondition',
      via: 'ruleId'
    },

    singleConditions: {
      collection: 'singleCondition',
      via: 'ruleId'
    },

    customerSegments: {
      collection: 'customerSegment',
      via: 'ruleId'
    }
  }
};

