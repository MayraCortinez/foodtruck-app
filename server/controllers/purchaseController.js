const Purchase = require('../models/Purchase');

exports.getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPurchase = async (req, res) => {
  const { item, quantity, price } = req.body;
  const newPurchase = new Purchase({ item, quantity, price });

  try {
    const savedPurchase = await newPurchase.save();
    console.log('Saved Purchase:', savedPurchase);
    res.status(201).json(savedPurchase);
  } catch (err) {
    console.error('Error saving purchase:', err);
    res.status(400).json({ message: err.message });
  }
};
