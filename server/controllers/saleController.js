const Sale = require('../models/Sale');

exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSale = async (req, res) => {
  const { item, quantity, price } = req.body;
  const newSale = new Sale({ item, quantity, price });

  try {
    await newSale.save();
    res.status(201).json(newSale);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
