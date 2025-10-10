import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getBestSellers = cache(
  (limit?: number) => {
    const bestSellers = db.product.findMany({
      where: { orders: { some: {} } },
      orderBy: { orders: { _count: "desc" } },
      include: {
        sizes: true,
        extras: true,
      },
      take: limit,
    });
    return bestSellers;
  },
  ["best-sellers"],
  { revalidate: 3600 }
);

export const getProductsByCategory = cache(
  () => {
    const categories = db.category.findMany({
      include: {
        products: {
          include: {
            sizes: true,
            extras: true,
          },
        },
      },
    });
    return categories;
  },
  ["products-by-category"],
  { revalidate: 3600 }
);
