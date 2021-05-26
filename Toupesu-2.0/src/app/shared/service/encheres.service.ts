import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class EncheresService {

    constructor( 
      private api: ApiService,
      private socket: Socket
    ) {
   
    }

  // Connect to the socket
  connexion(seanceId): boolean {
   const connexion = this.socket.connect();
    this.socket.emit('room', seanceId);
    return connexion;
  }

  // Connect a member to tontine
  memberConnectionOld(userId, numeroPart, seanceId): EncheresService {
    this.socket.emit('member-connect', [userId, numeroPart, seanceId]);
    return this;
  }

  memberConnection(userId, numeroPart, seanceId,numberLot): EncheresService{
    this.socket.emit('member-connect', [userId,numeroPart,seanceId,numberLot]);
    return this;
  }

  // Get all members
  getMembers(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('connected', (data) => {
        observer.next(data);
        return observer;
      });
    });
  }

  // Get the counter
  getCounter(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('compter', (data) => {
        observer.next(data);
        return observer;
      });
    });
  }

  // Get Informations of a seance
  getSessionInfo(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('session', (data) => {
        //console.log('jojosession === '+JSON.parse(data));
        observer.next(JSON.parse(data));
        return observer;
      });
    });
  }

  // Get the next amount of the bid
  getNextAmount(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('next-amount', (data) => {
        observer.next(JSON.parse(data));
        return observer;
      });
    });
  }

  // Get the current amount of the bid
  getCurrentAmount(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('current-amount', (data) => {
        observer.next(JSON.parse(data));
        return observer;
      });
    });
  }

  // Get the winner of the bid
  getWinnerCurrent(valueID): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('last-bider-'+valueID, (data) => {
        observer.next(JSON.parse(data));
        return observer;
      });
    });
  }

 // Send the bid data
  biderOld(userId, numeroPart, seanceId) {
    this.socket.emit('bid', [userId, numeroPart, seanceId]);
  }

  bider(userId, numeroPart, seanceId,numeroLot,current_amount,increment){
    this.socket.emit('bid',[userId, numeroPart,seanceId,numeroLot,current_amount,increment]);
  }

  // Get the bidder history
  getBidderHistory(seance_id,numero_lot) {
    return this.api.get('bid/get/bider/'+seance_id+'/'+numero_lot);
  }

  // Get the bid result
  getBidResult(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('bid', (data) => {
        observer.next(JSON.parse(data));
        return observer;
      });
    });
  }

  // Get all chat messages
  getChatMessages(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

  // Send the bid amount
  getAmount(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('emit-bid-amount', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

// Send the bid delai
  getDelai(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('delai', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

  // Get the top member of the bid
  getTopMember(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('emit-top-member', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

  // Get all chats
  getChats(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('chats', (data) => {
        observer.next(data);
      });
      return observer;
    });
  }

  // Get chat data
  getChat(): Observable<any> {
    return  new Observable(observer => {
      this.socket.on('chat', (data) => {
        observer.next(data);
        return observer;
      });
    });
  }

  // Set the chat message
  setChat(username: string, message: string, tontine: string) {
    this.socket.emit('chat', [username, message, tontine]);
  }

}
