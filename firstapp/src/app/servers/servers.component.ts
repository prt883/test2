import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
status = false;
msg = 'not clicked';
ename = 'test';
  constructor() {
    setTimeout(() => {
      this.status = true;
    }, 5000);
  }
getstatus() {
    this.msg = 'clicked the button' + this.ename;
}

getevent(event: Event) {
    this.ename = (event.target as HTMLInputElement).value;
}
  ngOnInit() {
  }

}
