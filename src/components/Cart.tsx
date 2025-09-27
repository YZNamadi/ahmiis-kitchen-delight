import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useCartStore } from '@/store/cartStore';
import { MinusIcon, PlusIcon, TrashIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

export const Cart = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice,
    generateWhatsAppMessage,
  } = useCartStore();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/447469644339?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
  };

  const handleCopyOrder = async () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const message = decodeURIComponent(generateWhatsAppMessage());
    
    try {
      await navigator.clipboard.writeText(message);
      toast.success('Order copied to clipboard! Paste it into WhatsApp.');
    } catch (error) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = message;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        toast.success('Order copied to clipboard! Paste it into WhatsApp.');
      } catch (err) {
        toast.error('Failed to copy order. Please note down your items manually.');
      }
      
      document.body.removeChild(textArea);
    }
  };

  const total = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-heading">Your Order</SheetTitle>
          <SheetDescription className="font-body">
            Review your items and checkout via WhatsApp
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6">
            {items.length === 0 ? (
              <div className="text-center text-muted-foreground font-body">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-body font-semibold">{item.name}</h3>
                      <p className="font-body text-sm text-muted-foreground">
                        £{item.price.toFixed(2)} each
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <MinusIcon className="h-4 w-4" />
                      </Button>
                      
                      <span className="font-body font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center font-body font-semibold text-lg">
                <span>Total:</span>
                <span className="text-secondary">£{total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <Button 
                  onClick={handleCheckout} 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold"
                >
                  Order via WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={handleCopyOrder}
                  className="w-full font-body"
                >
                  <DocumentDuplicateIcon className="h-4 w-4 mr-2" />
                  Copy Order Details
                </Button>
                
                <Button 
                  variant="ghost" 
                  onClick={clearCart} 
                  className="w-full font-body text-muted-foreground"
                >
                  Clear Cart
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground font-body text-center">
                Orders placed Monday-Wednesday, delivered Thursday-Saturday<br/>
                <span className="text-secondary">Tip:</span> If WhatsApp doesn't open, use "Copy Order Details" and paste into WhatsApp manually
              </p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};