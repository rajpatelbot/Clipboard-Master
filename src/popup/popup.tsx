import { createRoot } from "react-dom/client";
import Clipboard from "./Clipboard";
import "./popup.css";

const Popup = () => {
  return (
    <div className="p-3">
      <Clipboard />
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup />);
