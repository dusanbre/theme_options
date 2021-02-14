const { useState } = wp.element;
import ColorPicker from "../components/ColorPicker";

export default function ThemeColor() {
  const [color, setColor] = useState();
  return (
    <div className="admin-modal">
      <h3 className="admin-modal__title">
        <i class="fa fa-tint"></i>Main Theme Color
      </h3>
      <div className="admin-modal__content">
        <ColorPicker keyName="colortheme" title="Text Color" />
        <ColorPicker keyName="colortheme" title="Content Color" />
      </div>
    </div>
  );
}
