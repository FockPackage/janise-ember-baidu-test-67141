import Ember from 'ember';
import { citys } from '../lib/map-factrory';
import inject from 'ember-service/inject';
import get from 'ember-metal/get';


export default Ember.Component.extend({
  tagName: 'section',

  data: inject(),
  citys:citys,

  actions: {
    handleSelectCity(city){
      console.log(city);
      get(this, 'data').setCurrentCity(city);
    }
  }
});
