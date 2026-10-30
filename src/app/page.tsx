import Sidebar from "@/components/sidebar";
import { Menu } from "./widgets/header";
import { Header } from "./widgets/header";
import Portfolio from "@/components/portfolio";
import AboutSection from "@/components/about";
export default function Home() {
  return (
    <div className="relative bg-[#141414] text-white font-sans">
      <div className="p-3 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
        <Sidebar />
        <main className="flex flex-col gap-8">
          <Header>
            <Menu/>
          </Header>
          <Portfolio/>
          <AboutSection/>
        </main>
      </div>
    </div>
  );
}