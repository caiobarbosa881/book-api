import React from "react";

import { UserContextProvider} from "./context";

const GlobalContext: React.FC<any> = ({ children }) => {
    return <UserContextProvider>{ children }</UserContextProvider>
};

export default GlobalContext;