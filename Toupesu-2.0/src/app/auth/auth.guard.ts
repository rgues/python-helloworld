import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../dashboard/user/service/user.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {

    constructor(
        private userService: UserService,
        private route: Router
    ) {}
    
    canLoad( route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
            if (this.userService.getUserToken()) {
                return true;
            } else {
                this.route.navigateByUrl('/auth');
                return false;
            }
    }
}
