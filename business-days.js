// Write a business_days_from_now() method, which takes as an input a number of
// business days, and returns a Date object which is that many business days from
// now. For this, a business day is only a weekday and not a weekend.

// for example:

// Today is Wednesday the 8th.
// business_days_from_now(5)

// Current Date: Jan 8, 2013 Wednesday

// Output:
// Wednesday the 15th


function businessDaysFromNow(days) {
  var now = new Date();
  var future = new Date();
  var startingDay = now.getDay();
  var weekendDays = 0;
  var numberOfDays = 0;

  // now.getDay() // 0-6. 0 = sunday, etc. interested in in 1-5.

  // if we use mod 5, we can constrain the number of days to mon-fri.
  // each time we wrap around the modulus, we add another 2 days to the result
  // to account for the weekend.

  // eg. wed jan 8 => wed => 0 1 2 (mon tue wed)
  // add 5 days => 2 + 5 mod 5 => 2 (wed)
  // Math.floor(7/5) === 1 (* number of weekend days to add to total)

  // want to figure out the number of "actual" days to add from the
  // number of business days.

  if (startingDay === 0 || startingDay === 6) {
    startingDay = 0; // constrain starting day to OUR monday.
  }
  else {
    startingDay = startingDay - 1; // this way monday === 0.
  }

  weekendDays = Math.floor((startingDay + days) / 5) * 2;
  numberOfDays = weekendDays + days;

  future.setDate(now.getDate() + numberOfDays);

  return future;
}

for (var i = 0; i < 30; i++) {
  console.log('today is: ' + new Date());
  console.log(i + ' business days from now is: ' + businessDaysFromNow(i));
  console.log('\n');
}
