import { useEffect, useState } from "react";
import Background from "./components/Background";

function App() {
  const [loadBackground, setLoadBackground] = useState(false);

  //LoadBackground after the app has mounted
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoadBackground(true);
  }, []);

  return <>{loadBackground && <Background />}</>;
}

export default App;
