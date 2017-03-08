import Ember from 'ember';
import inject from 'ember-service/inject';
import computed, {alias, oneWay} from  'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/set';


export default Ember.Component.extend({
  tagName: 'section',
  data: inject(),

  city: alias('data.city'),
  mapBaseData: oneWay('data.mapBaseData'),

  actions:{
    handleSelectBaseStation(item, value){
      const mapBaseData = get(this, 'data.mapBaseData');
      let new_data = [];
      if(item == 'type'){
        new_data = mapBaseData.filterBy('type', value)
      }
      if(item == 'rank'){
        new_data = mapBaseData.filter((item)=>{
          return !!(item.rank && (parseInt(item.rank) < 10))
        })
      }
      set(this, 'mapBaseData', new_data);
    },
  }
});
