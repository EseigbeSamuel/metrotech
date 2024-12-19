import { CartProvider } from "./context/cartContext";
import Route from "./routes/route";

function App() {
  return (
    <CartProvider>
      <Route />
    </CartProvider>
  );
}

export default App;
