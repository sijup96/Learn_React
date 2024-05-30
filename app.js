import React from "react";
import ReactDOM from "react-dom";

const Title = () => <h1>This is Title</h1>;

const head=<h1>heading</h1>
const Body = function(){
    return(
  <div>
    {Title()}
    <Title> </Title>
    {head}
    <h1>This is Body</h1>
  </div>
)
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>)


