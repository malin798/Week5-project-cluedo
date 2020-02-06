const suspects = [

  {Suspect: "mrGreen", 
  firstName: 'Jonathan',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Reverend',
  },

 {suspect: "ProfessorPlum", 
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'the intellectual',
  age: 41,
  image: 'assets/plum.png',
  occupation: 'professor',
  },

 {suspect : "MissScarlet", 
  firstName: 'Josephine',
  lastName: 'Scarlet',
  color: 'Crimson',
  description: 'the cunning femme fatale',
  age: 41,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  },

 {suspect: "MrsPeacock",
  firstName: 'Patricia',
  lastName: 'Peacock',
  color: 'blue',
  description: 'the grande dame and elegant aristocrat',
  age: 70,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  },

 {suspect: "ColonelMustard", 
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'Mustard',
  description: 'a military man, dignified and dangerous',
  age: 70,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  },

 {suspect: "MrsWhite",
  firstName: 'Blanche',
  lastName: 'White',
  color: 'White',
  description: 'the loyal housekeeper and a devoted confidant',
  age: 64,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  }
]
console.log(suspects);
console.log(suspects[0]);

const weapons = [
{name: 'rope',
  weight: 5,
},
{name: 'knife',
  weight: 4,
},
{name: 'Candlestick',
  weight: 10,
},
{name: 'Lead Pipe',
  weight: 12,
},
{name: 'Poison',
  weight: 0,
},
{name: 'Axe',
  weight: 9,
},
{name: 'Bat',
  weight: 9,
},
{name: 'Trophy',
  weight: 11,
},
{name: 'Revolver',
  weight: 8,
}]

console.log(weapons);

const rooms = [
  {name: "DiningRoom"},
  {name: "Conservatory"},
  {name: "Kitchen"},
  {name: "Study"}, 
  {name: "Library"}, 
  {name: "BilliardRoom"}, 
  {name: "Lounge"}, 
  {name: "Ballroom"}, 
  {name: "Hall"}, 
  {name: "Spa"}, 
  {name: "LivingRoom"}, 
  {name: "Observatory"}, 
  {name: "Theater"}, 
  {name: "GuestHouse"}, 
  {name: "Patio"},
]

console.log(rooms);
console.log(rooms[14]);


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
// const randomSelector = array => {
//   return array[Math.floor(Math.random() * array.length)]
// }

// const mysteryObject = [
// // This will randomly select a killer, weapon,room 
//   mystery.killer = randomSelector(suspects),
//   mystery.weapon = randomSelector(weapons),
//   mystery.room = randomSelector(rooms),
// ]

// // This function will be invoked when you click on the killer card.
// // This will change the background color of the card 
// const pickKiller = () => {
//   document.getElementById('killerCard').style.background = mystery.killer.color
//   document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
// }

// const pickWeapon = () => {
//   document.getElementById('weaponName').innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight}`
// }

// const pickRoom = () => {
//   document.getElementById('roomName').innerHTML = `${mystery.room.name}`
// }

// // STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// // 'The murder was committed by Jacob Green, in the living room with a rope.'



// document.getElementById("revealCrime").onclick = revealMystery() 

// const revealMystery = () => {
//   pickKiller()
//   pickWeapon()
//   pickRoom()

//   document.getElementById("mystery").innerHTML = (`The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} ${mystery.room.name}`)
// }
