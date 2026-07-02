import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const SIGNATURE = `%cWK%c
builds agents that build things.
curious? source: github.com/WeiKuoWei/its-wei
say hi: ck3294@nyu.edu`;

const App = () => {
  useEffect(() => {
    console.log(
      SIGNATURE,
      "font-family:monospace;font-size:2rem;font-weight:bold;color:#ff4d00",
      "font-family:monospace;color:#91908a",
    );
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <a href="#main" className="skip-link">
        skip to content
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
