import { useEffect, useState } from "react";
import Background from "./components/Background";

function App() {
  const [loadBackground, setLoadBackground] = useState(false);

  useEffect(() => {
    setLoadBackground(true);
  }, []);

  return <>{loadBackground && <Background />}</>;
}

export default App;
