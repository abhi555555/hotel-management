import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Email } from 'src/app/modules/models/email';
import { User } from 'src/app/modules/models/user';
import { AuthService } from 'src/app/modules/services/auth.service';
import { EmailService } from 'src/app/modules/services/email.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user$: Observable<User>
  public emails$: Observable<Email[]>

  constructor(
    private userService: AuthService,
    private emailService: EmailService,
    private router: Router
  ) {
    this.user$ = this.userService.getUser();
    this.emails$ = this.emailService.loadEmails();
  }

  ngOnInit(): void {
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.userService.signOut();

    // this.router.navigate([this.routers.LOGIN]);
    this.router.navigate(['/']);
  }


}
