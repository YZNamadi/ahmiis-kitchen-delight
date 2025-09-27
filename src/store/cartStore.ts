import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  deliveryAddress: string;
  preferredDeliveryDay: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  customerDetails: CustomerDetails;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  setCustomerDetails: (details: CustomerDetails) => void;
  generateWhatsAppMessage: () => string;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      customerDetails: {
        name: '',
        deliveryAddress: '',
        preferredDeliveryDay: 'Thursday',
      },
      
      addItem: (item) => {
        const items = get().items;
        const existingItem = items.find((i) => i.id === item.id);
        
        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({
            items: [...items, { ...item, quantity: 1 }],
          });
        }
      },
      
      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      openCart: () => set({ isOpen: true }),
      
      closeCart: () => set({ isOpen: false }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      setCustomerDetails: (details) => {
        set({ customerDetails: details });
      },
      
      generateWhatsAppMessage: () => {
        const items = get().items;
        const total = get().getTotalPrice();
        const customer = get().customerDetails;
        
        let message = "Hello! I'd like to place an order from Ahmiis Kitchen:\n\n";
        message += "ORDER SUMMARY:\n";
        
        items.forEach((item) => {
          message += `• ${item.name} x${item.quantity} - £${(item.price * item.quantity).toFixed(2)}\n`;
        });
        
        message += `\nTotal: £${total.toFixed(2)}\n\n`;
        message += `CUSTOMER DETAILS:\n`;
        message += `Name: ${customer.name}\n`;
        message += `Delivery Address: ${customer.deliveryAddress}\n`;
        message += `Preferred Delivery Day: ${customer.preferredDeliveryDay}\n\n`;
        message += "Thank you!";
        
        return encodeURIComponent(message);
      },
    }),
    {
      name: 'ahmiis-cart',
    }
  )
);