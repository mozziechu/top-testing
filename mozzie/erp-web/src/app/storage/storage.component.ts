import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
	  

 category= {
 	 title : {
        text: '各仓库货物储存情况',
        subtext: '出库量-入库量-仓储量',
        x:'center'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['仓储量','入库量','出库量','满额库存量'
				
        ],
        x: 'right',
         y: 'center',
         orient: 'vertical'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['仓库A1','仓库A2','仓库B1','仓库B2','仓库C1','仓库C2','仓库D']
        }
    ],
    yAxis : [
        {
            type : 'value',
             axisLabel : {
                formatter: '{value} 件'
            }
        }
    ],
    series : [
        {
            name:'仓储量',
            type:'line',
            stack: '总量',
            data:[400, 350, 370, 340, 390, 430, 300]
        },
        {
            name:'入库量',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'出库量',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 250, 200]
        },
        {
            name:'满额库存量',
            type:'line',
            stack: '总量',
            data:[470, 470, 470, 470, 470, 470, 470]
        },
//      {
//          name:'搜索引擎',
//          type:'line',
//          stack: '总量',
//          data:[820, 932, 901, 934, 1290, 1330, 1320]
//      }
    ]
};

                    
  constructor() { }

  ngOnInit() {
  }

}
