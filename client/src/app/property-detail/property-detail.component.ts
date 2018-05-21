import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

    property = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
        this.getPropertyDetail(this.route.snapshot.params['id']);
    }

    getPropertyDetail(id) {
        this.http.get('http://localhost:8080/property/'+id).subscribe(data => {
            this.property = data;
        });
    }

    deleteProperty(id) {
        this.http.delete('http://localhost:8080/property/' + id)
            .subscribe(res => {
                    this.router.navigate(['/properties']);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}
