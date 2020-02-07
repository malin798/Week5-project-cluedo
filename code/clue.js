const suspects = [

  {Suspect: "Mr Green", 
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
  color: 'Mustard',
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
  image: "https://images.unsplash.com/photo-1518536674115-4f83c88ebf50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=621&q=80",
},
{ name: 'Knife',
weight: "0.4 kg",
  image: "https://images.unsplash.com/photo-1579232308946-36e64f99016b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Candlestick',
  weight: "3 kg",
  image: "https://images.unsplash.com/photo-1543251698-9ef753c40fbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Lead Pipe',
  weight: "4 kg",
  image: "https://images.unsplash.com/photo-1578319957886-2fbf15574e96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Poison',
  weight: "0 kg",
  image: "https://images.unsplash.com/photo-1508018151423-1b1e201c4203?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Axe',
  weight: "3 kg",
  image: "https://images.unsplash.com/photo-1580646417278-0305e03365ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=627&q=80",
},
{ name: 'Wrench',
  weight: "1 kg",
  image: "https://images.unsplash.com/photo-1549899615-ef2899a8c02d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Trophy',
  weight: "2kg",
  image: "https://images.unsplash.com/photo-1579913741676-b000995a823f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
},
{ name: 'Revolver',
  weight: "0.5 kg",
  image: "https://images.pexels.com/photos/53351/firearm-handgun-revolver-gun-53351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
}]

const rooms = [
  {name: "The Dining Room",
  location: "East Wing",
  image: "https://images.pexels.com/photos/2504911/pexels-photo-2504911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {name: "The Conservatory",
  location: "West/South Wing",
  image: "https://images.unsplash.com/photo-1524070960420-47602852d30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
  },
  {name: "The Kitchen",
  location: "South/East Wing",
  image: "https://images.pexels.com/photos/2972365/pexels-photo-2972365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {name: "The Study",
  location: "North/West Wing",
  image: "https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }, 
  {name: "The Library",
  location: "West Wing",
  image: "https://images.unsplash.com/photo-1541123039768-be0b59340e7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  }, 
  {name: "The Billiard Room",
  location: "West/South Wing",
  image: "https://images.unsplash.com/photo-1577579242319-bbd5b7159055?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2141&q=80"
  }, 
]

const randomSelector = array => {
 return array[Math.floor(Math.random() * array.length)]
}

const mysteryObject = [
  mystery.killer = randomSelector(suspects),
  mystery.weapon = randomSelector(weapons),
  mystery.room = randomSelector(rooms),
]

const pickKiller = () => {
  document.getElementById("killerImage").src = mystery.killer.image;
  document.getElementById("killerImage").classList.add("reveal-styling");
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById("killerAge").innerHTML = `Age: ${mystery.killer.age}`;
  document.getElementById("killerOccupation").innerHTML = `Occupation: ${mystery.killer.occupation}`;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
}

const pickWeapon = () => {
  document.getElementById("weaponImage").src = mystery.weapon.image;
  document.getElementById("weaponImage").classList.add("reveal-styling");
  document.getElementById("weaponWeight").innerHTML = `Weight: ${mystery.weapon.weight}`;
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
}

const pickRoom = () => {
  document.getElementById("roomImage").src = mystery.room.image;
  document.getElementById("roomImage").classList.add("reveal-styling");
  document.getElementById("roomLocation").innerHTML = `Location: ${mystery.room.location}`;
  document.getElementById('roomName').innerHTML = `${mystery.room.name}`;
}

const revealMystery = () => {
  pickKiller()
  pickWeapon()
  pickRoom()
  document.getElementById("revealCrime").innerHTML = `Mystery solved &#127881;`
  document.getElementById("mystery").innerHTML = 
  (`Great job on solving the mystery, Detective! I never would have imagined it was 
  ${mystery.killer.firstName} ${mystery.killer.lastName} (also known as ${mystery.killer.suspect}) who commited the awful crime! 
  ${mystery.killer.gender} used the 
  ${mystery.weapon.name} to murder the victim in the ${mystery.room.name}!`)
}

document.getElementById("revealCrime").onclick = revealMystery;
document.getElementById("killerCard").onclick = pickKiller;
document.getElementById("weaponCard").onclick = pickWeapon;
document.getElementById("roomCard").onclick = pickRoom;
