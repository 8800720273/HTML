//function contructor
var nitesh = {
    name: 'nitesh',
    yearOfBirth: 1995,
    job: 'teacher'
};
var Person = function(name,yearOfBirth,job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function () {
    console.log(2016 -
        this.yearOfBirth);
}
var nitesh = new Person('nitesh', 1995, 'developer');
var krishna = new Person('krishna', 1996, 'devloper');
var chiku = new Person('chiku', 1985, 'cricketer');
nitesh.calculateAge();
krishna.calculateAge();
chiku.calculateAge();

//Object.create()
var personProto = {
    calculateAge: function () {
        console.log(2018 - yearOfBirth);
    }
};
var nitesh = Object.create(personProto);
nitesh.name = 'Nitesh';
nitesh.yearOfBirth = 1995;
nitesh.job = 'developer';

var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });