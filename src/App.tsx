import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Background from "./components/Background";
import { HomeLayout } from "./components/HomeLayout";
import Home from "./pages/Home/Home";
import ShowDetails from "./pages/ShowDetails/ShowDetails";
import { Favourites } from "./pages/Favourites/Favourites";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

const queryClient = new QueryClient();

function App() {
  const [loadBackground, setLoadBackground] = useState(false);

  //Load Background after the app has mounted
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoadBackground(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
        <Route path="/podcasts/:id" element={<ShowDetails />} />
      </Routes>
      {loadBackground && <Background />}
      <AudioPlayer />
    </QueryClientProvider>
  );
}

export default App;
