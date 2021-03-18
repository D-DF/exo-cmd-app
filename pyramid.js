const nbElement = process.argv[2];
const string    = process.argv[3];
const reverse   = process.argv[4];

const showStars = (nbElement, str) => {
    for (let i = 1; i <= nbElement; i += 1) {
      console.log(str.repeat(i));
    }

    if(nbElement !== Number) {
        console.log(`Error: ${nbElement} is not a number.`);
        process.exit(1);
    }
  }

showStars(nbElement, string);






