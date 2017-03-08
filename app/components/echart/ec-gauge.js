import Component from 'ember-component';
import {scheduleOnce} from 'ember-runloop';
import get from 'ember-metal/get';
import echart from 'echarts';
import computed from 'ember-computed';
import {htmlSafe} from 'ember-string';

export default Component.extend({
  attributeBindings: ['style'],
  style: computed('height', 'width', function () {
    const height = get(this, 'height') ? `height: ${get(this, 'height')}px;` : 'height: 300px;';
    const width = get(this, 'width') ? `width: ${get(this, 'width')}px;` : '';
    return htmlSafe(`${height}${width}`);
  }),

  eChartInit(){
    const option = {
      "series": [{
        "name": get(this, 'name'),
        "type": "gauge",
        "startAngle": 180, //总的360，设置180就是半圆
        "endAngle": 0,
        "center": ["50%", "60%"], //整体的位置设置
        "axisLine": {
          "lineStyle": {
            "width": 10, //柱子的宽度
            "color": [[get(this, 'value') / 100, get(this, 'primaryColor')], [1, get(this, 'secondaryColor')]] //0.298是百分比的比例值（小数），还有对应两个颜色值
          }
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "show": false
        },
        "splitLine": {
          "show": false
        },
        "pointer": {
          "width": 5, //指针的宽度
          "length": "80%", //指针长度，按照半圆半径的百分比
          "color": get(this, 'pointerColor') || '#81c926',
        },
        "detail": {
          "show": false
        },
        "title": {
          "show": true,
          "offsetCenter": [0, "50%"], //标题位置设置
          "textStyle": { //标题样式设置
            "color": get(this, 'titleColor') || "#fff",
            "fontSize": 15,
            "fontFamily": "微软雅黑",
            "fontWeight": "bold"
          }
        },
        "data": { //显示数据
          "value": get(this, 'value'),
          "name": `男女占比：${get(this, 'value')}%`,
        }
      }]
    };
    echart.init(this.element).setOption(option);
  },

  didInsertElement(){
    scheduleOnce('afterRender', this, 'eChartInit');
  }
});
