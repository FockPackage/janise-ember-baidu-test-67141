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
      const data_val= get(this, 'data'),
        xAxis_val=['01月01日', '01月02日','01月03日','01月04日','01月05日', '01月06日','01月07日','01月08日','01月09日', '01月10日',
          '01月11日', '01月12日','01月13日','01月14日','01月15日', '01月16日','01月17日','01月18日','01月19日', '01月20日',
          '01月21日', '01月22日','01月23日','01月24日','01月25日', '01月26日','01月27日','01月28日','01月29日', '01月30日'];
      const option = {
        grid:{
          left:10,
          top:'10%',
          bottom:20,
          right:40,
          containLabel:true
        },
        tooltip:{
          show:true,
          backgroundColor:'#384157',
          borderColor:'#384157',
          borderWidth:1,
          formatter:'{b}:{c}',
          extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
        },
        xAxis: {
          data: xAxis_val,
          boundaryGap:false,
          axisLine:{
            show:false
          },
          axisLabel: {
            textStyle: {
              color: get(this, 'xAxisLabelColor') || '#FFF',
            }
          },
          axisTick:{
            show:false
          }
        },
        yAxis: {
          ayisLine:{
            show:false
          },
          axisLabel: {
            textStyle: {
              color: get(this, 'yAxisLabelColor') || '#FFF',
            }
          },
          splitLine:{
            show:true,
            lineStyle:{
              color:'#384157'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#384157'
            }
          }
        },

        series: [
          {
            type: 'bar',
            name:'linedemo',

            animation:false,
            barWidth:1.4,
            hoverAnimation:false,
            data:data_val,
            itemStyle:{
              normal:{
                color: get(this, 'itemBarColor') || '#f17a52',
                opacity:0.6,
                label:{
                  show:false
                }
              }
            }
          },
          {
            type: 'line',
            name:'linedemo',
            smooth:true,
            symbolSize:10,
            animation:false,
            lineWidth:1.2,
            hoverAnimation:false,
            data:data_val,
            symbol:'circle',
            itemStyle:{
              normal:{
                color:get(this, 'itemLineColor') || '#f17a52',
                shadowBlur: 40,
                label:{
                  show:true,
                  position:'top',
                  textStyle:{
                    color:get(this, 'itemLineTextColor') || '#f17a52',

                  }
                }
              }
            },
            areaStyle:{
              normal:{
                color:get(this, 'itemBgColor') || '#f17a52',
                opacity:get(this, 'itemBgOpcaity') || 0.08
              }
            }

          }
        ]
      };

      echart.init(this.element).setOption(option);
    },


    didInsertElement(){
        scheduleOnce('afterRender', this, 'eChartInit');
    }
});
