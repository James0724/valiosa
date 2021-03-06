const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	shippingInfo: {
		address: {
			type: String,
		},
		city: {
			type: String,
		},
		phoneNo: {
			type: String,
		},
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	orderItems: [
		{
			name: {
				type: String,
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
			image: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
			product: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: 'Product',
			},
		},
	],
	shippingPrice: {
		type: Number,
		required: true,
		default: 0.0,
	},
	totalPrice: {
		type: Number,
		required: true,
		default: 0.0,
	},
	orderStatus: {
		type: String,
		required: true,
		default: 'Processing',
	},
	deliveredAt: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Order', orderSchema);
