import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import pages from "@pages";

export default function App() {
    return (
        <ErrorBoundary fallback="/">
            <Routes>
                <Route path="*" element={<pages.Home />} />
            </Routes>
        </ErrorBoundary>
    )
}