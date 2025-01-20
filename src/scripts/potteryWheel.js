let potteryId = 1

export const makePottery = (shape, weight, height) => {
    const myPottery = {
        id: potteryId,
        shape: shape,
        weight: weight,
        height: height,
    }
    potteryId ++

    return myPottery 
}