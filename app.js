const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
   [React.createElement("h1", {}, "hello"),React.createElement("h5", {}, "hello5"),React.createElement("h2", {}, "hello2")]
  )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
