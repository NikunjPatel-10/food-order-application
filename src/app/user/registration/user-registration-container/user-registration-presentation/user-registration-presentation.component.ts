import { Component } from '@angular/core';
import { UserLoginPresenterService } from 'src/app/user/login/user-login-container/user-login-presenter/user-login-presenter.service';

@Component({
  selector: 'app-user-registration-presentation',
  templateUrl: './user-registration-presentation.component.html',
  styleUrls: ['./user-registration-presentation.component.scss'],
  viewProviders:[UserLoginPresenterService]
})
export class UserRegistrationPresentationComponent {

}
