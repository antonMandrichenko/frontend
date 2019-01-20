function User(fullName) {

  this.fullName = fullName;

  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return this.fullName.split(" ")[0];
      },
      set: function(newFirstName){
        return this.fullName = newFirstName + " " + this.surname;
      },
      enumerable: true
    },

    surname: {
      get: function () {
        return this.fullName.split(" ")[1];
      },
      set: function(newSurname){
        return this.fullName = this.firstName + " " + newSurname;
      },
      enumerable: true
    }
  });
}

var vasya = new User("Василий Попкин");

vasya.firstName = "Smith";
vasya.surname = "John";

console.log(vasya.firstName);

console.log(vasya.surname);

console.log(vasya.fullName);