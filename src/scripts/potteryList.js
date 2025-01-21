import { usePottery } from "./potteryCatalog.js"

export const potteryList = () => {
let pots = usePottery();
let potteryHTML = ""
for (const pot of pots) {
    potteryHTML += `
    <section class="pottery" id="pottery --1">
        <h2 class="pottery__shape">${pot.shape}</h2>
        <div class="pottery__properties">
        Item weighs ${pot.weight} grams and is ${pot.height} cm in height
        </div>
        <div class="pottery__price">Price is $${pot.price}</div>
    </section>
    `
}
return potteryHTML
}