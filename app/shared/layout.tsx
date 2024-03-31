import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const SharedLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default SharedLayout;
