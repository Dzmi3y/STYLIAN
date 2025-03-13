import MainPageBanner from "@/components/MainPageBanner/MainPageBanner";
import SecondaryBanner from "@/components/SecondaryBanner/SecondaryBanner";
import ShortProduct from "@/components/ShortProduct/ShortProduct";

export default function Home() {
  return (
    <div>
      <main>
        <MainPageBanner />
        <SecondaryBanner />
        <ShortProduct />
      </main>
      <footer></footer>
    </div>
  );
}
