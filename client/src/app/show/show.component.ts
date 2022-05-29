import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  public Contacts: any;
  delContact(id: string) {
    this.contactService.deleteContact(id).subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((res) => (this.Contacts = res));
  }
}
