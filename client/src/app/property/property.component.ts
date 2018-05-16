import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor(private http: HttpClient) { }

  properties: any;

  ngOnInit() {
    this.http.get('http://localhost:8080/property').subscribe( data => {
      this.properties = data;
    })
  }

}
