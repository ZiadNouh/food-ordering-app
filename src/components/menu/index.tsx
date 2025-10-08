import MenuItem from "@/components/menu/MenuItem";
import { ProductWithRelations } from "@/lib/types";
import { Product } from "@prisma/client";

async function Menu({ items }: { items: ProductWithRelations[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item: ProductWithRelations) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Menu;
