import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NzInputDirective,NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';
const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

// 新建订单
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          {
            value: 'xihu',
            label: '杭州西湖',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          {
            value: 'dongqianlake',
            label: '东钱湖',
            isLeaf: true
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: '中华门',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})



export class ManagementComponent implements OnInit {
// 标签页
  tabs = [1, 2, 3];

// 表格  客户列表
  i = 0;
  editId: string | null;
  listOfData: any[] = [];
  @ViewChild(NzInputDirective, { read: ElementRef }) inputElement: ElementRef;

  @HostListener('window:click', ['$event'])
  handleClick(e: MouseEvent): void {
    if (this.editId && this.inputElement && this.inputElement.nativeElement !== e.target) {
      this.editId = null;
    }
  }
  // 添加新客户
  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `王老板`,
        age: '个人简介.....',
        address: `请求合作`
      }
    ];
    this.i++;
  }

  // 删除气泡框
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }


  ngOnInit(): void {
    // 客户列表
    this.addRow();
    this.addRow();
    this.addRow();
    this.addRow();
    // 销售记录
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });

  }

// 销售记录
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    this.http.get(fakeDataUrl).subscribe((res: any) => {
      this.data = this.data.concat(res.results);
      this.list = [...this.data];
      this.loadingMore = false;
    });
  }

  edit(item: any): void {
    this.msg.error('暂无数据');
  }


  // 新建订单
  value: string;

  visible = false;

  open(): void {
    this.visible = true;
  }
  close(): void {
    this.visible = false;
  }

  nzOptions = options;

  validate(option: any, _index: number): boolean {
    const value = option.value;
    return ['hangzhou', 'xihu', 'nanjing', 'zhonghuamen'].indexOf(value) >= 0;
  }
  
// 编辑

  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
