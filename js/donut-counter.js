//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
var guests = prompt("How many guests?", "1")
var donuts = prompt("How many donuts?", "2")

function enough_donuts(guests, donuts){
  var response
  if (parseInt(guests) > parseInt(donuts))
    return response = "There are not enough donuts."
  else (parseInt(guests) <= parseInt(donuts))
    return response = "There are enough donuts."
};

alert(`# of Donuts = ${donuts}, # of Guests = ${guests} ...${enough_donuts(guests, donuts)}`)
