import https from 'https';

export default class ItemService {
  getCategoryById(id: string) {
    return new Promise((resolve, reject) => {
      https.get(`https://api.mercadolibre.com/categories/${id}`, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      },
      ).on('error', err => {
        reject(err);
      });
    });
  }

  searchItems(searchTerm: string) {
    return new Promise((resolve, reject) => {
      https.get(`https://api.mercadolibre.com/sites/MLA/search?limit=4&q=${searchTerm}`, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', async () => {
          const parsedData = JSON.parse(data);
          let categories;
          const categoryFilter = parsedData?.available_filters?.find((filter: any) => filter.id === 'category');

          if (!categoryFilter) {
            categories = parsedData
              ?.filters
              ?.find((filter: any) => filter.id === 'category')
              ?.values
              ?.[0]
              ?.path_from_root
              ?.map((c: any) => c.name);
          } else {
            const maxResultCategory = categoryFilter.values.reduce(
              (max: any, current: any) => max.results > current.results ? max : current,
            );
            const category: any = await this.getCategoryById(maxResultCategory.id);
            categories = category?.path_from_root?.map((c: any) => c.name);
          }

          resolve({
            author: {
              name: process.env.AUTHOR_FIRSTNAME || 'John',
              lastname: process.env.AUTHOR_LASTNAME || 'Doe',
            },
            categories: categories || [],
            items: parsedData?.results?.map((item: any) => {
              const priceParts = item.price.toString().split('.');
              const amount = parseInt(priceParts[0]);
              const decimals = priceParts.length > 1 ? parseInt(priceParts[1].padEnd(2, '0')) : 0;

              return {
                id: item.id,
                title: item.title,
                price: {
                  currency: item.currency_id,
                  amount,
                  decimals,
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
              };
            }) || [],
          });
        });
      }).on('error', err => {
        reject(err);
      });
    });
  }

  getItemDescriptionById(id: string) {
    return new Promise((resolve, reject) => {
      https.get(`https://api.mercadolibre.com/items/${id}/description`, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      },
      ).on('error', err => {
        reject(err);
      });
    });
  }

  getItemById(id: string) {
    return new Promise((resolve, reject) => {
      https.get(`https://api.mercadolibre.com/items/${id}`, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', async () => {
          const parsedData = JSON.parse(data);
          const descriptionRes: any = await this.getItemDescriptionById(id);
          const category: any = await this.getCategoryById(parsedData.category_id);
          const priceParts = parsedData.price.toString().split('.');
          const amount = parseInt(priceParts[0]);
          const decimals = priceParts.length > 1 ? parseInt(priceParts[1].padEnd(2, '0')) : 0;

          resolve({
            author: {
              name: process.env.AUTHOR_FIRSTNAME || 'John',
              lastname: process.env.AUTHOR_LASTNAME || 'Doe',
            },
            item: {
              id: parsedData.id,
              title: parsedData.title,
              price: {
                currency: parsedData.currency_id,
                amount,
                decimals,
              },
              picture: parsedData.pictures?.[0]?.secure_url || parsedData.thumbnail,
              condition: parsedData.condition,
              free_shipping: parsedData.shipping.free_shipping,
              sold_quantity: parsedData.sold_quantity,
              description: descriptionRes.plain_text || '',
            },
            categories: category?.path_from_root?.map((c: any) => c.name) || [],
          });
        });
      }).on('error', err => {
        reject(err);
      });
    });
  }
}
