import { Component, 
  OnInit, 
  Input,
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked
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

  ngAfterContentInit(){
    console.log('AfterContentInit called')
  }
  ngOnInit() {
    console.log('ngOnInit called')
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
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnChanges(){
    console.log('ngOnChanges called')
  }
  
}
