import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IAuthentication} from '../interfaces';

@Injectable()
export class AuthenticationService {
  private https = inject(HttpClient)

  registerUser(req: IAuthentication) {
    return this.https.post<IAuthentication>(`${environment.authUrl}/register`, req);
  }
}
