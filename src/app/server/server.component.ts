import { Component, 
  OnInit, 
  Input,
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
OnDestroy,
AfterViewInit,
AfterViewChecked {

  @Input('srvElement') element:{type:string,name:String,content:string}
  @ViewChild('heading',{static:true}) heading:ElementRef
  @ContentChild('paragraph',{static:true}) paragraph:ElementRef

  ngAfterContentInit(){
    console.log('AfterContentInit called')
    console.log(this.paragraph.nativeElement.textContent)
  }
  ngOnInit() {
    console.log('ngOnInit called')
    console.log(this.paragraph.nativeElement.textContent)
    
  }
  constructor() {
    console.log('constructor called')
   }
  ngAfterContentChecked(){
    console.log('AfterContentChecked called')
  }
  ngDoCheck(){
    console.log('ngDoCheck called')
  }
  ngOnDestroy(){
    console.log('ngDestroy called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
    console.log(this.heading.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
    console.log(this.heading.nativeElement.textContent)
  }

  ngOnChanges(){
    console.log('ngOnChanges called')
  }
  
}
