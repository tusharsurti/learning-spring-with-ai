import { Component, OnInit } from '@angular/core';
import { Api } from '../api';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.html',
  styleUrls: ['./hello.css']
})
export class Hello implements OnInit {

  message: string = '';

  constructor(private api: Api) { }

  ngOnInit(): void {
    this.api.getHello().subscribe((data: string) => {
      this.message = data;
    });
  }
}
