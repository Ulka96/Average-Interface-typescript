interface people {
    firstName: string
    lastName: string
    fullName() : string
}

const setPeople: people = {
firstName : "John",
lastName: "Doe",
fullName: function () {
    return this.firstName + " " + this.lastName
}
}

console.log( setPeople.fullName());


