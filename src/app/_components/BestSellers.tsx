import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { ProductWithRelations } from "@/lib/types/product";
import { getBestSellers } from "@/server/db/products";

async function BestSellers() {
  const bestSellers: ProductWithRelations[] = await getBestSellers();
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
