'use strict';

/**
 * in-game service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::in-game.in-game');
