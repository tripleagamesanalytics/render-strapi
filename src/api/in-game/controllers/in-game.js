'use strict';

/**
 *  in-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::in-game.in-game');
