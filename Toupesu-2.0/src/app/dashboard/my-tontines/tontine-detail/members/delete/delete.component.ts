import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {

  @Input() selectedMber: any;

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

}
