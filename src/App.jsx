import { useState } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Header from "./Components/Header";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      <Header setShowCart={setShowCart} />

      {showCart ? (
        <Cart setShowCart={setShowCart} />
      ) : (
        <ProductList />
      )}

    </div>
  );
}

export default App;