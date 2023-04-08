
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import ContextGlobal from "./Components/utils/global.context";
import { useState } from "react";
import Layout from "./Components/Layout";


export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};

function App() {

  const [theme, setTheme] = useState(themes.light);
  
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
      <div className="App">
        <ContextGlobal.Provider value={{theme, handleChangeTheme}}>
          <Layout>
            <Navbar/>
            <Outlet/>
            <Footer/>
          </Layout>
        </ContextGlobal.Provider>
      </div>
  );
}

export default App;
