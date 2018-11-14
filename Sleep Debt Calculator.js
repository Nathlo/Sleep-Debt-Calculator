// Calculates number of hours of sleep for each day
const getSleepHours = day => {
 	if (day === 'monday') {
    return 6;
  } else if
    (day === 'tuesday') {
    return 6;
  } else if
    (day === 'wednesday') {
    return 6;
  } else if
    (day === 'thursday') {
    return 9;
  } else if
    (day === 'friday') {
    return 6;
  } else if
    (day === 'saturday') {
    return 6.5;
  } else if
    (day === 'sunday') {
    return 7;
  } else {
    return 'Error!'
  }
};

console.log(`You have slept ${getSleepHours('wednesday')} yesterday night`);

/*  Alternative code writing with the SWITCH statement
*			switch(day) {
*			case 'monday':
*			   return 8
*				break;
*			case 'tuesday':
*				return 7
*				break;
*			...
*			default :
*				return 'Error!'
*			}
*/

// Calculates the total of hours of sleep in the week
const getActualSleepHours = () =>
   getSleepHours('monday') +
   getSleepHours('tuesday') +
   getSleepHours('wednesday') +
   getSleepHours('thursday') +
   getSleepHours('friday') +
   getSleepHours('saturday') +
   getSleepHours('sunday');

console.log(`Over the week, your total hours of sleep is ${getActualSleepHours()}`);


// Calculates the user's ideal sleep hours
const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

 console.log(`Your ideal sleep hour in the week is ${getIdealSleepHours()}`);

// Calculates the sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    }

  else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than you need! You got ' + (idealSleepHours - actualSleepHours) + ' hours more sleep.');
    }

  else if  (actualSleepHours < idealSleepHours) {
      console.log('You should get some rest. You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep.');
    }

  else {
      console,log('Error');
    }
}; // end of function sleep debt

calculateSleepDebt();


    
