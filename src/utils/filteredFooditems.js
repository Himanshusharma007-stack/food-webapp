export const filterFoodItems = (foodItems, cartArr) => {
  if (foodItems.length) {
    let arr = [];
    for (let i = 0; i < foodItems.length; i++) {
      const element = foodItems[i];
      let cartItemWithSameid = cartArr?.find(
        (cartFooditem) => cartFooditem?.id === element?.id
      );
      if (cartItemWithSameid) {
        arr.push(cartItemWithSameid);
      } else {
        const { count, ...newElement } = element;
        arr.push(newElement);
      }
    }
    return arr;
  }
  return [];
};
