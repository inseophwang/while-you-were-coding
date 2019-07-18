console.log('Challenge #1');

// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.

let i = 1;

while(i <= 20){
    if(i % 3 === 0){
        console.log(i);
    }

    i = i + 1;
}


console.log('Challenge #2');

// Same problem as #1, but no `if`s, `mods`, or `but`s (and no, that last one is
// not a thing). If you did it right, you should run the loop 6 times with 1
// console log per loop. That's called... a clue!

i = 3;

while(i <= 20) {
    console.log(i)
    i = i + 3;
}





console.log('Challenge #3');

// Console out the numbers from 1-20. BACKWARDS.

// (And, optionally, in heels.)

// (That's a reference that only Olds make, and only if they're SUPER CULTURED.)

// (No extra credit will be given for wearing heels during this challenge.)


i = 20;
while(1 <= i) {
 console.log(i)
 i = i - 1;
}


console.log('Challenge #4');

// For the string 'Boy howdy am I good at this!', console out the letters
// individually.

const sentence = 'Boy howdy am I good at this!';
i = 0;
while (i < sentence.length){
    console.log(sentence[i]);
    i = i +1;
}


console.log('Challenge #5');

// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.

const newSentence = 'And getting better every day.';
i = 1;
while (i < newSentence.length){
    console.log(newSentence[i])
    i = i + 3;
}



console.log('Challenge #6');

// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.

const bestSentence = 'Am I the best?'
i = 0;
while (i < bestSentence.length) {
    // bestSentence.toUpperCase()
    console.log(bestSentence.toUpperCase()[i])
    i = i + 1;
}


console.log('Challenge #7');

// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.

const whoaSentence = 'Whoa, I am the best!';

i = 0;

while(i <= whoaSentence.length){
    console.log(whoaSentence.toUpperCase(3)[i])
    i = i + 1;
}


console.log('Challenge #8');


// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.

const deathSentence = 'I am become death, destroyer of worlds.'


i = deathSentence.length - 1;
while(0 <= i){
    console.log(deathSentence[i])
    i = i - 1;
}




console.log('Challenge #9');

const names = 'Colin|Mesuara|Drew|In Seop|Emma|Ben|J|Ryan|Olgy|Mike|Chris|John';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!

i = 0;
console.log('Here today is');
while(i < names.length) {
    if (names[i] === '|'){
        console.log('Here today is')
       
    } else{
        console.log(names[i])
    }
    i = i + 1;
}