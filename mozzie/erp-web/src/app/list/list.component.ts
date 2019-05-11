import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // 修改
  visible = false;
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  // 添加
  visible1 = false;
  open1(): void {
    this.visible1 = true;
  }

  close1(): void {
    this.visible1 = false;
  }
  

  // 删除的气泡框
  no(): void {
    this.nzMessageService.info('取消删除！');
  }

  ok(): void {
    // this.listOfData.splice(i,1);
    this.nzMessageService.info('删除成功！');
  }

  constructor(private nzMessageService: NzMessageService) {}

  // 产品列表
  

  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfFilterAddress = [{ text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' }];
  listOfSearchAddress: string[] = [];
  listOfData: Array<{ name: string; date: number; information: string; [key: string]: string | number }> = [
    {
      name: 'iPhone6',
      date: 2015,
      information: 'New York No. 1 Lake Park'
    },
    {
      name: 'iPhone6s',
      date: 2016,
      information: 'London No. 1 Lake Park'
    },
    {
      name: 'iPhone7',
      date: 2017,
      information: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'iPhone6s',
      date: 2016,
      information: 'London No. 1 Lake Park'
    },
    {
      name: 'iPhone7',
      date: 2017,
      information: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'iPhone8',
      date: 2018,
      information: 'London No. 2 Lake Park'
    }
    
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    this.search();
  }


  search(): void {
    const filterFunc = (item: { name: string; date: number; information: string }) => {
      return (
        (this.listOfSearchAddress.length
          ? this.listOfSearchAddress.some(information => item.information.indexOf(information) !== -1)
          : true) && item.name.indexOf(this.searchValue) !== -1
      );
    };
    const data = this.listOfData.filter((item: { name: string; date: number; information: string }) => filterFunc(item));
    this.listOfDisplayData = data.sort((a, b) =>
      this.sortValue === 'ascend'
        ? a[this.sortName!] > b[this.sortName!]
          ? 1
          : -1
        : b[this.sortName!] > a[this.sortName!]
        ? 1
        : -1
    );
  }

  



  ngOnInit(): void {

  }

}
