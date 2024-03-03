import express from 'express';
import ItemService from '../services/item-service';

const router = express.Router();

// search items
router.get('/items', async (req, res) => {
  try {
    const searchTerm = req.query.q || '';
    const itemService = new ItemService();
    const items = await itemService.searchItems(searchTerm as string);

    return res.json(items);
  } catch {
    return res.status(500).send();
  }
});

// get item by id
router.get('/items/:id', async (req, res) => {
  try {
    const itemService = new ItemService();
    const items = await itemService.getItemById(req.params.id as string);

    return res.json(items);
  } catch {
    return res.status(500).send();
  }
});

export default router;
