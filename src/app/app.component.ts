import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' Angular component-hooks';

  constructor() { }
  ngOnInit() {   
   console.log('ngOnInit');
}


  ngOnChanges(){
    console.log('ngOnChanges');
  } 
 ngDoCheck(){
   console.log('ngDoCheck');
  }
  ngAfterContentInit(){
   console.log('ngAfterContentInit');
  } 
 ngAfterContentChecked(){
   console.log('ngAfterContentChecked')
  } 
 ngAfterViewInit(){
   console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){   
   console.log('ngAfterViewChecked');  
} 
 ngOnDestroy(){
   console.log('ngOnDestory');
  }
}
