import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsServices {
  aleatorio = Math.random()
  contacts: Contact[] = [
    {
      firstName: "valentino",
      surname: "bessone",
      phone: "3471342887",
      email: "vbessone11@gmail.com",
      address: "storni 729",
      id: "10",
    }
  ]

}
async deleteContact(id: string | number) {
    const res = await fetch("https://agenda-api.somee.com/api/contacts" + "/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + this.authService.token
        }
      }
    );
    if (res.ok) {
      this.contacts = this.contacts.filter(contact => contact.id !== id)
      return true;
    } else {
      return false;
    }
  }
