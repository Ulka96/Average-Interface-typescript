"use strict";
const setPeople = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(setPeople.fullName());
