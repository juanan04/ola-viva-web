import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/merch/CartDrawer";

export default function MerchLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
