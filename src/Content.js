import React from "react";

function changeStyleById(id, style) {
  let el = document.getElementById(id);
  if (el.className === "normal") {
    el.className = style;
  } else {
    el.className = "normal";
  }
}

function changeStyleBySelector(selector, style) {
  let el = document.querySelector("#" + selector);
  if (el.className === "normal") {
    el.className = style;
  } else {
    el.className = "normal";
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <p>
            Дата і місце народження: 01.07.2002, м.Донецьк
        </p>
        <p className="normal"
          id="education"
          onClick={() => changeStyleById("education", "style1")}
          style={{alignContent: "center"}}>
            Освіта: Ліцей №208 м.Києва; НТУУ "КПІ" ім. Сікорського
        </p>
        <h3 className="normal"
          id="hobby"
          onClick={() => changeStyleBySelector("hobby", "style2")}>
          Хобі:
        </h3>
        <ul>
          <li>Волейбол</li>
          <li>Футбол</li>
          <li>Настільні ігри</li>
        </ul>
        <h3
          
        >
          Улюблені фільми:
        </h3>
        <ol style={{ display: "inline-block" }}>
          <li>"З міркувань совісті", 2016</li>
          <li>"Прибрати перископ", 1996</li>
          <li>"Шазам!", 2019</li>
        </ol>
        <h3>Прага</h3>
        <p
          style={{ display: "inline-block", width: "80%", textAlign: "center" }}
        >
          Пра́га (чеськ. Praha) — столиця та найбільше місто Чеської Республіки
        </p>
      </div>
    );
  }
}

export default Content;

