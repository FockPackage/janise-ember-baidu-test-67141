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
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series : [
                {
                    name:get(this, 'name'),
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:get(this, 'data'),
                    roseType: 'angle',
                    label: {
                        normal: {
                            textStyle: {
                              color: get(this, 'labelColor') || '#fff',
                              fontSize: get(this, 'labelFontSize') || 14,
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: get(this, 'labelColor') || '#fff',
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },

                }
            ]
        };
        echart.init(this.element).setOption(option);
    },


    didInsertElement(){
        scheduleOnce('afterRender', this, 'eChartInit');
    }
});
