/* Monday June 6 2022 */

/* Video 122 */

/* - - - - - - - - - - - - - - - - - - - - - - */

const airline = 'Tap Portugal';

console.log(airline.toLowerCase());
console.log(airline.toLowerCase());
``
// Fix Capitalization In Name
const passenger = 'Jazmine';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails
const email = 'jazmine.abdilahi@gmail.com'
const loginEmail = 'Jazmine.Abdilahi@gmail.com \n' ;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmil.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
constPriceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All Passengers Come To Boarding Door 23. Boarding Door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A32neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Airb'));

if(plane.startsWith('Airbus') && plane.endsWith('neo'))  {
    console.log('Part Of NEW ARibus Family');
}

// Practice Exercise
const checkBaggage = function(items){
const baggage = items.toLowerCase();
if(baggage.includes('knife') || baggage.includes('gun')) {
 console.log('You Are Not Allowed On Board')
} else {
    console.log('Welcome Aboard!');
}}
checkBaggage('I Have A Laptop, Some Foof And A Pocket Knife');
checkBaggage('Socks And Camera')
checkBaggage('Got Some Snacks ANd A Gun For Protection')

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/* Video 123 */

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

console.log('a+very+nice+string'.split('+'));
console.log('Jazmine Abdilahi'.split(' '));

const [firstName, lastName] = console.log('Jazmine Abdilahi'.split(' '));

['Miss.', firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
    const names = name.split(' ');

    for(const n of names) {
n[0].toUpperCase() + n.slice(1)
    }
}

capitalizeName('Jessica Ann Smith Davis');
capitalizeName('Jazmine Abdilahi');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jazmine'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard(33485949387755774747));

// Repeat
const message2 = 'Bad Weather... All Departues Delayed...';
console.log(message2.repeat(100));

const planesInLine = function(n) {
    console.log(`there are ${n} planes in line ${'✈️'. repeat(n)}`);
}
planesInLine(5)
planesInLine(3)
planesInLine(12)

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */