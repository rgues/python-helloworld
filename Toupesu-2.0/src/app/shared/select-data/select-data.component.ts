import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-select-data',
  templateUrl: './select-data.component.html',
  styleUrls: ['./select-data.component.scss'],
})
export class SelectDataComponent implements OnInit {

  loading: boolean;
  filterData: any[];
  listData: any[];
  filter: boolean;
  allData: any[];
  nbItems: number;
  param: any;
  type: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modal: ModalController,
    private navParams: NavParams
  ) {
    this.filterData = [];
    this.listData = [];
    this.loading = false;
    this.filter = false;
    this.allData = [];
    this.nbItems = 15;
    this.param = this.navParams.get('tontine');
    this.type = this.navParams.get('type');
  }

  ngOnInit() {
    this.loading = true;
    this.getData(this.param);
  }


  // Filter the list of tontines
  searchForInvitation(ev: any) {
    this.infiniteScroll.disabled = false;
    this.filter = true;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((data) => {
        if (data) {
          return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }

      });
      if (this.allData.length > this.nbItems) {
        for (let i = 0; i < this.nbItems; i++) {
          this.listData.push(this.allData[this.listData.length]);
        }
      } else {
        this.listData = this.allData;
      }
    } else {
      this.listData = this.filterData;
    }
  }

  // Get all data
  getData(data: any) {

    this.allData = [];
    if (this.type === 'tontine') {
      data.forEach(element => {
        this.allData.push({ id: element.tontine.tontine_id, name: element.tontine.name });
      });
    } else if (this.type === 'invitation' || this.type === 'notification') {
      let index = 0;
      data.forEach(element => {
        this.allData.push({ id: index, name: element.tontine.name });
        index++;
      });
    }
    this.filterData = this.allData;

    if (this.allData.length > this.nbItems) {
      for (let i = 0; i < this.nbItems; i++) {
        this.listData.push(this.allData[this.listData.length]);
      }
    } else {
      this.listData = this.allData;
    }
  }

  
  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.listData.length < this.allData.length) {
          this.listData.push(this.allData[this.listData.length]);
        } else if (this.listData.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 2000);
  }

  // select a country
  selectData(event) {
    this.modal.dismiss(event.detail.value, 'select');
  }

  // close modal
  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }


}
