import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PropertyType} from "../model/PropertyType";

@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent implements OnInit {

  property = {};

  propertyTypes: PropertyType[] = [];


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
      this.http.get('http://localhost:8080/property/types').subscribe( (data: Array<any>) => {
          for(let i of data){
              let type = new PropertyType()
              type.propertyType = i
              this.propertyTypes.push(type);
          }
      })
  }

  saveProperty() {
    this.http.post('http://localhost:8080/property', this.property)
        .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/property-detail/', id]);

        }, (err) => {
          console.log(err);
        });
  }

}
