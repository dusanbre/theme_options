import "../scss/nav.scss";

export default function Nav({ setRoute }) {
  const r = [
    { value: "themeColor", name: "Main Theme Color" },
    { value: "typography", name: "Typography" },
    { value: "buttonMaker", name: "Button Maker" },
    { value: "googleFonts", name: "Google Fonts" },
    { value: "customFonts", name: "Custom Fonts" },
    { value: "customCss", name: "Custom CSS" },
    { value: "pageLayout", name: "Page Layout" },
    { value: "pageSetup", name: "Page Setup" },
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
                  <button value={item.value} onClick={setRouteHandler}>
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
