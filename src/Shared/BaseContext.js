import React, { useState } from "react";

export const BaseContext = React.createContext();

export const BaseProvider = ({ children }) => {
	const [accepted, setAccepted] = useState(false);
	return <BaseContext.Provider value={[accepted, setAccepted]}>{children}</BaseContext.Provider>;
};
