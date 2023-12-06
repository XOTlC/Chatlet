import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState(JSON.parse(localStorage.getItem("settings")) || {
        main: {
            server_url: "https://blacket.org"
        }
    });

    useEffect(() => localStorage.setItem("settings", JSON.stringify(settings)), [settings]);

    return <SettingsContext.Provider value={{ settings, setSettings }}>{children}</SettingsContext.Provider>;
}