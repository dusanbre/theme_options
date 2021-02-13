const { useState } = wp.element;
import ColorPicker from "../components/ColorPicker";

export default function ThemeColor() {
  const [color, setColor] = useState();
  return (
    <div className="admin-modal">
      <div className="admin-modal__title"></div>
      <div className="admin-modal__content">
        <ColorPicker keyName={"colortheme"} />
      </div>
    </div>
  );
}
