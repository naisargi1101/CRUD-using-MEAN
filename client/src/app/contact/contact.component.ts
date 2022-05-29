import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  public fname: string = '';
  public lname: string = '';
  public phone: string = '';
  public contact: any;

  addContact() {
    const newContact = {
      _id: '',
      fname: this.fname,
      lname: this.lname,
      phone: this.phone,
    };

    this.contactService
      .addContact(newContact)
      .subscribe((res) => console.log(res));
  }

  ngOnInit(): void {}
}
