//This keyword
//console.log(this);
//CalculateAge(1995);
//function CalculateAge(age)
//{
//    var c = 2018 - 1995;
//    console.log(c);
//    console.log(this);
//}

/*var obj = {
    Name :'Bal Krishna',
    CalAge:function ()
{
        console.log(this);
}
}
obj.CalAge();
*/

var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2016 -
            this.yearOfBirth);
        //method inside method but this method is not object method is thid function pointing to window object
        function innerFunction() { 
            console.log(this);
        }
        innerFunction();
    }
}
var Mike = {
    name: 'Mike',

}
john.calculateAge();
Mike.calculateAge = john.calculateAge;  // method borrowing
Mike.calculateAge();