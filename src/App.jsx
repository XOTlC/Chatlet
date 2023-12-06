import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

import { SettingsProvider } from "@stores/settings";

import Background from "@components/Background";
import Navbar from "@components/Navbar";

import pages from "@pages";

export default function App() {
    return (
        <ErrorBoundary fallback="/">
            <SettingsProvider>
                <Background />

                <Routes>
                    <Route path="/" element={<><Navbar /><pages.Landing /></>} />
                    <Route path="/settings" element={<><Navbar /><pages.Settings /></>} />
                </Routes>
            </SettingsProvider>
        </ErrorBoundary>
    )
}