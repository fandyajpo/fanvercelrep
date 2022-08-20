import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-4 md:px-14 lg:px-80 pt-24 pb-8 h-max">{children}</div>
      <Footer />
    </>
  );
};

export const getLayout = (page) => <Layout>{page}</Layout>;
