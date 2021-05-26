import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { DateserviceService } from './dateservice.service';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constValue: string;
  filterDataType: any;

  constructor(
    private translate: TranslateService,
    private dateService: DateserviceService
  ) {
      this.filterDataType = [];
  }


  getCautionType() {
    return new Observable((Observer) => {
    const caution = [];
    this.translate.get([
      'CAUTION_PART',
      'CAUTION_MEMBER'
    ])
    .subscribe(trans => {
      caution.push({name: trans.CAUTION_PART, value: 'part'});
      caution.push({name: trans.CAUTION_MEMBER, value: 'member'});
    });
      Observer.next(caution);
    });
  }

  // Get the transaction type
  getTransactionType(type: string) {
    this.translate.get([
      'TRANSACTION_DEBIT',
      'TRANSACTION_CREDIT',
      'TRANSACTION_WITHDRAWAL',
      'TRANSACTION_IN_PROGRESS',
      'TRANSACTION_APPROVED',
      'TRANSACTION_PENDING',
      'TRANSACTION_REFUSED'
    ])
      .subscribe(value => {
        switch (type) {

          case 'entrant':
            this.constValue = value.TRANSACTION_CREDIT;
            break;

          case 'sortant':
            this.constValue = value.TRANSACTION_DEBIT;
            break;

          case 'withdrawal':
            this.constValue = value.TRANSACTION_WITHDRAWAL;
            break;

          case 'in progress':
            this.constValue = value.TRANSACTION_IN_PROGRESS;
            break;

          case 'approved':
            this.constValue = value.TRANSACTION_APPROVED;
            break;

          case 'pending':
            this.constValue = value.TRANSACTION_PENDING;
            break;

          case 'refused':
            this.constValue = value.TRANSACTION_REFUSED;
            break;

          default:
            this.constValue = type;
            break;
        }
      });
    return this.constValue;
  }

  // Get the reason of transaction
  getTransactionReason(reason: string) {
    this.translate.get([
      'TRANSACTION_TYPE_ID1',
      'TRANSACTION_TYPE_ID2',
      'TRANSACTION_TYPE_ID3',
      'TRANSACTION_TYPE_ID4',
      'TRANSACTION_TYPE_ID5',
      'TRANSACTION_TYPE_ID6',
      'TRANSACTION_TYPE_ID7',
      'TRANSACTION_TYPE_ID8',
      'TRANSACTION_TYPE_ID9',
      'TRANSACTION_TYPE_ID10',
      'TRANSACTION_TYPE_ID11',
      'TRANSACTION_TYPE_ID12',
      'TRANSACTION_TYPE_ID13',
      'TRANSACTION_TYPE_ID14',
      'TRANSACTION_TYPE_ID15',
      'TRANSACTION_TYPE_ID16',
      'LOAN_PAYMENT_TEXT',
      'SHARE_LOAN_CASH_TEXT',
      'SHARE_LOAN_CASH_INTEREST_TEXT'
    ])
      .subscribe(value => {
        switch (reason) {

          case 'argent chargé':
            this.constValue = value.TRANSACTION_TYPE_ID1;
            break;

          case 'argent bouffé':
            this.constValue = value.TRANSACTION_TYPE_ID2;
            break;

          case 'contribution':
            this.constValue = value.TRANSACTION_TYPE_ID3;
            break;

          case 'pénalité':
            this.constValue = value.TRANSACTION_TYPE_ID4;
            break;

         case 'penalite':
              this.constValue = value.TRANSACTION_TYPE_ID4;
              break;

          case 'in progress':
            this.constValue = value.TRANSACTION_TYPE_ID5;
            break;

          case 'enchère':
            this.constValue = value.TRANSACTION_TYPE_ID6;
            break;

          case 'refused':
            this.constValue = value.TRANSACTION_TYPE_ID7;
            break;

          case 'argent remboursé':
            this.constValue = value.TRANSACTION_TYPE_ID8;
            break;

          case 'approved':
            this.constValue = value.TRANSACTION_TYPE_ID9;
            break;

          case 'contribution payée':
            this.constValue = value.TRANSACTION_TYPE_ID10;
            break;

          case 'argent contribué pour Tontine Event':
            this.constValue = value.TRANSACTION_TYPE_ID11;
            break;

          case 'argent pénalité':
            this.constValue = value.TRANSACTION_TYPE_ID12;
            break;

          case 'transfert caisse':
            this.constValue = value.TRANSACTION_TYPE_ID13;
            break;

          case 'paiement':
            this.constValue = value.TRANSACTION_TYPE_ID14;
            break;

          case 'swap':
              this.constValue = value.TRANSACTION_TYPE_ID15;
              break; 

          case 'swap fees':
                this.constValue = value.TRANSACTION_TYPE_ID16;
                break;    

            case 'paiement pret':
              this.constValue = value.LOAN_PAYMENT_TEXT;
              break;  

          case 'partage caisse emprunt':
            this.constValue = value.SHARE_LOAN_CASH_TEXT;
            break;
            
            case 'partage interet caisse emprunt':
              this.constValue = value.SHARE_LOAN_CASH_INTEREST_TEXT;
              break;    

          default:
            this.constValue = reason;
            break;
        }
      });
    return this.constValue;
  }

  // Get transaction reason translation
  getTransactionReasonTranslation(): Observable<any> {
    return new Observable((Observer) => {
      this.translate.get([
        'TRANSACTION_TYPE_ID1',
        'TRANSACTION_TYPE_ID2',
        'TRANSACTION_TYPE_ID3',
        'TRANSACTION_TYPE_ID4',
        'TRANSACTION_TYPE_ID5',
        'TRANSACTION_TYPE_ID6',
        'TRANSACTION_TYPE_ID7',
        'TRANSACTION_TYPE_ID8',
        'TRANSACTION_TYPE_ID9',
        'TRANSACTION_TYPE_ID10',
        'TRANSACTION_TYPE_ID11',
        'TRANSACTION_TYPE_ID12',
        'TRANSACTION_TYPE_ID13',
        'TRANSACTION_TYPE_ID14',
        'TRANSACTION_TYPE_ID15',
        'TRANSACTION_TYPE_ID16',
        'LOAN_PAYMENT_TEXT',
        'SHARE_LOAN_CASH_TEXT',
        'SHARE_LOAN_CASH_INTEREST_TEXT'
      ])
        .subscribe(value => {
          this.filterDataType = [];
          this.filterDataType.push({ type: 'argent chargé', trans: value.TRANSACTION_TYPE_ID1 });
          this.filterDataType.push({ type: 'argent bouffé', trans: value.TRANSACTION_TYPE_ID2 });
          this.filterDataType.push({ type: 'contribution', trans: value.TRANSACTION_TYPE_ID3 });
          this.filterDataType.push({ type: 'pénalité', trans: value.TRANSACTION_TYPE_ID4 });
          this.filterDataType.push({ type: 'in progress', trans: value.TRANSACTION_TYPE_ID5 });
          this.filterDataType.push({ type: 'enchère', trans: value.TRANSACTION_TYPE_ID6 });
          this.filterDataType.push({ type: 'refused', trans: value.TRANSACTION_TYPE_ID7 });
          this.filterDataType.push({ type: 'argent remboursé', trans: value.TRANSACTION_TYPE_ID8 });
          this.filterDataType.push({ type: 'approved', trans: value.TRANSACTION_TYPE_ID9 });
          this.filterDataType.push({ type: 'contribution payée', trans: value.TRANSACTION_TYPE_ID10 });
          this.filterDataType.push({ type: 'penalite', trans: value.TRANSACTION_TYPE_ID4 });
          this.filterDataType.push({ type: 'argent contribué pour Tontine Event', trans: value.TRANSACTION_TYPE_ID11 });
          this.filterDataType.push({ type: 'argent pénalité', trans: value.TRANSACTION_TYPE_ID12 });
          this.filterDataType.push({ type: 'transfert caisse', trans: value.TRANSACTION_TYPE_ID13 });
          this.filterDataType.push({ type: 'paiement', trans: value.TRANSACTION_TYPE_ID14 });
          this.filterDataType.push({ type: 'swap', trans: value.TRANSACTION_TYPE_ID15 });
          this.filterDataType.push({ type: 'swap fees', trans: value.TRANSACTION_TYPE_ID16 });
          this.filterDataType.push({ type: 'paiement pret', trans: value.LOAN_PAYMENT_TEXT });
          this.filterDataType.push({ type: 'partage caisse emprunt', trans: value.SHARE_LOAN_CASH_TEXT });
          this.filterDataType.push({ type: 'partage interet caisse emprunt', trans: value.SHARE_LOAN_CASH_INTEREST_TEXT });
          Observer.next(this.filterDataType);
        });
    });

  }

    // Get the request statut
    getRequestStatut(status: string) {
      this.translate.get([
        'REQUEST_STATUT_1',
        'REQUEST_STATUT_2',
        'REQUEST_STATUT_3',
        'REQUEST_STATUT_4',
        'REQUEST_STATUT_5'
      ])
        .subscribe(value => {
          switch (status) {
  
            case 'pending':
              this.constValue = value.REQUEST_STATUT_1;
              break;
  
            case 'approved':
              this.constValue = value.REQUEST_STATUT_2;
              break;
  
            case 'refused':
              this.constValue = value.REQUEST_STATUT_3;
              break;
  
            case 'tout_paye':
              this.constValue = value.REQUEST_STATUT_4;
              break;
  
            case 'pas_tout_paye':
              this.constValue = value.REQUEST_STATUT_5;
              break;
  
            default:
              this.constValue = status;
              break;
          }
        });
      return this.constValue;
    }

        // Get the swap type
        getTypeSwap(type: string) {
          this.translate.get([
            'INSTANT_TEXT',
            'DELAYED_TEXT'
          ])
            .subscribe(value => {
              switch (type) {
      
                case 'instant':
                  this.constValue = value.INSTANT_TEXT;
                  break;
      
                case 'delay':
                  this.constValue = value.DELAYED_TEXT;
                  break;
      
                default:
                  this.constValue = type;
                  break;
              }
            });
          return this.constValue;
        }

     
        expiredTime(request: any) {
          let time = ''
          const translation = [];
      
          this.translate.get(['HRS_TEXT','MINS_TEXT','SECS_TEXT', 'SINCE_TEXT','IN_TEXT']).subscribe(trans => {
            translation.push(trans.HRS_TEXT);
            translation.push(trans.MINS_TEXT);
            translation.push(trans.SECS_TEXT);
            translation.push(trans.SINCE_TEXT);
            translation.push(trans.IN_TEXT);
          });
      
          if (request && request.temps_restant) {
            if (request.temps_restant[0].heures) {
              time = `${translation[4]} ${request.temps_restant[0].heures} ${translation[0]}`;
            } else if (request.temps_restant[0].minutes) {
              time = ` ${translation[4]}  ${request.temps_restant[0].minutes} ${translation[1]}`;
            } else if (request.temps_restant[0].secondes) {
              time = ` ${translation[4]}  ${request.temps_restant[0].secondes} ${translation[2]}`;
            } else  if (request && request.updated_at){
              const newDate = new Date(request.updated_at);
              time = `${translation[3]} ${this.dateService.formatDateTiret(this.dateService.addDays(newDate, 3))}` ;
            } else {
              time = ' ';
            }
          }
          return time;
      
        }
}
