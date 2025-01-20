// Imports go first
import { makePottery } from "./potteryWheel.js"
import { firePottery } from "./kiln.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, 4)
console.log(mug)
let bowl = makePottery("Bowl", 4.1, 4.1)
console.log(bowl)
let plate = makePottery("Plate", 4.1, 1)
console.log(plate)
let vase = makePottery("Vase", 4.1, 6.2 )
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


// Invoke the component function that renders the HTML list

