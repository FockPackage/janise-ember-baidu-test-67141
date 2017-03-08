import Route from 'ember-route';
import get from 'ember-metal/get';

export default Route.extend({

  setupController(controller) {
    get(controller, 'theme').setTheme('dark');
  }
});
