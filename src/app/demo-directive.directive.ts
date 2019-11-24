import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirectiveDirective {

  constructor(private el: ElementRef) {
  }
  @Input('appDemoDirective') appDemoDirective: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('<div>  <h1>Replace text using Angular Directive!</h1>      1. Used Directive annotation to create Directive<br> 2. Used HostListener decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs. <br>3. mouseenter replaces the default text with demo text.<br>    4. mouseleave replaces demo text to default text.</div>');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('This is defalt test. Click me for change Text.');
  }

  private highlight(text:String) {
    this.el.nativeElement.innerHTML=text;
  }
}
