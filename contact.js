"use strict";

const contact = {

  template: `
  <heading></heading>
  <user-form add-contact="$ctrl.addContact(newContact);"></user-form>
  <list contact-list="$ctrl.contactList"></list>
  `,

  controller: function($element){
    const vm = this;
    vm.contactList = [{
      name: "Tracy",
      phone: "234-234-2345"
    },
    {
      name: "John",
      phone: "555-555-5535"
    }
  ];

    vm.addContact = (newContact) => {
      vm.contactList.push({
        name: newContact.name,
        phone: newContact.phone
      });
    };
  }
};


angular
  .module("app")
  .component("contact", contact);

