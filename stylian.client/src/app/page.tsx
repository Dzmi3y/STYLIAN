import MainPageBanner from "@/components/MainPageBanner/MainPageBanner";
import SecondaryBanner from "@/components/SecondaryBanner/SecondaryBanner";

export default function Home() {
  return (
    <div>
      <main>
        <MainPageBanner />
        <SecondaryBanner />
      </main>
      <footer></footer>
    </div>
  );
}
