/**
 * Created by cform on 17/3/6.
 */

/**
 * 1、上海本地生活活跃用户数
 * @type {{isSuccess: boolean, message: string, result: {date: string, userCounts: string, netWork_4G: {userCounts: string, percent: string}, netWork_3G: {userCounts: string, percent: string}}}}
 */
const data1 = {
  isSuccess: true,
  message: '',
  result: {
    date: '2016-12-31', //当前的日期
    userCounts: '215765', //总用户数
    netWork_4G: {
      userCounts: '12345', //4G用户数
      percent: '+15', //环比增量百分比
    },
    netWork_3G: {
      userCounts: '12345', //3G用户数
      percent: '-15', //环比增量百分比
    },
  }
};

/**
 * 2、上海各区的3——4G用户数
 * @type {{isSuccess: boolean, message: string, result: [*]}}
 */
const data2 = {
  isSuccess: true,
  message: '',
  result: [ //数组形式， 依次显示所有区的数据
    {
      id: '00001',
      area: '浦东',
      netWork_4G: { //4G用户
        prepay: {
          percent: '65', //环比增量百分比
          userCounts: '123465', //预付款用户
        },
        payLater: {
          percent: '35', //环比增量百分比
          userCounts: '123465', //后付款用户
        },
      },
      netWork_3G: { //3G用户
        prepay: {
          percent: '65', //环比增量百分比
          userCounts: '123465', //预付款用户
        },
        payLater: {
          percent: '35', //环比增量百分比
          userCounts: '123465', //后付款用户
        },
      },

    },
  ]
};


/**
 * 3、该区域基站（预付费用户的链接人数） 近30天
 * @type {{isSuccess: boolean, message: string, result: [*]}}
 */
const data3 = {
  isSuccess: true,
  message: '',
  result: [
    {
      id: '00001',
      area: '浦东',
      bsConcatUsers_4G: [123, 54, 567, 13, 67, 1, 6543, 12,], //近30天该基站链接的4G用户数
      aboveValue_4G: [45, 12, 17, 5, 45, 1, 34, 2,], //4G用户对应的高净值数
      bsConcatUsers_3G: [123, 54, 567, 13, 67, 1, 6543, 12,], //近30天该基站链接的3G用户数
      aboveValue_3G: [45, 12, 17, 5, 45, 1, 34, 2,], //3G用户对应的高净值数
    }
  ]
};


/**
 * 4、该区域3，4G 基站的用户数  前10名
 * @type {{isSuccess: boolean, message: string, result: {id: string, area: string, bs_4G: [*], bs_3G: [*]}}}
 */
const data4 = {
  isSuccess: true,
  message: '',
  result: {
    id: '00001',
    area: '浦东',
    bs_4G: [
      {
        id: '00011', //基站Id
        bsName: '吴中路基站', //基站名称
        positionX: 12, //坐标纬度
        positionY: 12, //坐标经度
        userCounts: '1122' //用户数
      }
    ],
    bs_3G: [
      {
        id: '00022', //基站Id
        bsName: '吴中路基站', //基站名称
        positionX: 12, //坐标纬度
        positionY: 12, //坐标经度
        userCounts: '1122' //用户数
      }
    ],

  }
};

/**
 * 5、每日使用APP Top5
 *
 * @type {{isSuccess: boolean, message: string, result: {bs_4G: [*], bs_3G: [*]}}}
 */
const data5 = {
  isSuccess: true,
  message: '',
  result: {
    bs_4G: [
      {
        name: '大众点评', //App名称
        useCounts: '9129', //使用次数
        percent: '56', //百分比
      }
    ],
    bs_3G: [
      {
        name: '大众点评', //App名称
        useCounts: '9129', //使用次数
        percent: '56', //百分比
      }
    ],
  }
};


/**
 * 6、套餐情况
 * @type {{isSuccess: boolean, message: string, result: {bs_4G: [*], bs_3G: [*]}}}
 */
const data6 = {
  isSuccess: true,
  message: '',
  result: {
    bs_4G: [
      {
        name: '500以上', //套餐价位
        userCounts: '9129', //用户数
        percent: '56', //百分比
      }
    ],
    bs_3G: [
      {
        name: '500以上', //套餐价位
        userCounts: '9129', //用户数
        percent: '56', //百分比
      }
    ],
  }
};

/**
 * 7、 年龄段
 * @type {{isSuccess: boolean, message: string, result: {bs_4G: [*], bs_3G: [*]}}}
 */
const data7 = {
  isSuccess: true,
  message: '',
  result: {
    bs_4G: [
      {
        age: '30岁以下', //年龄段
        userCounts: '9129', //用户数
        percent: '56', //百分比
      }
    ],
    bs_3G: [
      {
        age: '30岁以下', //年龄段
        userCounts: '9129', //用户数
        percent: '56', //百分比
      }
    ],
  }
};

/**
 * 8、男女占比
 * @type {{isSuccess: boolean, message: string, result: {bs_4G: [*], bs_3G: [*]}}}
 */
const data8 = {
  isSuccess: true,
  message: '',
  result: {
    bs_4G: [
      {
        gender: '男', //性别
        userCounts: '9129', //用户数
        percent: '56', //百分比
      }
    ],
    bs_3G: [
      {
        gender: '男', //性别
        userCounts: '9129', //用户数
        percent: '56', //百分比
      }
    ],
  }
};

/**
 * 9、地图基站分布
 * @type {{isSuccess: boolean, message: string, result: [*]}}
 */
const data9 = {
  isSuccess: true,
  message: '',
  result: [
    {
      title: "1号基站",  //基站名称
      type: '4G',   // 基站类型
      rank: '0',  //
      point: "121.4888969946754, 31.38547054011111",  //经纬度的值
      cancatCount: "22545"  // 连接数
    },
    {
      title: "2号基站",
      type: '3G',
      rank: '1',
      point: "121.45034631612151, 31.388365569544719",
      cancatCount: "4421"
    },
    {
      title: "3号基站",
      type: '4G',
      rank: '2',
      point: "121.50011346634088, 31.402712467516794",
      cancatCount: "61213"
    },
  ]
};
