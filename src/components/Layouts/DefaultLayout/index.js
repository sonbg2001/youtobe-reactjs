import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container inner">
        <Navigation />
        <div className="container__children" >{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
