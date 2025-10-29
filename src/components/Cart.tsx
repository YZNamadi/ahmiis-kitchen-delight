import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useCartStore, CustomerDetails } from '@/store/cartStore';
import { MinusIcon, PlusIcon, TrashIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';
import { useState } from 'react';

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
    customerDetails,
    setCustomerDetails,
  } = useCartStore();
  
  const [showCustomerForm, setShowCustomerForm] = useState(!customerDetails.name.trim() || !customerDetails.deliveryAddress.trim());
  
  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails({
      ...customerDetails,
      [field]: value,
    });
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    // Validate customer details
    if (!customerDetails.name.trim() || !customerDetails.deliveryAddress.trim()) {
      setShowCustomerForm(true);
      toast.error('Please provide your name and delivery address');
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
          {/* Scrollable Content: Items + Customer Details */}
          <div className="flex-1 overflow-y-auto py-6 space-y-6">
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

            {/* Customer Details Form inside scroll area */}
            {items.length > 0 && showCustomerForm && (
              <div className="border-t border-border pt-4 space-y-4">
                <h3 className="font-body font-semibold">Customer Details</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="customer-name" className="font-body text-sm">Name *</Label>
                    <Input
                      id="customer-name"
                      placeholder="Enter your full name"
                      value={customerDetails.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="delivery-address" className="font-body text-sm">Delivery Address *</Label>
                    <Input
                      id="delivery-address"
                      placeholder="Enter your full address"
                      value={customerDetails.deliveryAddress}
                      onChange={(e) => handleInputChange('deliveryAddress', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="delivery-day" className="font-body text-sm">Preferred Delivery Day</Label>
                    <Select value={customerDetails.preferredDeliveryDay} onValueChange={(value) => handleInputChange('preferredDeliveryDay', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Thursday">Thursday</SelectItem>
                        <SelectItem value="Friday">Friday</SelectItem>
                        <SelectItem value="Saturday">Saturday</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    onClick={() => setShowCustomerForm(false)}
                    variant="outline"
                    className="w-full font-body"
                    disabled={!customerDetails.name.trim() || !customerDetails.deliveryAddress.trim()}
                  >
                    Continue to Checkout
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Cart Footer (always visible) */}
          {items.length > 0 && !showCustomerForm && (
            <div className="border-t border-border pt-4 space-y-4 bg-background">
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
                  onClick={() => setShowCustomerForm(true)}
                  className="w-full font-body text-muted-foreground"
                >
                  Edit Customer Details
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