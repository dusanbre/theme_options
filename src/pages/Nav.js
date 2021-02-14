const { useEffect } = wp.element;
import "../scss/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
  faTextHeight,
  faCode,
  faColumns,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Nav({ route, setRoute }) {
  const r = [
    { value: "themeColor", name: "Main Theme Color", icon: faTint },
    { value: "typography", name: "Typography", icon: faTextHeight },
    { value: "buttonMaker", name: "Button Maker", icon: faTextHeight },
    { value: "googleFonts", name: "Google Fonts", icon: faGoogle },
    { value: "customFonts", name: "Custom Fonts", icon: faTextHeight },
    { value: "customCss", name: "Custom CSS", icon: faCode },
    { value: "pageLayout", name: "Page Layout", icon: faColumns },
    { value: "pageSetup", name: "Page Setup", icon: faCog },
  ];

  const setRouteHandler = (e) => {
    setRoute(e.target.value);
  };
  return (
    <div className="anps-admin-nav">
      <ul>
        <li>
          <a href="http://anpsthemes.com/" target="_blank"></a>
          <div>
            <span>Theme Options</span>
            <br />
            <span>Version: 1.0.0</span>
          </div>
        </li>
        {r
          ? r.map((item) => {
              return (
                <li key={item.value}>
                  <button
                    value={item.value}
                    onClick={setRouteHandler}
                    className={item.value == route ? "active" : ""}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    {item.name}
                  </button>
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
}
