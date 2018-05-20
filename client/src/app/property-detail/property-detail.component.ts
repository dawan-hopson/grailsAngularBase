import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

    property = {};

    constructor(private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
        this.getCustomerDetail(this.route.snapshot.params['id']);
    }

    getCustomerDetail(id) {
        this.http.get('http://localhost:8080/property/'+id).subscribe(data => {
            this.property = data;
        });
    }

}
