/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
const LIST_OF_FREELANCERS = createFreelancers();
const FREELANCER_RATE_AVERAGE = getFreelancerRateAverage(LIST_OF_FREELANCERS);

function getValsFromObject(startingObj) {
  let newArray = [];
  for (let item in startingObj) {
    newArray.push(startingObj[item]);
  }
  return newArray;
}

function getRandomRate(startingArray) {
  let vals = startingArray.reduce((acc, cur) => {
    return Math.floor(Math.random() * (cur - acc) + acc);
  });
  return vals;
}

function createFreelancer() {
  const nameValNum = Math.floor(Math.random() * NAMES.length);
  const occupationValNum = Math.floor(Math.random() * OCCUPATIONS.length);
  const rateArray = getValsFromObject(PRICE_RANGE);
  const randomRate = getRandomRate(rateArray);
  const freelancer = {
    name: NAMES[nameValNum],
    occupation: OCCUPATIONS[occupationValNum],
    rate: randomRate,
  };
  return freelancer;
}

function createFreelancers() {
  const freelancerArray = [];
  for (let i = 0; i < NUM_FREELANCERS; i++) {
    const nameValNum = Math.floor(Math.random() * NAMES.length);
    const occupationValNum = Math.floor(Math.random() * OCCUPATIONS.length);
    const rateArray = getValsFromObject(PRICE_RANGE);
    const randomRate = getRandomRate(rateArray);
    const freelancer = {
      name: NAMES[nameValNum],
      occupation: OCCUPATIONS[occupationValNum],
      rate: randomRate,
    };
    freelancerArray.push(freelancer);
  }
  return freelancerArray;
}

function getFreelancerRateAverage(items) {
  let currentRates = items.map((item) => {
    return item.rate;
  });
  let freelancerRateAverage = currentRates.reduce((acc, cur) => {
    return acc + cur;
  });
  return Math.floor(freelancerRateAverage / items.length);
}

//Render!
function renderAverage() {
  const $heading = document.getElementById("heading");
  $heading.innerHTML = `The current average hourly rate: ${FREELANCER_RATE_AVERAGE}`;
}

function renderList() {
  const $app = document.getElementById("app");

  LIST_OF_FREELANCERS.forEach((person) => {
    $app.innerHTML += `<ul>
    <li>Name: ${person.name}</li>
    <li>Occupation: ${person.occupation}</li>
    <li>Rate: ${person.rate}</li>
  </ul>  

  <div><div>`;
  }).join("");
}

renderAverage();
renderList();
