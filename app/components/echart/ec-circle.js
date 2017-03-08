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
    const width = get(this, 'width') ? `width: ${get(this, 'width')}px;`: '';
    return htmlSafe(`${height}${width}`);
  }),

  eChartInit(){
    const labelTop = {
      normal : {
        color:get(this, 'primaryColor'),
        label : {
          show : true,
          position : 'center',
          formatter : '{b}',
          textStyle: {
            color:get(this, 'labelColorBottom') || '#6d869d',
            baseline : 'bottom'
          }
        },
        labelLine : {
          show : false
        }
      }
    };
    const labelFromatter = {
      normal : {
        label : {
          formatter : function (params){
            return 100 - params.value + '%'
          },
          textStyle: {
            color: '#fff',
            fontSize: get(this,'fontSize') || 14,
            baseline : 'top'
          }
        }
      },
    }
    const labelBottom = {
      normal : {
        color:get(this, 'secondaryColor'),

        label : {
          position : 'center',
          textStyle: {
            color: get(this, 'labelColorTop') || '#fff',
          },
        },

        labelLine : {
          show : false
        }
      },
    };
    const radius = [40, 55];
    const option = {
      legend: {
        x : 'center',
        y : 'center',
      },

      tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",
      },

      series : [
        {
          type : 'pie',
          center : ['50%', '30%'],
          radius : radius,
          x: '0%', // for funnel
          itemStyle : labelFromatter,
          hoverAnimation: false,
          data : [
            {name:'other', value: 100 - get(this, 'value'), itemStyle : labelBottom},
            {name:get(this, 'name'), value: get(this, 'value'),itemStyle : labelTop}
          ]
        }
      ]
    };

    echart.init(this.element).setOption(option);
  },


  didInsertElement(){
    scheduleOnce('afterRender', this, 'eChartInit');
  }
});
