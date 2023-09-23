import { createContext, useState } from 'react';


export const SwitchContext = createContext(null);

const SwitchProvider = ({children}) => {
    const [currentView, setCurrentView] = useState("grid");

    const contextVal = {currentView, setCurrentView}

    return (
        <SwitchContext.Provider value={contextVal}>
            {children}
        </SwitchContext.Provider>
    )
}

export default SwitchProvider