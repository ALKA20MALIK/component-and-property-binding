import { ElementRef, OnInit, Directive } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightdirective implements OnInit{
    constructor(private elementRef:ElementRef){    
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green'
    }
}