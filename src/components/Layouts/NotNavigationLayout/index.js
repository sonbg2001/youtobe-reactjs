import Header from "../components/Header";
import Footer from "../components/Footer";
function NotNavigationLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <div className="container__children--watch" >{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default NotNavigationLayout;
