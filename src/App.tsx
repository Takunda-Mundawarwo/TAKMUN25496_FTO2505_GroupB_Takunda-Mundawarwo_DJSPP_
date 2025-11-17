import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import { HomeLayout } from "./components/HomeLayout";
import "./App.css";

function App() {
  const [loadBackground, setLoadBackground] = useState(false);

  //Load Background after the app has mounted
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoadBackground(true);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
      {loadBackground && <Background />}
    </>
  );
}

export default App;
