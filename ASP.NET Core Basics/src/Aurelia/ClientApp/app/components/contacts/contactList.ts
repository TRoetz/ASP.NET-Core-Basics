﻿import { inject } from 'aurelia-framework';
import { Contact } from './contact';
import { ContactService } from './contactService';

@inject(ContactService)
export class ContactList {
    contacts: Contact[];
    selectedContactId: number = null;

    constructor(private contactService: ContactService) {}

    created() {
        this.contactService.getAll()
            .then(contacts => this.contacts = contacts);
    }

    select(contact) {
        this.selectedContactId = contact.id;
    }
}