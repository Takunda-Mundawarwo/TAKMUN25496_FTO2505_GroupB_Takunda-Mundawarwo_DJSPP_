import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import { HomeLayout } from "./components/HomeLayout";
import Home from "./pages/Home/Home";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        </Route>
      </Routes>
      {loadBackground && <Background />}
    </QueryClientProvider>
  );
}

export default App;
