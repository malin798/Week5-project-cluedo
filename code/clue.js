// Objects
const suspects = [

  {suspect: "Mr Green", 
  firstName: 'Jonathan',
  lastName: 'Green',
  gender: "He",
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Reverend',
  },

 {suspect: "Professor Plum", 
  firstName: 'Peter',
  lastName: 'Plum',
  gender: "He",
  color: 'purple',
  description: 'the intellectual',
  age: 41,
  image: 'assets/plum.png',
  occupation: 'professor',
  },

 {suspect : "Miss Scarlet", 
  firstName: 'Josephine',
  lastName: 'Scarlet',
  gender: "She",
  color: 'Crimson',
  description: 'the cunning femme fatale',
  age: 41,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  },

 {suspect: "Mrs Peacock",
  firstName: 'Patricia',
  lastName: 'Peacock',
  gender: "She",
  color: 'blue',
  description: 'the grande dame and elegant aristocrat',
  age: 70,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  },

 {suspect: "Colonel Mustard", 
  firstName: 'Michael',
  lastName: 'Mustard',
  gender: "He",
  color: '#e1ad01',
  description: 'a military man, dignified and dangerous',
  age: 70,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  },

 {suspect: "Mrs White",
  firstName: 'Blanche',
  lastName: 'White',
  gender: "She",
  color: 'White',
  description: 'the loyal housekeeper and a devoted confidant',
  age: 64,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  }
]

const weapons = [
{ name: 'Rope',
  weight: "1 kg",
  color: "brown",
  image: "https://images.unsplash.com/photo-1518536674115-4f83c88ebf50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=621&q=80",
},
{ name: 'Knife',
  weight: "0.4 kg",
  color: "lightgray",
  image: "https://images.unsplash.com/photo-1579232308946-36e64f99016b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Candlestick',
  weight: "3 kg",
  color: "gold",
  image: "https://images.unsplash.com/photo-1543251698-9ef753c40fbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Lead Pipe',
  weight: "4 kg",
  color: "grey",
  image: "https://images.unsplash.com/photo-1578319957886-2fbf15574e96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Poison',
  weight: "0 kg",
  color: "purple",
  image: "https://images.unsplash.com/photo-1508018151423-1b1e201c4203?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Axe',
  weight: "3 kg",
  color: "pink",
  image: "https://images.unsplash.com/photo-1580646417278-0305e03365ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=627&q=80",
},
{ name: 'Wrench',
  weight: "1 kg",
  color: "green",
  image: "https://images.unsplash.com/photo-1549899615-ef2899a8c02d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Trophy',
  weight: "2kg",
  color: "plum",
  image: "https://images.unsplash.com/photo-1579913741676-b000995a823f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Revolver',
  weight: "0.5 kg",
  color: "orange",
  image: "https://images.pexels.com/photos/53351/firearm-handgun-revolver-gun-53351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
}]

const rooms = [
  {name: "The Dining Room",
  location: "East Wing",
  color: "coral",
  image: "https://images.pexels.com/photos/2504911/pexels-photo-2504911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {name: "The Conservatory",
  location: "West/South Wing",
  color: "orchid",
  image: "https://images.unsplash.com/photo-1524070960420-47602852d30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
  },
  {name: "The Kitchen",
  location: "South/East Wing",
  color: "mediumslateblue",
  image: "https://images.pexels.com/photos/2972365/pexels-photo-2972365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {name: "The Study",
  location: "North/West Wing",
  color: "salmon",
  image: "https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }, 
  {name: "The Library",
  location: "West Wing",
  color: "sienna",
  image: "https://images.unsplash.com/photo-1541123039768-be0b59340e7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  }, 
  {name: "The Billiard Room",
  location: "West/South Wing",
  color: "tomato",
  image: "https://images.unsplash.com/photo-1577579242319-bbd5b7159055?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2141&q=80"
  }, 
]

//Variables
const randomSelector = array => {
 return array[Math.floor(Math.random() * array.length)]
}

let killer;
let room;
let weapon;

//Functions
const showKiller = () => {

  const killerImage = document.getElementById("killer-image");

  killerImage.src = killer.image;
  killerImage.classList.add("reveal-styling");

  document.getElementById("killerCard").classList.add("flip-cards");
  document.getElementById('killerCardBack').style.background = killer.color;
  document.getElementById("killerAge").innerHTML = `Age: ${killer.age}`;
  document.getElementById("killerOccupation").innerHTML = `Occupation: ${killer.occupation}`;
  document.getElementById('killerName').innerHTML = `${killer.firstName} ${killer.lastName}`;

  if (killer.suspect === "Mrs White") {
    document.getElementById("killerCardBack").classList.add("bordered");
  }

  else {
    document.getElementById("killerCardBack").classList.remove("bordered");
  }
}

const showWeapon = () => {
  const weaponImage = document.getElementById("weaponImage");

  weaponImage.src = weapon.image;
  weaponImage.classList.add("reveal-styling");

  document.getElementById("weaponCard").classList.add("flip-cards");
  document.getElementById("weaponCardBack").style.background = weapon.color;
  document.getElementById("weaponWeight").innerHTML = `Weight: ${weapon.weight}`;
  document.getElementById('weaponName').innerHTML = `${weapon.name}`;
}

const showRoom = () => {
  const roomImage = document.getElementById("roomImage");

  roomImage.src = room.image;
  roomImage.classList.add("reveal-styling");
  
  document.getElementById("roomCard").classList.add("flip-cards");
  document.getElementById("roomCardBack").style.background = room.color;
  document.getElementById("roomLocation").innerHTML = `Location: ${room.location}`;
  document.getElementById('roomName').innerHTML = `${room.name}`;
}

const revealMystery = () => {
  mysteryRevealText = document.getElementById("mysteryReveal");

  if (killer === undefined || weapon === undefined || room === undefined) {
    mysteryRevealText.innerHTML = `Please pick your cards to reveal the mystery!`
  }

  else {
    confetti.start(3000)

    document.getElementById("revealCrime").innerHTML = `MYSTERY SOLVED &#127881;`;
    mysteryRevealText.classList.add("mystery-reveal-box");
    mysteryRevealText.innerHTML = (`Great job on solving the mystery, Detective! I never would have imagined it was 
      ${killer.firstName} ${killer.lastName} (also known as ${killer.suspect}) who commited the awful crime! 
      ${killer.gender} used the 
      ${weapon.name.toLowerCase()} to murder the victim in the ${room.name.toLowerCase()}!`)
  }
}

//Invoke functions
document.getElementById("revealCrime").addEventListener("click", function() { 
  revealMystery(); 
})

document.getElementById("killerCard").addEventListener("click", function () {
  killer = randomSelector(suspects);
  showKiller();
}) 

document.getElementById("roomCard").addEventListener("click", function() {
  room = randomSelector(rooms);
  showRoom();
})

document.getElementById("weaponCard").addEventListener("click", function() {
  weapon = randomSelector(weapons);
  showWeapon();
})


