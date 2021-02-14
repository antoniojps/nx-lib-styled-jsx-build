import React from 'react';

function Components(props) {
  return React.createElement("div", null, React.createElement("style", {
    jsx: true
  }, "\n        div {\n          color: pink;\n        }\n      "), React.createElement("h1", null, "Welcome to components!"));
}

export { Components };
