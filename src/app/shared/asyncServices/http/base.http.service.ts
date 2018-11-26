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

  public get<T>(fullResponse: boolean?): Observable<T[]> {

    this.getFullResponse<T>(fullResponse);

    return this.httpClient.get<T[]>(
      `${this.baseAPIUrl}\\${this.serviceAPISegment}`,
      this.requestOptions
    );
  }

  private getFullResponse<T>(fullResponse: boolean) {
    const reqOptions = this.requestOptions;
    if (fullResponse) {
      reqOptions['observe'] = 'response';
    }
  }

  getById<T>(id: number, fullResponse: boolean?): Observable<T> {
    this.getFullResponse<T>(fullResponse);
    return this.httpClient.get<T>(
      `${this.baseAPIUrl}\\${this.serviceAPISegment}\\${id}`,
      this.requestOptions
    );
  }

  post<T>(data: T, fullResponse: boolean?): Observable<any> {
    this.getFullResponse<T>(fullResponse);

    return this.httpClient.post(
      `${this.baseAPIUrl}\\${this.serviceAPISegment}`,
      data,
      this.requestOptions
    );
  }

  put<T>(data: T, fullResponse: boolean?): Observable<any> {
    this.getFullResponse<T>(fullResponse);
    return this.httpClient.put(`${this.baseAPIUrl}\\${this.serviceAPISegment}`, data, this.requestOptions);
  }

  delete<T>(id: number, fullResponse: boolean?): Observable<any> {
    this.getFullResponse<T>(fullResponse);

    return this.httpClient.delete(
      `${this.baseAPIUrl}\\${this.serviceAPISegment}\\${id}`,
      this.requestOptions
    );
  }
}
