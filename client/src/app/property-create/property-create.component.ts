import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent implements OnInit {

  property = {}

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveProperty() {
    this.http.post('http://localhost:8080/property', this.property)
        .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/property-details/', id]);

        }, (err) => {
          console.log(err);
        });
  }

}
