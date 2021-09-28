import React, { useState } from "react";

/* Components */
import CallToAction from "./components/CallToAction";
import Logo from "./components/Logo";

/* SVG logos */
import React_Logo from "./images/react.svg";
import Webpack from "./images/webpack.svg";
import Babel from "./images/babel.svg";
import SASS from "./images/sass.svg";
import PostCSS from "./images/postcss.svg";

function App() {
  const [date, setDate] = useState(new Date().toLocaleString());

  setInterval(() => {
    const newDate = new Date().toLocaleString();
    setDate(newDate);
  }, 1000);

  return (
    <div className="container">
      <main>
        <h1>
          React - Webpack <br /> Boilerplate
        </h1>
        <div className="logos">
          <Logo
            title="react"
            link="https://it.reactjs.org/"
            src={React_Logo}
            width="36"
          />
          <Logo
            title="webpack"
            link="https://webpack.js.org/"
            src={Webpack}
            width="43"
          />
          <Logo
            title="babel"
            link="https://babeljs.io/"
            src={Babel}
            width="60"
          />
          <Logo
            title="sass"
            link="https://sass-lang.com/"
            src={SASS}
            width="50"
          />
          <Logo
            title="postcss"
            link="https://postcss.org/"
            src={PostCSS}
            width="37"
          />
        </div>
        <p>
          Basic starter project for building React apps with Webpack / Babel /
          SASS / Postcss (plugins: postcss-preset-env for autoprefixing and
          browser support - Cssnano for CSS minification).
        </p>

        <CallToAction
          link="https://github.com/toniG-78/react-webpack-boilerplate-project.git"
          value="Repository on Github"
        />
      </main>

      <time className="date">{date}</time>
      <footer>
        <p>
          <span> Copyright &copy; {new Date().getFullYear()} </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
