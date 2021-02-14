import { SketchPicker } from "react-color";
const { useState, Fragment } = wp.element;

import "../scss/color-picker.scss";

export default function ColorPicker({ keyIndex, keyName, title }) {
  const [color, setColor] = useState({});
  const [visible, setVisible] = useState(false);
  const [brightness, setBrightness] = useState(false);
  // console.log(color[keyName]);

  const checkHexLight = (color) => {
    const hex = color.replace("#", "");
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
    return brightness > 155;
  };

  return (
    <div className="anps-color-pick-wrap">
      <h4>{title}</h4>
      <div
        className="anps-color-pick"
        onClick={() => {
          setVisible(!visible);
        }}
        style={{
          background: Object.keys(color).length > 0 ? color[keyName] : "black",
          color: brightness ? "black" : "white",
        }}
      >
        {color[keyName]}
      </div>
      <i className="fa fa-times"></i>

      {visible ? (
        <SketchPicker
          color={color[keyName]}
          onChange={(value) => {
            setColor({ [keyName]: value.hex });
          }}
          onChangeComplete={(value) => {
            const bright = checkHexLight(value.hex);
            setBrightness(bright);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
