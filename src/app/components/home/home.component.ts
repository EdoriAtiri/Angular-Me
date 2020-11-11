import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products = [];
  errMess: string;
  config: any;
  p: '';

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.apiservice.sendGet().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
    // ,  (errmess) => (this.errMess = <any>errmess);
  }
}
