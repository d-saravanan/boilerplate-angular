import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface IAuthHeaders {
  ContentType: string;
  Authorization: string;
  getHeaders(): HttpHeaders;
}

@Injectable({
  providedIn: 'root'
})
export class AuthHeaders implements IAuthHeaders {
  ContentType: string;
  Authorization: string;
  constructor(contentType, authorization) {
    this.ContentType = contentType;
    this.Authorization = authorization;
  }
  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': this.ContentType,
      'Authorization': this.Authorization
    });
  }
}
