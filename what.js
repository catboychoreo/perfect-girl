let nounString = "afterbirth, dishwasher, heartbeat, saltwater, aftermath, doorbell, highway, saucepan, aircraft, downfall, homework, sawdust, airfield, downpour, honeymoon, screenplay, airmail, drawback, horsepower, screwdriver, seesaw, rocking chair, bus stop, pet llama, Richard Nixon, baby salon, penis, dick, Dirk, Homestuck, Peter, brain, Brian, water supply, loobarp, cat, dog, hair, face, light, lamp, music, postcard, poster, sunflower, pizza, phone, TikTok, bleach, marker, pencil, pen, fursuit, strap-on, forehead, FRC team 456, Spongebob, FRC team 9153";
let noun = nounString.split(",");
let randomNoun = noun[Math.floor(Math.random() * noun.length)];
let randomNoun2 = noun[Math.floor(Math.random() * noun.length)];
let randomNoun3 = noun[Math.floor(Math.random() * noun.length)];

let verbsString = "jumps, flies, giggles, cries, bounces, eats, tickles, bites, drinks, washes, watches, films, smirks, runs, falls, sleeps, showers, spins, sits, listens, talks, codes, barks, meows, whispers, unravels, spanks, squeaks, smells, scares, rides, Strides, Stewies, pisses, gleebles, dances, hides, interrupts, games, stalks";
let verbs = verbsString.split(",");
let randomVerbs = verbs[Math.floor(Math.random() * verbs.length)];
let randomVerbs2 = verbs[Math.floor(Math.random() * verbs.length)];
let randomVerbs3 = verbs[Math.floor(Math.random() * verbs.length)];

let verbString = "moan, cum, die, cry, pass out, sleep, yell, disappear, cream, squirt, pee, squeal, bite your tongue, knit something beautiful, see the light, wiggle, pop, jump, freeze up, Lois, get stuck in your home, drink pee unknowingly, schmurgle, block her in fear, post an Instagram note, fly off the handle";
let verb = verbString.split(",");
let randomVerb = verb[Math.floor(Math.random() * verb.length)];
let randomVerb2 = verb[Math.floor(Math.random() * verb.length)];
let randomVerb3 = verb[Math.floor(Math.random() * verb.length)];

let perfectText = `Perfect girl but she ${randomVerbs} on your ${randomNoun} til you ${randomVerb}`;
let perfectText2 = `Perfect girl but she takes your ${randomNoun2} and ${randomVerbs2} with it, making you ${randomVerb2}`;
let perfectText3 = `Perfect girl but she likes to ${randomVerb3} when she ${randomVerbs3} all over you with her big ${randomNoun3}`;

let perfectGirl = document.getElementById("girl");
let perfectGirl2 = document.getElementById("girl2");
let perfectGirl3 = document.getElementById("girl3");
perfectGirl.innerHTML = perfectText;
perfectGirl2.innerHTML = perfectText2;
perfectGirl3.innerHTML = perfectText3;