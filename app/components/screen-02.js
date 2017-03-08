import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',

  data1: [2220, 1682, 2791, 3000, 4090, 3230, 2910,2220, 1682, 2791,2220, 1682, 2791, 3000, 4090, 3230, 2910,2220, 1682, 2791,2220, 1682, 2791, 3000, 4090, 3230, 2910,2220, 1682, 2791,],

  data2: [
    {
      value: 335, name: '100以下',
      itemStyle: {
        normal: {
          color: '#ab7df6',
        }
      },
    },
    {
      value: 310, name: '100-200',
      itemStyle: {
        normal: {
          color: '#26c1c9',
        }
      },
    },
    {
      value: 274, name: '200-300',
      itemStyle: {
        normal: {
          color: '#faca00',
        }
      },
    },
    {
      value: 235, name: '300-400',
      itemStyle: {
        normal: {
          color: '#6859a0',
        }
      },
    },
    {
      value: 400, name: '400以上',
      itemStyle: {
        normal: {
          color: '#81c926',
        }
      },
    }
  ],
  data3: [
    {value: 335, name: '20以下',
      itemStyle: {
        normal: {
          color: '#81c926',
        }
      },
    },
    {value: 310, name: '20-30',
      itemStyle: {
        normal: {
          color: '#faca00',
        }
      },
    },
    {value: 274, name: '30-50',
      itemStyle: {
        normal: {
          color: '#26c1c9',
        }
      },
    },
    {value: 235, name: '50以上',
      itemStyle: {
        normal: {
          color: '#ab7df6',
        }
      },
    },
  ],

});
