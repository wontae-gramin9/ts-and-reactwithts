import { Children, StringChildren } from "./components/props/Children";
import ListOfNestedObject from "./components/props/ListOfNestedObject";
import { NestedObject } from "./components/props/NestedObject";
import { Object } from "./components/props/Object";
import { Status } from "./components/props/StringLiteral";

const nameList = [
  {
    first: "Bruce",
    last: "Wayne",
  },
  {
    first: "Clark",
    last: "Kent",
  },
  {
    first: "Princess",
    last: "Diana",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Props</h1>
      <Object name="Wontae" messageCount={5} isLoggedIn={true}></Object>
      <NestedObject
        name={{
          first: "Clark",
          last: "Diana",
        }}
      ></NestedObject>
      <ListOfNestedObject names={nameList}></ListOfNestedObject>
      <p>----------</p>
      <Status status="success" />
      <Children>
        <StringChildren>
          Here goes the string type children of this component!
        </StringChildren>
      </Children>
    </div>
  );
}

export default App;
