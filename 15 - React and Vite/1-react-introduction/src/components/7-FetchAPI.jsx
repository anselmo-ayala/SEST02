import { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This side effect will only run the first time you mount this component.
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const deserializedData = await response.json();
          setData(deserializedData);
          setLoading(false);
        } else {
          console.log("API request failed:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome to the product page!</h1>
      {data && (
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Products;
