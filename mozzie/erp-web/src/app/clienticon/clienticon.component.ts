import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clienticon',
  templateUrl: './clienticon.component.html',
  styleUrls: ['./clienticon.component.css']
})
export class ClienticonComponent implements OnInit {
     
 liebiao = {
    title : {
        text: '客户情况年龄比例',
        subtext: '真实年龄比例',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['其余年龄的概率','40~50岁年龄的概率','35~40岁年龄的概率','30~35岁年龄的概率','20~30岁年龄的概率']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'其余年龄的概率'},
                {value:310, name:'40~50岁年龄的概率'},
                {value:234, name:'35~40岁年龄的概率'},
                {value:135, name:'30~35岁年龄的概率'},
                {value:1548, name:'20~30岁年龄的概率'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

zoliang = {
    title : {
        text: '客户近几年的总量的增长值',
      x:'center'
       
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['平均增长值', '平均减少值', '总量值'],
        x: 'right',
//       y: 'center',
         orient: 'vertical'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年']
        }
    ],
    series : [
        {
            name:'平均增长值',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[0, 0, 0, 0, 215, 255, 245]
        },
        {
            name:'总量值',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name:'平均减少值',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-255, -143, -174, -123, -0, -0, -0]
        }
    ]
};

bili = {
	 title : {
        text: '客户近几年的总量',
      
        x:'center'
    },
    xAxis: {
        type: 'category',
        data: ['2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
        
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar'
    }]
};

zhexian = {
	title : {
        text: '客户销售额分析',
      
        x:'center',
        y:'top'
    },
     legend: {
        data:['医学院校','猎头工厂','汽车公司','最美画室','航天科技','建筑工程','真诚服务公司'],
        x: 'right',
         y: 'center',
         orient: 'vertical'
    },
    xAxis: {
        type: 'category',
        data: ['2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'医学院校',
            type:'line',
            
            data:[0, 560, 101, 440, 550, 620, 750]
        },
        {
            name:'猎头工厂',
            type:'line',
           
            data:[0, 182, 220, 460, 290, 330, 310]
        },
        {
            name:'汽车公司',
            type:'line',
        
            data:[0, 232, 201, 154, 190, 553, 410]
        },
        {
            name:'最美画室',
            type:'line',
        
            data:[0, 332, 301, 334, 390, 450, 320]
        },
        {
            name:'航天科技',
            type:'line',
          
            data:[10, 300, 780, 605, 888, 999, 1320]
        },
        {
            name:'建筑工程',
            type:'line',
          
            data:[50, 200, 480, 660, 520, 980, 790]
        },
        {
            name:'真诚服务公司',
            type:'line',
          
            data:[100, 550, 6, 605, 999, 999, 1200]
        }
    ]
};
xunhuan = {
     title: {
        text: '客户同龄人的每年增长率',
        subtext: '数据可靠',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['其余年龄的概率','40~50岁年龄的概率','35~40岁年龄的概率','30~35岁年龄的概率','20~30岁年龄的概率']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'其余年龄的概率'},
                {value:310, name:'40~50岁年龄的概率'},
                {value:234, name:'35~40岁年龄的概率'},
                {value:135, name:'30~35岁年龄的概率'},
                {value:1548, name:'20~30岁年龄的概率'}
            ]
        }
    ]
};
  ngOnInit() {
  }

}
