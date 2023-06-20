// The detective agency has been collecting information about the possible identity of Satoshi Nakamoto for several years. 
// All the information collected in a specific year is stored in a separate object. 
// There are three such objects - satoshi2018, satoshi2019, satoshi2020.
// To create a complete profile, you need to combine the data from these three objects into one object called fullProfile.
// Please note that some fields may be repeated in the objects. 
// In such cases, the resulting object should retain the value obtained from the latest year (for example, the value from 2020 takes priority over 2019).
// Write code that creates a complete dossier about the possible person Satoshi Nakamoto. 
// You are not allowed to modify the satoshi2018, satoshi2019, satoshi2020 objects.

const satoshi2020 = {
  name: 'Nick',
  surname: 'Sabo',
  age: 51,
  country: 'Japan',
  birth: '1979-08-21',
  location: {
    lat: 38.869422,
    lng: 139.876632
  }
}

const satoshi2019 = {
  name: 'Dorian',
  surname: 'Nakamoto',
  age: 44,
  hidden: true,
  country: 'USA',
  wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  browser: 'Chrome'
}

const satoshi2018 = {
  name: 'Satoshi',
  surname: 'Nakamoto',
  technology: 'Bitcoin',
  country: 'Japan',
  browser: 'Tor',
  birth: '1975-04-05'
}


const fullProfile = { ...satoshi2018, ...satoshi2019, ...satoshi2020 };

console.log(fullProfile)