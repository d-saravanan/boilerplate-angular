import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthHeaders } from "./auth.headers";

export abstract class BaseHttpService<T> {
  baseAPIUrl: string;
  serviceAPISegment: string;
  private requestOptions = {
    headers: this.authHeaders.getHeaders()
  };

  constructor(
    private httpClient: HttpClient,
    private authHeaders: AuthHeaders
  ) {}

  get<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(
      `${this.baseAPIUrl}\\${this.serviceAPISegment}`,
      this.requestOptions
    );
  }

  getById<T>(id: number): Observable<T> {
    return this.httpClient.get<T>(
      `${this.baseAPIUrl}\\${this.serviceAPISegment}\\${id}`,
      this.requestOptions
    );
  }

  post<T>(data: T): Observable<any> {
    return this.httpClient.post(
      `${this.baseAPIUrl}\\${this.serviceAPISegment}`,
      data,
      this.requestOptions
    );
  }

  put<T>(data: T): Observable<any> {
    return this.httpClient.put(`${this.baseAPIUrl}\\${this.serviceAPISegment}`, data, this.requestOptions);
  }
}
