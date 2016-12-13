/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/': {
        view: 'homepage'
    },

    //routes for group
    'post /groups': {
        controller: 'group',
        action: 'create'
    },


    'get /rules': {
        controller: 'rule',
        action: 'index'
    },

    'get /rules/:id': {
        controller: 'rule',
        action: 'show'
    },

    'get /rules/new': {
        controller: 'rule',
        action: 'new'
    },

    'post /rules': {
        controller: 'rule',
        action: 'create'
    },

    'get /rules/edit/:id': {
        controller: 'rule',
        action: 'edit'
    },

    'put /rules/:id': {
        controller: 'rule',
        action: 'update'
    },

    'delete /rules/:id': {
        controller: 'rule',
        action: 'destroy'
    },

    'get /nestedConditions': {
        controller: 'nestedCondition',
        action: 'index'
    },

    'get /nestedConditions/:id': {
        controller: 'nestedCondition',
        action: 'show'
    },

    'get /nestedConditions/new': {
        controller: 'nestedCondition',
        action: 'new'
    },

    'post /nestedConditions': {
        controller: 'nestedCondition',
        action: 'create'
    },

    'get /nestedConditions/edit/:id': {
        controller: 'nestedCondition',
        action: 'edit'
    },

    'put /nestedConditions/:id': {
        controller: 'nestedCondition',
        action: 'update'
    },

    'delete /nestedConditions/:id': {
        controller: 'nestedCondition',
        action: 'destroy'
    },

    'get /singleConditions': {
        controller: 'singleCondition',
        action: 'index'
    },

    'get /singleConditions/:id': {
        controller: 'singleCondition',
        action: 'show'
    },

    'get /singleConditions/new': {
        controller: 'singleCondition',
        action: 'new'
    },

    'post /singleConditions': {
        controller: 'singleCondition',
        action: 'create'
    },

    'get /singleConditions/edit/:id': {
        controller: 'singleCondition',
        action: 'edit'
    },

    'put /singleConditions/:id': {
        controller: 'singleCondition',
        action: 'update'
    },

    'delete /singleConditions/:id': {
        controller: 'singleCondition',
        action: 'destroy'
    },

    'get /customerSegments': {
        controller: 'customerSegment',
        action: 'index'
    },

    'get /customerSegments/:id': {
        controller: 'customerSegment',
        action: 'show'
    },

    'get /customerSegments/new': {
        controller: 'customerSegment',
        action: 'new'
    },

    'post /customerSegments': {
        controller: 'customerSegment',
        action: 'create'
    },

    'get /customerSegments/edit/:id': {
        controller: 'customerSegment',
        action: 'edit'
    },

    'put /customerSegments/:id': {
        controller: 'customerSegment',
        action: 'update'
    },

    'delete /customerSegments/:id': {
        controller: 'customerSegment',
        action: 'destroy'
    },


    //routes for email

    'get /email': {
        controller: 'email',
        action: 'show'
    },
    'post /email': {
        controller: 'email',
        action: 'create'
    },

    'put /email/:id': {
        controller: 'email',
        action: 'update'
    },

    'delete /email/:id': {
        controller: 'email',
        action: 'destroy'
    },

    //routes for fcm

    'post /pushNotification': {
        controller: 'pushNotification',
        action: 'create'
    },

    'put /pushNotification/:id': {
        controller: 'pushNotification',
        action: 'update'
    },

    'delete /pushNotification/:id': {
        controller: 'pushNotification',
        action: 'destroy'
    },

    //routes for sms

    'get /sms': {
        controller: 'sms',
        action: 'show'
    },
    'post /sms': {
        controller: 'sms',
        action: 'create'
    },

    'put /sms/:id': {
        controller: 'sms',
        action: 'update'
    },

    'delete /sms/:id': {
        controller: 'sms',
        action: 'destroy'
    },
    //routes for webpush

    'get /webpush': {
        controller: 'webpush',
        action: 'show'
    },
    'post /webpush': {
        controller: 'webpush',
        action: 'create'
    },

    'put /webpush/:id': {
        controller: 'webpush',
        action: 'update'
    },

    'delete /webpush/:id': {
        controller: 'webpush',
        action: 'destroy'
    },


    //routes for channels 
    'get /channel': {
        controller: 'channel',
        action: 'show'
    },
    'post /channel': {
        controller: 'channel',
        action: 'create'
    },
    'put /channel/:id': {
        controller: 'channel',
        action: 'update'
    },
    'delete /channel/:id': {
        controller: 'channel',
        action: 'destroy'
    },

    //routes for escalation


    'get /escalation/:id': {
        controller: 'escalation',
        action: 'show'
    },
    'post /escalation': {
        controller: 'escalation',
        action: 'create'
    },
    'put /escalation/:id': {
        controller: 'escalation',
        action: 'update'
    },
    'delete /escalation/:id': {
        controller: 'escalation',
        action: 'destroy'
    },


    //routes for campaigns
    'get /campaigns': {
        controller: 'campaign',
        action: 'show'
    },
    'post /campaigns': {
        controller: 'campaign',
        action: 'create'
    },
    'put /campaigns/:id': {
        controller: 'campaign',
        action: 'update'
    },
    'delete /campaigns/:id': {
        controller: 'campaign',
        action: 'destroy'
    }
    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

};
