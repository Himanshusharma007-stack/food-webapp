import fooditems from '../../db/fooditems.json'

export let getFoodItemByCategory = (categoryid) => {
    return fooditems[categoryid]
}