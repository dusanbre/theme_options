import { SketchPicker } from "react-color";
const { useState, Fragment } = wp.element;

export default function ColorPicker({ keyName }) {
  const [color, setColor] = useState({});
  const [visible, setVisible] = useState(false);
  console.log(color[keyName]);
  return (
    <Fragment>
      <div
        className="anps-color-pick"
        onClick={() => {
          setVisible(!visible);
        }}
        style={{
          width: 70,
          height: 30,
          background: Object.keys(color).length > 0 ? color[keyName] : "black",
          color: "white",
        }}
      >
        {color.keyName}
      </div>
      {visible ? (
        <SketchPicker
          color={color[keyName]}
          onChange={(value) => {
            setColor({ [keyName]: value.hex });
          }}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
}
