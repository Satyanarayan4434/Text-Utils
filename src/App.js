import "./App.css";
import Navbar from './component/Navbar';
import TextForm from "./component/TextForm";


function App() {
  return (
    <>
      <Navbar heading = "Text Utils" />
      <TextForm heading="Enter Text Here" textArea="" />
    </>
  );
}

export default App;
