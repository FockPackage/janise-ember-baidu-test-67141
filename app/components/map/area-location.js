import Component from 'ember-component';
import {later, scheduleOnce} from 'ember-runloop';
import {htmlSafe} from  'ember-string';
import get from 'ember-metal/get';
import inject from 'ember-service/inject';

export default Component.extend({
  attributeBindings: ['style'],
  style: htmlSafe('height: 100%'),
  data: inject(),

  mapInit(){
    console.log('maplocation: ', get(this, 'data.city'));
    this.map = new BMap.Map(this.elementId, {enableMapClick:false});
    this.map.setMapStyle({
      styleJson:[       {
        "featureType": "subway",
        "elementType": "all",
        "stylers": {
          "visibility": "off"
        }
      }]
    });
    this.map.enableScrollWheelZoom(true);
  },

  /**
   * 添加标记
   * @param point
   * @param index
   * @returns {BMap.Marker}
   */
  addMarker(markerItem, index) {
    const p0 = markerItem.point.split(",")[0];
    const p1 = markerItem.point.split(",")[1];
    const type = markerItem.type;
    const rank = markerItem.rank || 1000;
    const point = new window.BMap.Point(p0, p1)

    let icon =  'marker_' + type;
    if(rank < 10){
      icon = "marker_top";
    }

    const myIcon = new BMap.Icon(`./imgs/${icon}.png`,
      new BMap.Size(30, 30));


    const marker = new BMap.Marker(point, {icon: myIcon});
    this.map.addOverlay(marker);
    return marker;
  },

  /**
   * 添加信息窗口
   * @param marker
   * @param poi
   * @returns {openInfoWinFun}
   */
  addInfoWindow(marker, item) {
    //pop弹窗标题
    const title = '<div style="font-weight:bold;color:#CE5521;font-size:14px">' + item.title + '</div>';
    //pop弹窗信息
    const html = [];
    html.push(`<p>类型: ${item.type}</p>`);
    html.push(`<p>连接数: ${item.cancatCount}</p>`);

    const infoWindow = new BMap.InfoWindow(html.join(""), {title: title, width: 200});

    const openInfoWinFun = function () {
      marker.openInfoWindow(infoWindow);
    };
    marker.addEventListener("click", openInfoWinFun);
    return openInfoWinFun;
  },


  /**
   * 画出行政区域轮廓
   * @param address
   */
  mapPositionArea(address = '黄浦区', mapBaseData=[]){
    const that = this;
    that.bdary = new BMap.Boundary();
    const borderColor = get(that, 'borderColor') || '#ff0000';

    that.bdary.get('上海市' + address, function (rs) {       //获取行政区域
      that.map.clearOverlays();        //清除地图覆盖物
      const count = rs.boundaries.length; //行政区域的点有多少个
      for (let i = 0; i < count; i++) {
        const ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: borderColor}); //建立多边形覆盖物
        that.map.addOverlay(ply);  //添加覆盖物
        that.map.setViewport(ply.getPath());    //调整视野
      };

      for (let i = 0; i < mapBaseData.length; i++) {
        const maker = that.addMarker(mapBaseData[i], i);
        that.addInfoWindow(maker, mapBaseData[i]);
      }
    });
  },

  didInsertElement(){
    this._super(...arguments);
    /**
     * 初始化地图
     */
    scheduleOnce('afterRender', this, 'mapInit');
  },

  didReceiveAttrs(argv){
    this._super(...arguments);
    const city = argv.newAttrs.city.value;
    const mapBaseData = argv.newAttrs.mapBaseData.value;
    this.mapPositionArea(city, mapBaseData);
  }
});
