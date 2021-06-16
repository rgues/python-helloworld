import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/shared/service/location.service';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent implements OnInit {

  constructor(
    public popoverController: PopoverController,
    private navController: NavController,
    private authService: AuthService,
    private location: LocationService,
    private router: Router
  ) { }

  ngOnInit() { }

  closeDashboardMenu() {
    this.popoverController.dismiss();
  }

  // Open create tontine page
  createTontinePage() {
    this.closeDashboardMenu();
    this.router.navigate(['/dashboard/my-tontines/new']);
  }

  // Open create tontine page
  createTontineEventPage() {
    this.closeDashboardMenu();
    this.router.navigate(['/dashboard/tontines-events/new']);
  }

  // Open the user profile page
  userProfilePage() {
    this.closeDashboardMenu();
    this.router.navigate(['/dashboard/user']);
  }

  // Open the contact us page
  contactUs() {
    this.closeDashboardMenu();
    this.router.navigate(['/dashboard/contact-us']);
  }


  // Go to tontine demo
  goToTontineDemo() {
    this.closeDashboardMenu();
    this.router.navigate(['dashboard','my-tontines','new-demo']);
  }

  // Get the list of countries manage by Toupesu
  getCountries(refresher: boolean) {
      this.location.getAllCountries(refresher).
        then((countries: any) => {});
  }

  // Get all the word countries
  getWordCountries(refresh) {
      this.location.getWordCountries(refresh).then((countries: any) => {
      });
  }

  // Log out de app
  logout() {
    this.authService.removeUserSession();
    this.authService.removeConfigData();
    this.closeDashboardMenu();
    this.getCountries(true);
    this.getWordCountries(true);
    this.navController.setDirection('root');
    this.router.navigate(['/auth']);
  }

}
