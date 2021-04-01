// Q1
const Q1_message = "I can walk in the park all day!";
console.log('Q1: ' + 'park');

// Q2
const Q2_message = "Hello World".toUpperCase();
console.log('Q2: ' + Q2_message);

// Q3
const Q3_message = "Hello Earthling".toLowerCase();
console.log('Q2: ' + Q3_message);

// Q4
const Q4_message = "JavaScript";
console.log('Q4: ' + Q4_message.slice(3,6));

// Q5
const Q5_message = "nice shoes";
console.log('Q5: ' + (Q5_message.includes('l') || Q5_message.includes('n')));

// Q6
const Q6 = "Bananas";
const Q6_message = Q6[0] + Q6 + Q6[0];
console.log('Q6: ' + Q6_message);

// Q7
const Q7 = "Bananas";
const Q7_message = Q7.slice(0,3) + Q7 + Q7.slice(0,3);
console.log('Q7: ' + Q7_message);

// Q8
const Q8 = "BoogieWoogie";
const Q8_message = Q8[Q8.length-1] + Q8.slice(1,Q8.length-1) + Q8[0];
console.log('Q8: ' + Q8_message);

// Q9
const person = {
    name: "Gonzo",
    age: 25,
    sex: 'male',
}

console.log('Q9: ' + `${person.name} is a ${person.age} years old ${person.sex} artist.`)

// Q10
const Q10 = "the quick brown fox";
const Q10_message = Q10[0].toUpperCase() + Q10.slice(1);
console.log('Q10: ' + Q10_message);






