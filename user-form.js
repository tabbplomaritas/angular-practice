"use strict";

const userForm = {
  bindings: {
    addContact: "&"
  },

  template: `
  
  <form ng-submit="$ctrl.addContact({ newContact: $ctrl.newContact});">
    <input type="text" placeholder="name" ng-model="$ctrl.newContact.name">
    <input type="text" placeholder="phone number" ng-model="$ctrl.newContact.phone">
    <button>Add</button>
  </form>
  
  `
}


angular
  .module("app")
  .component("userForm", userForm);