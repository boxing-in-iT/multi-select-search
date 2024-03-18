import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
];

function App() {
  const [value, setValue] = useState(options[0]);
  const [value1, setValue1] = useState([options[0]]);

  return (
    <div className="center">
      <Input
        multiple={false}
        options={options}
        value={value}
        onChange={(o) => setValue(o)}
      />
      <br />
      <Input
        multiple={true}
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
    </div>
  );
}

export default App;
