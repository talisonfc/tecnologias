import { Component, OnInit } from '@angular/core';
import { MessegeService } from '../messege.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessegeService) { }

  ngOnInit() {
  }

}
