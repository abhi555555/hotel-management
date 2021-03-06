import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;
  public flatlogicEmail = 'admin@flatlogic.com';
  public flatlogicPassword = 'admin';

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.flatlogicEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.flatlogicPassword, [Validators.required])
    });
  }

  public login(): void {
    alert(JSON.stringify(this.form.value));
    
    

    if (this.form.valid) {
      // alert('inside this.form.valid');
      // this.sendLoginForm.emit();
      this.router.navigateByUrl('/hotel/dashboard');
    }
  }

}
