const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // 5000 (5000 doest work in my device)

app.use(express.json());

//implement the CORS config
const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:3001', // my frondend port is 3001
    credentials: true // if you use cookies or authentication
  }));

//products array
let products = [
    { id: 1, name: 'Product 1', description: 'description 1', price: 100, imageUrl: '' },
    { id: 2, name: 'Product 2', description: 'description 2', price: 200, imageUrl: '' },
    { id: 3, name: 'Product 3', description: 'description 3', price: 300, imageUrl: '' },
    { id: 4, name: 'Product 4', description: 'description 4', price: 150, imageUrl: '' },
    { id: 5, name: 'Product 5', description: 'description 5', price: 500, imageUrl: '' },
    { id: 6, name: 'Product 6', description: 'description 6', price: 50, imageUrl: '' },
];

//function to generate a url for getting a random image from picsum
const fetchImageUrl = () => {
    return `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
};

//implement the get api for getting products
app.get('/api/products', (req, res) => {
    const pWithImage = products.map(product => {
        return {
            ...product,
            imageUrl: fetchImageUrl()
        };
    })
    console.log('Updated products with image URLs:', pWithImage);
    res.json(pWithImage);
});

//implement the delete api for deleting a product by Id
app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const found = products.findIndex(p => p.id === id)
    if (found === -1) {
        // To console
        console.error(`Product with id=${id} not found`);
        // To Postman
        return res.status(404).json({ error: `Product with id=${id} not found` });
    }
    products.slice(found, 1);
    res.json({ message: 'Product deleted successfully' });
    console.log('Product', id , 'deleted successfully' );
    console.log('now there are', products.length,'in the product list' );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
