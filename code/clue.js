// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jonathan',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Reverend'
}

const ProfessorPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'the intellectual',
  age: 41,
  image: 'assets/plum.png',
  occupation: 'professor'
}

const MissScarlet = {
  firstName: 'Josephine',
  lastName: 'Scarlet',
  color: 'Crimson',
  description: 'the cunning femme fatale',
  age: 41,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const MrsPeacock = {
  firstName: 'Patricia',
  lastName: 'Peacock',
  color: 'blue',
  description: 'the grande dame and elegant aristocrat',
  age: 70,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const ColonelMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'Mustard',
  description: 'a military man, dignified and dangerous',
  age: 70,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const MrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'White',
  description: 'the loyal housekeeper and a devoted confidant',
  age: 64,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.
const rope = {
  name: 'rope',
  weight: 5,
}
const knife = {
  name: 'knife',
  weight: 4,
}
const Candlestick = {
  name: 'Candlestick',
  weight: 10,
}
const LeadPipe = {
  name: 'Lead Pipe',
  weight: 12,
}
const Poison = {
  name: 'Poison',
  weight: 0,
}
const Axe = {
  name: 'Axe',
  weight: 9,
}
const Bat = {
  name: 'Bat',
  weight: 9,
}
const Trophy = {
  name: 'Trophy',
  weight: 11,
}
const Revolver = {
  name: 'Revolver',
  weight: 8,
}

const suspects = [
  mrGreen,
  ProfessorPlum,
  MissScarlet,
  MrsPeacock,
  ColonelMustard,
  MrsWhite
]  

const weapons = [
  rope,
  knife,
  Candlestick,
  LeadPipe,
  Poison,
  Axe,
  Bat,
  Trophy,
  Revolver
]

const rooms = [
  DiningRoom,
  Conservatory,
  Kitchen,
  Study, 
  Library, 
  BilliardRoom, 
  Lounge, 
  Ballroom, 
  Hall, 
  Spa, 
  LivingRoom, 
  Observatory, 
  Theater, 
  GuestHouse, 
  Patio
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
