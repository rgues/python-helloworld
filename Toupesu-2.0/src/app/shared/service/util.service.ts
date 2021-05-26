import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
  ) {

  }


  // Format an array to matrix and can be used for pagination
  formatArrayToMatrix(arraydata: any[], nbElements: number) {
    const nbres = arraydata.length;
    const nbIter = Math.ceil(nbres / nbElements);
    const matrix = [];
    let subMatrix = [];
    let index = 0;
    let j = 0;
    while (index < nbIter) {
      subMatrix = [], j = 0;
      while (j < nbElements) {
        if (index * nbElements + j < nbres) {
          subMatrix.push(arraydata[index * nbElements + j]);
        }
        j++;
      }
      if (subMatrix.length > 0) {
        matrix.push(subMatrix);
      }
      index++;
    }
    return matrix;
  }

  oderByTontineDate(tontineList: any[]) {
    if (tontineList && tontineList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < tontineList.length) {
        for (let j = i + 1; j < tontineList.length; j++) {
          if (tontineList[i].tontine.created_at < tontineList[j].tontine.created_at) {
            temp = tontineList[j];
            tontineList[j] = tontineList[i];
            tontineList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return tontineList;
  }

  oderByUpdatedAt(dataList: any[]) {
    if (dataList && dataList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < dataList.length) {
        for (let j = i + 1; j < dataList.length; j++) {
          if (dataList[i].updated_at < dataList[j].updated_at) {
            temp = dataList[j];
            dataList[j] = dataList[i];
            dataList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return dataList;
  }

  oderByFactureDate(data: any[]) {
    if (data && data.length > 0) {
      let i = 0;
      let temp: any;
      while (i < data.length) {
        for (let j = i + 1; j < data.length; j++) {
          if (data[i].facture.created_at < data[j].facture.created_at) {
            temp = data[j];
            data[j] = data[i];
            data[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return data;
  }

  orderBySeanceKeyUp(data: any[]) {
    if (data && data.length > 0) {
      let i = 0;
      let temp: any;
      while (i < data.length) {
        for (let j = i + 1; j < data.length; j++) {
          if (data[i].infos_seance.updated_at < data[j].infos_seance.updated_at) {
            temp = data[j];
            data[j] = data[i];
            data[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return data;
  }

  oderBySeanceDate(data: any[]) {
    if (data && data.length > 0) {
      let i = 0;
      let temp: any;
      while (i < data.length) {
        for (let j = i + 1; j < data.length; j++) {
          if (data[i].seance.date_debut < data[j].seance.date_debut) {
            temp = data[j];
            data[j] = data[i];
            data[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return data;
  }

  oderByNotificationDate(tontineList: any[]) {
    if (tontineList && tontineList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < tontineList.length) {
        for (let j = i + 1; j < tontineList.length; j++) {
          if (tontineList[i].created_at < tontineList[j].created_at) {
            temp = tontineList[j];
            tontineList[j] = tontineList[i];
            tontineList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return tontineList;
  }

  orderByTontineEventDate(tontineList: any[]) {
    if (tontineList && tontineList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < tontineList.length) {
        for (let j = i + 1; j < tontineList.length; j++) {
          if (tontineList[i].created_at < tontineList[j].created_at) {
            temp = tontineList[j];
            tontineList[j] = tontineList[i];
            tontineList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return tontineList;
  }

  occurenceOfId(dataList: any[], key: string, id: number) {
    let occur = 0;
    let i = 0;
    while (i < dataList.length) {
      if (dataList[i][key] === id) {
        occur++;
      }
      i++;
    }
    return occur;
  }

  occurenceIndex(dataList: any[], key: string, id: number) {
    let indexList = [];
    let i = 0;
    while (i < dataList.length) {
      if (dataList[i][key] === id) {
        indexList.push(i);
      }
      i++;
    }
    return indexList;
  }

  removeIdOccurence(dataList: any[], key: string, id: number) {
    let i = 0;
    let found = false;
    while (i < dataList.length && !found) {
      if (dataList[i][key] === id) {
        dataList.splice(i, 1);
        found = true;
      }
      i++;
    }
    return dataList;
  }

  occurenceMax(dataList: any[]) {
    let max = dataList[0];
    let i = 0;
    for (let j = i + 1; j < dataList.length; j++) {
      if (max < dataList[j]) {
        max = dataList[j];
      }
    }
    return max;
  }

  orderByKey(dataList: any[], key: string) {
    if (dataList && dataList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < dataList.length) {
        for (let j = i + 1; j < dataList.length; j++) {
          if (dataList[i][key] >= dataList[j][key]) {
            temp = dataList[j];
            dataList[j] = dataList[i];
            dataList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return dataList;
  }

  orderByKeyUp(dataList: any[], key: string) {
    if (dataList && dataList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < dataList.length) {
        for (let j = i + 1; j < dataList.length; j++) {
          if (dataList[i][key] < dataList[j][key]) {
            temp = dataList[j];
            dataList[j] = dataList[i];
            dataList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return dataList;
  }

  orderByKeyDown(dataList: any[], key: string) {
    if (dataList && dataList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < dataList.length) {
        for (let j = i + 1; j < dataList.length; j++) {
          if (dataList[i][key] >= dataList[j][key]) {
            temp = dataList[j];
            dataList[j] = dataList[i];
            dataList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return dataList;
  }

  orderByObjetKeyUp(dataList: any[],objet: string, key: string) {
    if (dataList && dataList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < dataList.length) {
        for (let j = i + 1; j < dataList.length; j++) {
          if (dataList[i][objet][key] < dataList[j][objet][key]) {
            temp = dataList[j];
            dataList[j] = dataList[i];
            dataList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return dataList;
  }

  orderByObjetKeyDown(dataList: any[],objet: string, key: string) {
    if (dataList && dataList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < dataList.length) {
        for (let j = i + 1; j < dataList.length; j++) {
          if (dataList[i][objet][key] >= dataList[j][objet][key]) {
            temp = dataList[j];
            dataList[j] = dataList[i];
            dataList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return dataList;
  }

  orderByKeyUpTime(dataList: any[], key: string) {
    if (dataList && dataList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < dataList.length) {
        for (let j = i + 1; j < dataList.length; j++) {
          if (dataList[i][key][0] && (dataList[i][key][0].heures < dataList[j][key][0].heures)) {
            temp = dataList[j];
            dataList[j] = dataList[i];
            dataList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return dataList;
  }

  orderByPosition(dataList: any[]) {
    if (dataList && dataList.length > 0) {
      let i = 0;
      let temp: any;
      while (i < dataList.length) {
        for (let j = i + 1; j < dataList.length; j++) {
          if (dataList[i].settings.position >= dataList[j].settings.position) {
            temp = dataList[j];
            dataList[j] = dataList[i];
            dataList[i] = temp;
          }
        }
        i++;
      }
    } else {
      return [];
    }
    return dataList;
  }
}
