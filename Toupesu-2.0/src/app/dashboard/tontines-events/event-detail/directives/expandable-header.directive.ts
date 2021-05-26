import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[myScrollVanish]'
})
export class ExpandableHeaderDirective implements OnInit {

  @Input('myScrollVanish') scrollArea;

  private hidden = false;
  private triggerDistance = 20;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private domCtrl: DomController
  ) { }

  ngOnInit() {
    this.initStyles();
    this.scrollArea.ionScroll.subscribe((scrollEvent: CustomEvent) => {

      // tslint:disable-next-line: prefer-const
      let delta = scrollEvent.detail.deltaY;

    /* if (scrollEvent.detail.currentY === 0 && this.hidden) {
        setTimeout(() => {
          this.show();
        }, 200);
        
      } else */  if (!this.hidden && delta > this.triggerDistance) {

          this.hide();
      } else if (this.hidden && delta < -this.triggerDistance) {

          this.show();
     
      }

    });

  }

  initStyles() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s ease');
    });

  }

  hide() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.element.nativeElement, 'min-height', '55px');
      this.renderer.setStyle(this.element.nativeElement, 'height', '0px');
      this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
      this.renderer.setStyle(this.element.nativeElement, 'padding', '0');
    });
    this.hidden = true;
  }

  show() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.element.nativeElement, 'height', '300px');
      this.renderer.removeStyle(this.element.nativeElement, 'opacity');
      this.renderer.removeStyle(this.element.nativeElement, 'min-height');
      this.renderer.removeStyle(this.element.nativeElement, 'padding');
    });

    this.hidden = false;
  }


}
