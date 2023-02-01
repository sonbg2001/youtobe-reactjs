import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRotes } from "./routes";
import DefaultLayout from "./components/Layouts/DefaultLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRotes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout || DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
