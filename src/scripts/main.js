// Imports go first
import { makePottery } from "./potteryWheel.js"
import { firePottery } from "./kiln.js"
import { toSellOrNotToSell } from "./potteryCatalog.js"
import { potteryList } from "./potteryList.js"
// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, 4)
console.log(mug)
let bowl = makePottery("Bowl", 4.1, 4.1)
console.log(bowl)
let plate = makePottery("Plate", 4.1, 1)
console.log(plate)
let vase = makePottery("Vase", 6.2, 6.2 )
console.log(vase)
let jar = makePottery("Jar", 3, 3)
console.log(jar)


// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug, 2200)
console.log(fireMug)
let fireBowl = firePottery(bowl, 2200)
console.log(fireBowl)
let firePlate = firePottery(plate, 2262)
console.log(firePlate)
let fireVase = firePottery(vase, 2200)
console.log(fireVase)
let fireJar = firePottery(jar, 2200)
console.log(fireJar)



// Determine which ones should be sold, and their price
let sale1 = toSellOrNotToSell(mug);
console.log(sale1);
let sale2 = toSellOrNotToSell(bowl);
console.log(sale2);
let sale3 = toSellOrNotToSell(plate);
console.log(sale3);
let sale4 = toSellOrNotToSell(vase)
console.log(sale4);
let sale5 = toSellOrNotToSell(jar);
console.log(sale5);


// Invoke the component function that renders the HTML list

const potteryHTML = potteryList()
const potteryContainer = document.getElementById("potteryList")
potteryContainer.innerHTML = potteryHTML