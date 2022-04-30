import { useRef } from "react";
import "../css/switch.css";

export default function Switch({ setDarkmode, checked, setChecked }) {
  const ref = useRef(null);
  function handleChange() {
    setChecked(ref.current.checked);
    setDarkmode(ref.current.checked);
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Modo Oscuro</p>
      <input
        ref={ref}
        onChange={handleChange}
        type="checkbox"
        checked={checked}
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}
