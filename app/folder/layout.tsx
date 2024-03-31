import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function FolderLayout({
  children,
  modal,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
      {modal}
    </>
  );
}
