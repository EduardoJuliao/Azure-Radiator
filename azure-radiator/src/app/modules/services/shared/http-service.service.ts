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

  public getMany<T>(action: string): Observable<T[]> {
    var url = config.BaseAddress + '/' + config.Organization + '/_apis/' + action + '?api-version=6.0';
    return this.client.get(url, { headers: this.headers })
      .pipe(
        map((data: any) => data.value.map((item: T) => item))
      ) as Observable<T[]>;
  }
}

interface RestModel<T> {
  count: number;
  value: Record<number, T>[];
}
