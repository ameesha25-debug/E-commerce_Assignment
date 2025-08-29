export async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
  } catch {
    return [{ id:1, title:"Mock Product", price:29.99, description:"Fallback product", image:"https://via.placeholder.com/150", category:"mock" }];
  }
}

export async function fetchProduct(id: string) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await res.json();
  } catch {
    return { id, title:"Mock Product", price:29.99, description:"Fallback product", image:"https://via.placeholder.com/150", category:"mock" };
  }
}
