import App from "./App";
import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("app")).render(<BrowserRouter><App /></BrowserRouter>);