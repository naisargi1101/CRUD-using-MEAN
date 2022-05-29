import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private httpClient: HttpClient) {}
  //Get the data
  getContacts() {
    return this.httpClient.get('http://localhost:3000/api/getContact');
  }

  //add contact
  addContact(newContact: Contact) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = {
      headers: httpHeaders,
    };
    return this.httpClient.post(
      'http://localhost:3000/api/insertContact',
      newContact,
      options
    );
  }

  //delete method
  deleteContact(id: string) {
    return this.httpClient.delete('http://localhost:3000/api/delContact/' + id);
  }
}
