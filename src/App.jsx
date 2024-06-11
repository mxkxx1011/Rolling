import TextDropdownFiled from "components/textdropdownfield/TextDropdownField";
import TextInputField from "components/textinputfield/TextInputField";

function App() {
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div>
      <TextDropdownFiled options={options}></TextDropdownFiled>
      <p></p>
      <TextInputField></TextInputField>
    </div>
  );
}

export default App;
