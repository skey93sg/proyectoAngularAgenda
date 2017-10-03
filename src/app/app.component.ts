import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Agenda';
  
  contactos: string[] = [
    'Tim Cook',
    'Bill Gates',
    'Elon Musk',
    'Steve Wozniak',
    'Sundar Pichai'
  ];

  ngOnInit(){

    console.log('estoy vivo')

  }

}
