import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { ProductWithRelations } from "@/types/product";
import { getBestSellers } from "@/server/db/products";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

async function BestSellers() {
  const bestSellers: ProductWithRelations[] = await getBestSellers(3);
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { bestSeller } = home;
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading
            subTitle={bestSeller.checkOut}
            title={bestSeller.OurBestSellers}
          />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
}

export default BestSellers;
