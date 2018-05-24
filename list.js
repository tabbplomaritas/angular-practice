"use strict";

const list = {
  bindings: {
    contactList: "<"
  },

  template: `
  <div ng-repeat="person in $ctrl.contactList">
    <p>Name: {{person.name}}</p>
    <p>Phone: {{person.phone}}</p>
  </div>
  `
}



angular
.module("app")
.component("list", list);
