// import { useState } from "react";

import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";

// import Name from "./Components/Name";

function App() {
  // const [getName, setName] = useState("");

  // function setMyName(e) {
  //   if (e.target.value === "vivek") { setName(e.target.value); }
  // }
  return (
    <main>
      {/* <input type="text" onChange={setMyName} />
      <br />
      <Name name={getName} /> */}
      <Header />
      <hr />
      {
        [1, 2, 3, 4].map((value, index) => {
          return <div key={index}><Section id={value} /> <br /> <hr /></div>
        })
      }
      <Footer />
    </main>
  );
}

export default App;
