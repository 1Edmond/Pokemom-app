import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
})


export class AppComponent implements OnInit {
  
  
  ngOnInit(): void {
    
  }

 
  
  @HostListener('document:keydown.control.z') undo(event: KeyboardEvent) {
    console.log(`Control z à été appuyé.`);
  }
 
}
