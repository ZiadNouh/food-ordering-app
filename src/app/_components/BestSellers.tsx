import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { db } from "@/lib/prisma";
import { ProductWithRelations } from "@/lib/types/product";

async function BestSellers() {
  const bestSellers: ProductWithRelations[] = await db.product.findMany({
    orderBy: { order: "desc" },
    include: {
      size: true,
      extra: true,
    },
  });
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading subTitle={"checkOut"} title={"OurBestSellers"} />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
}

export default BestSellers;
