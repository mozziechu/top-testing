import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-xueyuan',
	templateUrl: './xueyuan.component.html',
	styleUrls: ['./xueyuan.component.css']
})
export class XueyuanComponent implements OnInit {
	editCache: {
		[key: string]: any
	} = {};
	listOfData: any[] = [];

	startEdit(id: string): void {
		this.editCache[id].edit = true;
	}

	cancelEdit(id: string): void {
		const index = this.listOfData.findIndex(item => item.id === id);
		this.editCache[id] = {
			data: { ...this.listOfData[index]
			},
			edit: false
		};
	}

	saveEdit(id: string): void {
		const index = this.listOfData.findIndex(item => item.id === id);
		Object.assign(this.listOfData[index], this.editCache[id].data);
		this.editCache[id].edit = false;
	}

	updateEditCache(): void {
		this.listOfData.forEach(item => {
			this.editCache[item.id] = {
				edit: false,
				data: { ...item
				}
			};
		});
	}

	ngOnInit(): void {
		for(let i = 0; i < 100; i++) {
			this.listOfData.push({
				id: `${i}`,
				name: `Edrward ${i}`,
				age: 32,
				address: `London Park no. ${i}`
			});
		}
		this.updateEditCache();
	};
	
	visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  };
  
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}