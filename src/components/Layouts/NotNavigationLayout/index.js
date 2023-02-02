import Header from "../components/Header";
import Footer from "../components/Footer";
function NotNavigationLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <div >{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default NotNavigationLayout;
