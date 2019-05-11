//import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NzInputDirective } from 'ng-zorro-antd';
@Component({
  selector: 'app-inventory',
//selector: 'nz-demo-table-edit-cell',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  
})
export class InventoryComponent implements OnInit {
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

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King ${this.i}`,
        age: '2018.12.1',
        address: `北京-东郊花园A区仓库 ${this.i}`
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  startEdit(id: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.editId = id;
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  constructor(private nzMessageService: NzMessageService) { }

}
