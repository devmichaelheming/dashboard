class ProductService {
  static getProductsSmall() {
    return fetch("data/products-small.json")
      .then(res => res.json())
      .then(d => d.data);
  }

  static getProducts() {
    return fetch("data/products.json")
      .then(res => res.json())
      .then(d => d.data);
  }

  static getProductsWithOrdersSmall() {
    return fetch("data/products-orders-small.json")
      .then(res => res.json())
      .then(d => d.data);
  }
}

const getProductsSmall = ProductService.getProductsSmall();
const getProducts = ProductService.getProducts();
const getProductsWithOrdersSmall = ProductService.getProductsWithOrdersSmall();

export { getProductsSmall, getProducts, getProductsWithOrdersSmall };
