import { Routes, Route } from "react-router-dom";
import AllEventsPage from "./pages/AllEvents";
import NewEventsPage from "./pages/NewEvent";
import FavoriteEventsPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      
      {/* <MainNavigation /> */}
    <Routes>
    <Route path="/" element={<AllEventsPage />} />
    <Route path="/new-event" element={<NewEventsPage />} />
    <Route path="/fv" element={<FavoriteEventsPage />} />
    </Routes>

    </Layout>
  );
}

export default App;
