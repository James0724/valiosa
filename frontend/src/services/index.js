export const getCartTotal = (cartItems) => {
	var total = 0;
	for (var i = 0; i < cartItems.length; i++) {
		total += parseInt(cartItems[i].quantity) * parseInt(cartItems[i].price);
	}
	return total;
};
