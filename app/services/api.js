/**
 * Created by cform on 17/3/7.
 */
import Service from 'ember-service';
import get from 'ember-metal/get';
import inject from 'ember-service/inject';

export default Service.extend({
  api: inject(),

  getCityPosition(address){
    return  get(this, 'api').request(`http://api.map.baidu.com/geocoder/v2/?address=${address}&output=json&ak=${ak}`);
  }

});
