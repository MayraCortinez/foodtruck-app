const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const purchaseRoutes = require('./routes/purchaseRoutes');
const saleRoutes = require('./routes/saleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://mayra:1234@cluster0.mhj1gk2.mongodb.net/foodtruck?retryWrites=true&w=majority'



mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());


app.use('/api/purchases', purchaseRoutes);
app.use('/api/sales', saleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
