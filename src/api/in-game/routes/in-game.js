'use strict';

/**
 * in-game router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::in-game.in-game');
