import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {


  initalColor:string= '#f5f5f5';
  defaultColor:string= 'red';
  defaultHeight:number = 180;


  constructor(private element:ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initalColor);
   }

//#region Input
   @Input("pkmBorderCard") borderColor:string;
//#endregion

//#region  Listners
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initalColor);
  }
//#endregion


setBorder(color:string){
  this.element.nativeElement.style.border =
   `solid 4px ${color}`;
}

setHeight(pixel:number){
 this.element.nativeElement.style.height = `${pixel}px`;
}

}
