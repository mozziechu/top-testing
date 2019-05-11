import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNodeOptions } from 'ng-zorro-antd';

@Component({
  selector: 'app-roule',
  templateUrl: './roule.component.html',
  styleUrls: ['./roule.component.css'],
})
export class RouleComponent implements OnInit, AfterViewInit {
  @ViewChild('nzTreeComponent') nzTreeComponent: NzTreeComponent;
  defaultCheckedKeys = ['10020'];
  defaultSelectedKeys = ['10010'];
  defaultExpandedKeys = ['100', '1001'];
  jsonDataTest: any;

  nodes: NzTreeNodeOptions[] = [
    {
      title: '无锡智慧天空成员',
      disableCheckbox: true,
      key: '100',
      children: [
        {
          title: '教务经理',
          key: '1001',
         
          children: [
            { title: '黄燕', key: '10010', isLeaf: true },
            { title: '焦萍', key: '10011', isLeaf: true }
          ]
        },
        {
          title: '就业经理',
          key: '1001',
         
          children: [
            { title: '王达', key: '10010', isLeaf: true },
            { title: 'mozzie chu', key: '10011', isLeaf: true }
          ]
        },
        {
          title: '校区管理',
          key: '1001',
         
          children: [
            { title: '王校', key: '10010', isLeaf: true },
            { title: '王思聪', key: '10011', isLeaf: true }
          ]
        },
        {
          title: '学员管理',
          key: '1002',
          children: [
            { title: '陈鹏铭', key: '10020', isLeaf: true },
            { title: '赵亮', key: '10021', isLeaf: true }
          ]
        }
        
      ]
    }
  ];

  nzClick(event: NzFormatEmitEvent): void {
    console.log(event);
    this.jsonDataTest = this.nzTreeComponent.getSelectedNodeList();
    console.log(this.jsonDataTest);
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  // nzSelectedKeys change
  nzSelect(keys: string[]): void {
    console.log(keys, this.nzTreeComponent.getSelectedNodeList());
  }

  ngOnInit(): void {
    // TODO something
  }

  ngAfterViewInit(): void {
    // get node by key: '10011'
    console.log(this.nzTreeComponent.getTreeNodeByKey('10011'));
    // use tree methods
    console.log(
      this.nzTreeComponent.getTreeNodes(),
      this.nzTreeComponent.getCheckedNodeList(),
      this.nzTreeComponent.getSelectedNodeList(),
      this.nzTreeComponent.getExpandedNodeList()
    );
  }

}
