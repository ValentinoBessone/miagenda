import { Injectable, inject } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  getContacts() {
    throw new Error('Method not implemented.');
  }
  aleatorio = Math.random();
  contacts: Contact[] = [
    {
      firstName: 'valentino',
      lastName: 'bessone',
      number: '3471342887',
      email: 'vbessone11@gmail.com',
      address: 'storni 729',
      id: '10',
      image: 'https://avatars.githubusercontent.com/u/52204228?v=4',
      company: 'UNIVERSIDAD',
      isFavorite: false
    }
  ];

  private authService = inject(AuthService);

  async deleteContact(id: string | number) {
    const res = await fetch(`https://agenda-api.somee.com/api/contacts/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.authService.token
      }
    });

    if (res.ok) {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      return true;
    } else {
      return false;
    }
  }
}
