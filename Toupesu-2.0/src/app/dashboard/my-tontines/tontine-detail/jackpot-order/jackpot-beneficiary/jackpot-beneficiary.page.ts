import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ModalController, IonInfiniteScroll, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from '../../../services/tontine.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { UtilService } from 'src/app/shared/service/util.service';

interface JackpotList {
  id: number,
  name: string,
  email: string,
  phone: string,
  sharenbr: number,
  numero_part: number,
  hasJackpot: boolean,
  isAvaliste: boolean,
  isAdmin: boolean,
  weights: number
}

@Component({
  selector: 'app-jackpot-beneficiary',
  templateUrl: './jackpot-beneficiary.page.html',
  styleUrls: ['./jackpot-beneficiary.page.scss'],
})
export class JackpotBeneficiaryPage implements OnInit {
  tontineId: number;
  membersData: any[] = [];
  userData: any;
  loading: boolean;
  tontineUsersTemp: any;
  filterData: any;
  allData: any;
  nbItems: any;
  myTontine: any;
  seance: any;
  membres: any;
  avantDerniereSeance: any;
  members: JackpotList[] =  [];
  jackpotList:any[] = [];
  currentTontine: any;
  loadingSave: boolean;
  dateSeance: any;
  maxDate: any;
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private tontine: TontineService,
    private translate: TranslateService,
    private navParam: NavParams,
    private modatCtrl: ModalController,
    private error: ErrorService,
    private ui: UiService,
    private util: UtilService,
    private datService: DateserviceService,
    private tontineError: TontineErrorService
  ) {
     const tontineData = this.tontine.getCurrentTontineData();
     this.maxDate = this.datService.formatDateTiret(tontineData.tontine.date_debut); 
     this.membres = this.navParam.get('data');
     this.currentTontine = tontineData;
     this.allData = [];
     this.filterData = [];
     this.nbItems = 10;
     this.loadingSave = false;
  }

  ngOnInit() {
    this.loading = true;
    this.getListOfUsers();
  }

  searchForMber(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((member) => {
        return (member.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.allData = this.filterData;
    }

    if (this.allData.length > this.nbItems) {
      this.members = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.members.push(this.allData[this.members.length]);
      }
    } else {
      this.members = this.allData;
    }
  }

  // close the modal
  closeModal() {
    this.modatCtrl.dismiss(null,'cancel');
  }

  // Get the list of tontine users
  getListOfUsers() {
        this.filterData  = [];
        this.loading = false;
        this.filterData = this.util.orderByKey(this.membres,'weights'); 
        this.allData = this.filterData;
        if (this.allData.length > this.nbItems) {
          this.members = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.members.push(this.allData[this.members.length]);
          }
        } else {
          this.members = this.allData;
        }
  }


  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.members.length < this.allData.length) {
          this.members.push(this.allData[this.members.length]);
     
        } else if (this.members.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
 
  }

  // set jackpot beneficiaries
  setJackpotBeneficiary(date: any) {
    const listMembers = [];
    this.members.forEach(data => {
      if (data.hasJackpot) {
        listMembers.push({user_id : data.id ,numero_part : data.numero_part });
      }
    });

    const param = {
      tontine_id : this.currentTontine.tontine.tontine_id,
      liste_membre : listMembers,
      date_seance : this.datService.formatDateTiret(date)
    };
        this.loadingSave = true;
        this.tontine.designatedJackpotList(param).subscribe((reponse: any) => {
          this.loadingSave = false;
          if (reponse && reponse.message === 'success') {
            this.translate.get('JACKPOT_SET_MSG').subscribe(trans => {
              this.ui.presentToast(trans);
            });
            this.modatCtrl.dismiss('success','cancel');
          }
        }, error => {
           
            if (error && error.error) {
              if (error.error.user_not_found) {
                this.error.renewSession().then((data:any) => {
                      if (data && data.result === "OK") {
                        this.setJackpotBeneficiary(date);
                      } else {
                        this.loadingSave = false;
                      }
                });
              } else {
                this.loadingSave = false;
                this.tontineError.manageTontineError(error);
              }
            } else {
              this.loadingSave = false;
              this.error.manageError(error);
            }
        });
  }

}
