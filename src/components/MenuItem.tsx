import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useCartStore, MenuItem as MenuItemType } from '@/store/cartStore';
import { PlusIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

interface MenuItemProps {
  item: MenuItemType;
  showDescription?: boolean;
}

export const MenuItem = ({ item, showDescription = false }: MenuItemProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(item);
    toast.success(`Added ${item.name} to cart`);
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="font-heading text-lg">{item.name}</CardTitle>
          <span className="text-lg font-body font-bold text-secondary">
            £{item.price.toFixed(2)}
          </span>
        </div>
        {showDescription && item.description && (
          <CardDescription className="font-body">
            {item.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold group"
        >
          <PlusIcon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};