import qs from "qs";
const baseUrl = process.env.REACT_APP_API_URL;

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    throw new Error("server error");
  }
}

function readJson(response) {
  return response.json();
}

function fetchJSON(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(readJson);
}

export function loadProducts(queryParams) {
  return fetchJSON(`${baseUrl}/products?${qs.stringify(queryParams)}`);
}
export function loadProduct(id) {
  return fetch(`${baseUrl}/products/${id}`)
    .then(checkStatus)
    .then(readJson);
}

export function loadCategories() {
  return fetchJSON(`${baseUrl}/categories`);
}

export function loadCategory(id) {
  return fetch(`${baseUrl}/categories/${id}`)
    .then(checkStatus)
    .then(readJson);
}
