import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import config from '../../../../assets/azure.config.json';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  protected headers = new HttpHeaders({
    'Content-Type': 'application/jsonp'
  }).set('Authorization', `Basic ${btoa("" + ":" + config.ConnectionToken)}`)

  constructor(private client: HttpClient) { }

  private getUrl(action: string): string {
    return `${config.BaseAddress}/${config.Organization}/_apis/${action}?api-version=6.0`
  };

  public getMany<T>(action: string): Observable<T[]> {
    return this.client.get(this.getUrl(action), { headers: this.headers })
      .pipe(
        map((data: any) => data.value.map((item: T) => item))
      ) as Observable<T[]>;
  }

  public get<T>(action: string): Observable<T> {
    return this.client.get(this.getUrl(action), { headers: this.headers }) as Observable<T>;
  }
}