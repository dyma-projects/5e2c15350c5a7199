import { Directive, HostListener, ElementRef } from '@angular/core';
export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  DOWN_ARROW = 40,
}
@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    switch (event.keyCode) {

      case KEY_CODE.DOWN_ARROW:
        this.upColor("RED")
        break;
        case KEY_CODE.UP_ARROW:
        this.upColor("GREEN")
        break;
        case KEY_CODE.LEFT_ARROW:
        this.upColor("ORANGE")
        break;
        case KEY_CODE.RIGHT_ARROW:
        this.upColor("CYAN")
        break;
      default:
        this.upColor("BLACK")
        break;
    }
  }
  constructor(private el :ElementRef) { }
  
  upColor(color:string){
    this.el.nativeElement.style.color = color;
  }
}
