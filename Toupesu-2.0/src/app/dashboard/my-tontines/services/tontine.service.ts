import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/shared/service/location.service';
import { ApiService } from 'src/app/shared/service/api.service';
import { UserService } from '../../user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TontineService {

  typeTontineName: string;
  token: string;

  constructor(
    private location: LocationService,
    private storage: StorageData,
    public api: ApiService,
    private userService: UserService,
    private event: EventService,
    private localStorage: LocalStorageService
  ) {
    this.typeTontineName = '';
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

  // Get the current user
  getCurrentTontineData(): any {
    const tontineData = this.localStorage.getItem('tontine-data');
    return tontineData ? tontineData : null;
  }

  // Get the current user
  setCurrentTontineData(tontineData: any) {
    this.localStorage.setItem('tontine-data', tontineData);
  }

  // Remove the user data
  removeCurrentTontineData() {
    this.localStorage.removeItem('tontine-data');
  }

  // Get the current seance data
  getCurrentSeanceData(): Promise<any> {
    return this.storage.get('seance-data');
  }

  // set the current seance data
  setCurrentSeanceData(seanceData: any) {
    this.storage.remove('seance-data');
    this.storage.set('seance-data', seanceData);
  }


  // Get the type of tontine
  getTypeTontine() {
    return this.api.get('tontine/type/v1/type_tontine');
  }

  // Get the type of payment
  getTypePayment() {
    return this.api.get('tontine/type/v2/payment');
  }

  // Get the type name
  getTypeName(typeId: number, listTypes: any) {
    listTypes.forEach(type => {
      if (type.id === typeId) {
        this.location.getTranslationData(`TYPE_TONTINE_ID${type.id}`).subscribe(value => {
          this.typeTontineName = value[`TYPE_TONTINE_ID${type.id}`];
        });
      }
    });
    return this.typeTontineName;
  }

  // Create the tontine
  createTontine(tontine: any) {
    return this.api.post('tontine/create/v1/tontine_create', tontine);
  }

  // create demo tontine with Toupesu Administrator
  createDemoTontine(tontine: any) {
    return this.api.post('tontine/create/v1/tontine_create_demo', tontine);
  }


  // Get the general informations of the tontines
  getInfoGeneraleTontine(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine/create/v1/get/tontine_section/' + tontineId +
      '/information_generale/' + this.token);
  }


  // Get the tontines contribution setting
  getParametreTontine(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine/create/v1/get/tontine_section/' + tontineId
      + '/parametre_cotisation/' + this.token);
  }


  // Get all penality of tontine
  getPenaliteTontine(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine/create/v1/get/tontine_section/' + tontineId
      + '/penalites/' + this.token);
  }


  // Get tontines documentation
  getDocumentationTontine(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine/create/v1/get/tontine_section/' + tontineId
      + '/documentation/' + this.token);
  }

  // Get tontines duration
  getDateTontine(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine/create/v1/get/tontine_section/' + tontineId +
      '/cycle_et_cotisation/' + this.token);
  }


  // Update the tontine
  updateTontine(tontine) {
    this.token = this.userService.getUserToken();
    return this.api.put('tontine/create/v1/tontine_update_info_generale/' + this.token, tontine);
  }

  // Create and update the tontine setting
  createAndUpdateParametreTontine(tontine) {
    this.token = this.userService.getUserToken();
    return this.api.put('tontine/create/v1/tontine_update_parametre_cotisation/'
      + this.token, tontine);
  }


  // Create and update the tontine penality
  createAndUpdatePenaliteTontine(tontine) {
    this.token = this.userService.getUserToken();
    return this.api.put('tontine/create/v1/tontine_update_penalite/' + this.token, tontine);
  }

  // Create and update the tontine date
  createAndUpdateDateTontine(tontine) {
    this.token = this.userService.getUserToken();
    return this.api.put('tontine/create/v1/tontine_update_cycle/' + this.token, tontine);
  }

  // Create and update the tontine documentation
  createAndUpdateDocumentationTontine(tontine) {
    this.token = this.userService.getUserToken();
    return this.api.put('tontine/create/v1/tontine_update_documentation/' + this.token, tontine);
  }

  // Get the user tontine
  getMyTontine() {
    this.token = this.userService.getUserToken();
    if (this.token) {
      return this.api.get('tontine/user/v1/tontine_user/' + this.token);
    }
  }

  // Get the  tontine information
  getTontineDetail(tontineId: number) {
    this.token = this.userService.getUserToken();
    if (this.token) {
      return this.api.get('tontine/visualiser/v1/visualiser_tontine/' + tontineId + '/' + this.token);
    }
  }

  // Get the quality of the tontine
  getQualityTontine() {
    return this.api.get('tontine/quality/v1/quality_tontine');
  }


  // Add or remove the user role
  addOrRemoveUserRole(tontine: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine/attribute/v1/role/tomember/' + this.token, tontine);
  }


  // The list of tontime members
  getTontinesMembers(tontineId: any) {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine/invitation/v1/member_confirmed/' + tontineId + '/' + this.token);
  }

  /** ============ Parts services start ============= */


  // Add a member part
  addPartMembreTontine(demandePart: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('part/v1/addPartMember/' + this.token, demandePart);
  }

  // Remove a part from a member
  removePartMembreTontine(part: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('part/v1/subtractPartMember/' + this.token, part);
  }

  // Get all the part of tontine member
  getPartMembreTontine(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('part/v1/getAllPartMember/' + tontineId + '/' + this.token);
  }

  // Get all the part of tontine member with token
  getPartMembreTontineWithToken(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('part/v1/getAllPartMember/' + tontineId + '/' + this.token);
  }

  // Get all the part of tontine member with userId
  getPartMembreTontineWithUserId(tontineId: number, userId: number) {
    return this.api.get('part/v1/getAllPartMember/' + tontineId + '/' + userId);
  }



  /** ============ Statistics services start ============= */

  // Get all cycles of a tontine
  getTontinesCycles(tontineId: number) {
    return this.api.get('statistique/v2/tontine/get/cycles/' + tontineId);
  }

  // Get all seances of a tontine's cycle
  getTontinesCyclesSeances(cycleId: number) {
    return this.api.get('statistique/v1/tontine/get/seance/' + cycleId);
  }

  // Get all data statistics of a tontine
  getAllStatisticsData(tontineData: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('statistique/v1/tontine/' + this.token, tontineData);
  }

  // Get the list of members of a seance
  getMembersSeanceList(cycleId: any) {
    this.token = this.userService.getUserToken();
    return this.api.get('statistique/get/list/member/' + cycleId + '/' + this.token);
  }

  /** ============ Statistics services end ============= */


  // update the quota admin validator
  updateAdminValidator(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.put('tontine/create/v1/tontine_update_role/' + this.token, data);
  }

  /* Order the member list */
  orderMembersList(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('ordering/v1/permut/order/bouffe/member/' + this.token, data);
  }

  /* Order the member list */
  designatedJackpotList(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('ordering/v1/designate/member/bouffe/' + this.token, data);
  }

  /* get all member contribution for a tontine */
  getMemberStokvelContribution(data: any) {
    this.token = this.userService.getUserToken();
    if (this.token) {
      return this.api.post('trace/v1/etat/member/tontine/' + this.token, data);
    }

  }

  // Disable a member of a tontine
  disableTontineMember(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('membre/tontine/v1/active/or/desative/' + this.token, data);
  }

  // Disable a tontine
  disableTontine(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine/archived/' + this.token, data);
  }

  // Disable a tontine
  setNbBatches(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('numberlot/tontine/set/nombre/lot/seance/' + this.token, data);
  }


  // get members who have paid full cautions
  getMembersPaidFullCautions(cycleId: any) {
    this.token = this.userService.getUserToken();
    return this.api.get(`caution/get/member/withFullCaution/${cycleId}/` + this.token);
  }


  // get members who have paid partial cautions
  getMembersPaidPartialCautions(cycleId: any) {
    this.token = this.userService.getUserToken();
    return this.api.get(`caution/get/member/withOutFullCaution/${cycleId}/` + this.token);
  }


}
