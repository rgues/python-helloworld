import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaidmodeComponent } from './paidmode/paidmode.component';
import { PaidmodeEventComponent } from './paidmode-event/paidmode-event.component';
import { TontineInvitedComponent } from './tontine-invited/tontine-invited.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TontineInvitedEventComponent } from './tontine-invited-event/tontine-invited-event.component';
import { EncheresService } from './service/encheres.service';
import { CommaDumperPipe } from './pipes/comma-dumper.pipe';
import { CounterFormatPipe } from './pipes/counter-format.pipe';
import { FilterDataPipe } from './pipes/filter-data.pipe';
import { ToDateObjPipe } from './pipes/to-date-obj.pipe';
import { CountriesComponent } from './countries/countries.component';
import { PrefixComponent } from './prefix/prefix.component';
import { BankmodeComponent } from './bankmode/bankmode.component';
import { ContributionComponent } from './contribution/contribution.component';
import { PaidmodeDebtComponent } from './paidmode-debt/paidmode-debt.component';
import { ViewProofComponent } from './view-proof/view-proof.component';
import { PaidmodeDebtOrderComponent } from './paidmode-debt-order/paidmode-debt-order.component';
import { ContributionOrderComponent } from './contribution-order/contribution-order.component';
import { InitiatePayComponent } from './initiate-pay/initiate-pay.component';
import { PaidmodeTontineComponent } from './paidmode-tontine/paidmode-tontine.component';
import { PaymentProofsComponent } from './payment-proofs/payment-proofs.component';
import { WalletOrderComponent } from './wallet-order/wallet-order.component';
import { StringTruncatePipe } from './pipes/string-truncate.pipe';
import { FormUtilsService } from './service/form-utils.service';
import { CashmodeComponent } from './cashmode/cashmode.component';
import { PaidmodeSenceComponent } from './paidmode-seance/paidmode-seance.component';
import { ContributionLoanComponent } from './contribution-loan/contribution-loan.component';
import { BankmodeLoanComponent } from './bankmode-loan/bankmode-loan.component';
import { PaidmodeLoanComponent } from './paidmode-loan/paidmode-loan.component';
import { CashmodeLoanComponent } from './cashmode-loan/cashmode-loan.component';
import { PaidmodeSwapComponent } from './paidmode-swap/paidmode-swap.component';
import { SelectDataComponent } from './select-data/select-data.component';
import { RemoveCurrencyPipe } from './pipes/remove-occurence';
import { PaidmodeCautionSenceComponent } from './paidmode-seance-caution/paidmode-seance-caution.component';


@NgModule({
  declarations: [
    PaidmodeComponent,
    TontineInvitedComponent,
    TontineInvitedEventComponent,
    PaidmodeEventComponent,
    PaidmodeDebtComponent,
    PaidmodeDebtOrderComponent,
    PaidmodeCautionSenceComponent,
    PaidmodeTontineComponent,
    PaymentProofsComponent,
    PaidmodeSenceComponent,
    CommaDumperPipe,
    RemoveCurrencyPipe,
    CountriesComponent,
    SelectDataComponent,
    PrefixComponent,
    ContributionComponent,
    ContributionLoanComponent,
    BankmodeLoanComponent,
    CashmodeLoanComponent,
    PaidmodeLoanComponent,
    ContributionOrderComponent,
    InitiatePayComponent,
    ViewProofComponent,
    BankmodeComponent,
    CashmodeComponent,
    WalletOrderComponent,
    PaidmodeSwapComponent,
    CounterFormatPipe,
    FilterDataPipe,
    ToDateObjPipe,
    StringTruncatePipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PaidmodeComponent,
    TontineInvitedComponent,
    TontineInvitedEventComponent,
    PaidmodeEventComponent,
    PaidmodeDebtComponent,
    PaidmodeDebtOrderComponent,
    PaidmodeSenceComponent,
    PaidmodeCautionSenceComponent,
    PaidmodeTontineComponent,
    InitiatePayComponent,
    CountriesComponent,
    SelectDataComponent,
    PrefixComponent,
    ContributionComponent,
    ContributionLoanComponent,
    BankmodeLoanComponent,
    PaidmodeLoanComponent,
    CashmodeLoanComponent,
    ContributionOrderComponent,
    ViewProofComponent,
    BankmodeComponent,
    CashmodeComponent,
    WalletOrderComponent,
    PaymentProofsComponent,
    PaidmodeSwapComponent,
    CommaDumperPipe,
    CounterFormatPipe,
    RemoveCurrencyPipe,
    FilterDataPipe,
    ToDateObjPipe,
    StringTruncatePipe,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers: [
    TranslateService,
    EncheresService,
    FormUtilsService
  ],
  entryComponents:[
    CountriesComponent,
    SelectDataComponent,
    ContributionComponent,
    ContributionLoanComponent,
    InitiatePayComponent,
    ContributionOrderComponent,
    PrefixComponent,
    ViewProofComponent,
    PaymentProofsComponent,
    PaidmodeSwapComponent
  ]
})
export class SharedModule { }
