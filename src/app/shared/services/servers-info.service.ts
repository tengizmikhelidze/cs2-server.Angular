import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ServersInfoService {
  private https = inject(HttpClient)

  getCs2ServersInfo() {
    return this.https.get(environment.apiUrl + 'cs2/servers');
  }
}
