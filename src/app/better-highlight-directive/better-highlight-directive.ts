import { OnInit, 
  Renderer2, 
  ElementRef, 
  Directive, 
  HostListener,
  HostBinding 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor:string

  constructor(private renderer:Renderer2,private elementRef:ElementRef) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','red')
  }

  @HostListener('mouseenter') mouseenter(eventData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','red')
    this.backgroundColor='red'
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent')
    this.backgroundColor='transparent'

  }
}
