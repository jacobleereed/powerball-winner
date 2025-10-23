const planetsArr = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const tempartureArr =  ['warm, summer night', 'cool, fall night', 'idillic, spring night', 'brisk, winter night'];
const seeArr = ['big dipper', 'little dipper', 'milky way', 'orion'];

const generateTxt = () => {
    let planetChosen = Math.floor(Math.random() * planetsArr.length);
    let tempartureChosen = Math.floor(Math.random() * tempartureArr.length);
    let seeChosen = Math.floor(Math.random() * seeArr.length);

    return `You're standing outside on a ${tempartureArr[tempartureChosen]}. You look past ${planetsArr[planetChosen]} and admire the beauty of the ${seeArr[seeChosen]}.` ;
}

console.log(generateTxt());
