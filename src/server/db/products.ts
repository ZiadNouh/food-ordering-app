import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getBestSellers = cache(
  () => {
    const bestSellers = db.product.findMany({
      orderBy: { order: "desc" },
      include: {
        size: true,
        extra: true,
      },
    });
    return bestSellers;
  },
  ["best-sellers"],
  { revalidate: 3600 }
);
