import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/Hero";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto flex-5 py-50">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;