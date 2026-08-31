import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, removeFromCart, clearCart } from "@/store/slices/cartSlice";
import { CartItem } from "@/types/cart";
import toast from "react-hot-toast";

export function useCart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const add = (item: CartItem) => {
    dispatch(addToCart(item));
    toast.success(`${item.title} добавлен в корзину`);
  };

  const remove = (id: string) => {
    dispatch(removeFromCart(id));
    toast("Товар удалён из корзины");
  };

  const clear = () => dispatch(clearCart());

  return {
    items,
    totalCount,
    totalPrice,
    add,
    remove,
    clear,
  };
}
