import React, { useContext } from "react";
import ContextGlobal from "./utils/global.context";

const Layout = ({ children }) => {

  const context = useContext(ContextGlobal);
  const theme = context.theme;

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      {children}
    </div>
  );
};

export default Layout;
