import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact, NewContact } from '../../interfaces/contact';
import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule, ContactListItem, FormsModule],
  templateUrl:'./contacts-page.html',
  styleUrl: './contacts-page.scss'
})
export class ContactsPage implements OnInit {
createContact(arg0: any) {
throw new Error('Method not implemented.');
}
contactos: any;
  ngOnInit(): void {
    this.contactsService.getContacts();
  }

  authService = inject(AuthService);
  contactsService = inject(ContactsService);

}