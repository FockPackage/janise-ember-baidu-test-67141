/**
 * Created by cform on 17/3/7.
 */
import Service from 'ember-service';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import inject from 'ember-service/inject';

export default Service.extend({
  api: inject(),

  /**
   * 根据行政区 或者 4G/3G 切换改变数据结构
   */
  city: '崇明',

  mapBaseData : [
    {title: "1号基站", type:'4G', rank:'0', point: "121.4888969946754, 31.38547054011111", cancatCount: "22545"},
    {title: "2号基站", type:'3G', rank:'1', point: "121.45034631612151, 31.388365569544719", cancatCount: "4421"},
    {title: "3号基站", type:'4G', rank:'', point: "121.50011346634088, 31.402712467516794", cancatCount: "61213"},
  ],

  setCurrentCity(city){
    set(this, 'city', city);
  }
});
