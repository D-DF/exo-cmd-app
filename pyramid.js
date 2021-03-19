const nbElement = process.argv[2];
const number    = Number(nbElement);
const string    = process.argv[3];
const reverse   = process.argv[4];

if(isNaN(number)) {
  console.log(`Error: ${number} is not a number.`);
  process.exit(1);
}

const showStars = (number, str) => {
  for (let i = 1; i <= number; i += 1) {
    console.log(str.repeat(i));
  }
}

const showStarsReverse = (element, str) => {
    for (let i = element; i >= 0; i -= 1) {
      console.log(str.repeat(i));
  }
}


if(reverse === "-r") {
  showStarsReverse(nbElement, string)
} else {
  showStars(nbElement, string)
}









