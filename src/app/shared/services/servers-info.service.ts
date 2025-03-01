import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, Observable, of} from 'rxjs';
import {EmptyServersPlayersInfoResponse, ServersInfo, ServersPlayersInfo} from '../interfaces';

@Injectable()
export class ServersInfoService {
  private https = inject(HttpClient)

  getCs2ServersInfo(): Observable<ServersInfo> {
    return this.https.get<ServersInfo>(`${environment.apiUrl}/cs2/servers`);
  }

  getCs2ServerPlayersInfo(): Observable<ServersPlayersInfo> {
    return this.https.get<ServersPlayersInfo>(`${environment.apiUrl}/cs2/servers/players`)
      .pipe(
        catchError(() => {
          return of(EmptyServersPlayersInfoResponse)
        })
      )
  }
}
