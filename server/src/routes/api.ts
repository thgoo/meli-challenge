import express from 'express';

const router = express.Router();

// search items
router.get('/items', (req, res) => {
  res.json({
    author: {
      name: 'John',
      lastname: 'Doe',
    },
    categories: ['Sandalias y Ojotas', 'Calzado', 'Ropa y Accesorios'],
    items: [
      {
        'id': 'MLA123',
        'title': 'Ojotas Havaianas Color Brasileras Originales. Local En Caba',
        'price': {
          'currency': 'ARS',
          'amount': 797905,
          'decimals': 2,
        },
        picture: 'https://via.placeholder.com/150',
        'condition': 'new',
        'free_shipping': false
      },
    ]
  });
});

// get item by id
router.get('/items/:id', (req, res) => {
  res.json({
    author: {
      name: '',
      lastname: ''
    },
    item: {
      id: '',
      title: '',
      price: {
        currency: '', amount: 0, decimals: 0,
      },
      picture: '',
      condition: '',
      free_shipping: false,
      sold_quantity: 0,
      description: ''
    }
  });
});

export default router;
