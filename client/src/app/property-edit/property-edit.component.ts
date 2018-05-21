import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyType} from "../model/PropertyType";

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {

    property = {};

    propertyTypes: PropertyType[] = [];

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getProperty(this.route.snapshot.params['id']);
        this.http.get('http://localhost:8080/property/types').subscribe( (data: Array<any>) => {
            for(let i of data){
                let type = new PropertyType()
                type.propertyType = i
                this.propertyTypes.push(type);
            }
        })
    }

    getProperty(id) {
        this.http.get('http://localhost:8080/property/'+id).subscribe(data => {
            this.property = data;
        });
    }

    updateProperty(id) {
        this.http.put('http://localhost:8080/property/'+id, this.property)
            .subscribe(res => {
                    let id = res['id'];
                    this.router.navigate(['/property-details', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}
