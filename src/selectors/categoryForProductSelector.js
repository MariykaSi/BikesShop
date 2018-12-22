export default function categoryForProductSelector(product, categories) {
  return categories.find(category => category.id === product.categoryId);
}
