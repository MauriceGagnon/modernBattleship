import ReactDOM from "react-dom";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./pages/components/Navbar.js";

export default function App() {
    return <Navbar />;
}

ReactDOM.render(
    // <React.StrictMode>
    <App />,
    // </React.StrictMode>,
    document.getElementById("root")
);
