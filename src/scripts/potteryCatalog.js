const potteryToSell = [];

export const toSellOrNotToSell = (pottery) => {
        if (pottery.cracked === false) {
            if (pottery.weight >= 6) {
                pottery.price = 40
            }
            else if (pottery.weight < 6) {
                pottery.price = 20
            }
        
        potteryToSell.push(pottery)
        }
        return pottery
}

export const usePottery = () => {
    const potteryCopy = [...potteryToSell]
    return potteryCopy
}