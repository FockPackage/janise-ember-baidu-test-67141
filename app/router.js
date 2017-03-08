import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  "use strict";
  this.route('dashboard', {path:'/'});
  this.route('screen-02');
});

export default Router;
