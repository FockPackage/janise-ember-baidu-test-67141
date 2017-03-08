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
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        textStyle: {
          color: 'auto',
        },
        data: get(this, 'data').map((item) => {
          return item.name;
        }),
      },
      series: [
        {
          name: get(this, 'name'),
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: get(this, 'data')
        }
      ]
    };
    echart.init(this.element).setOption(option);
  },


  didInsertElement(){
    scheduleOnce('afterRender', this, 'eChartInit');
  }
});
