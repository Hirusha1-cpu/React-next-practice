import { Routes, Route } from "react-router-dom";
import { AllMeetups } from "./pages/AllMeetups";
import { NewMeetup } from "./pages/NewMeetup";
import { Favourites } from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
    <Layout>
    <Routes>
      <Route path="/" element={<AllMeetups />} />
      <Route path="/new-meetup" element={<NewMeetup />} />
      <Route path="/fav" element={<Favourites />} />
    </Routes>

    </Layout>
    </div>

    
  );
}

export default App;

