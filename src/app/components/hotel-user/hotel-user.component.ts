import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/modules/models/user';

@Component({
  selector: 'app-hotel-user',
  templateUrl: './hotel-user.component.html',
  styleUrls: ['./hotel-user.component.scss']
})
export class HotelUserComponent implements OnInit {
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  // public routes: typeof routes = routes;
  public flatlogicEmail: string = "https://flatlogic.com";

  constructor() { }

  ngOnInit(): void {
  }

  public signOutEmit(): void {
    this.signOut.emit();
  }

}
