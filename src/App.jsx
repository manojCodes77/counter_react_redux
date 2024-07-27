import { useSelector } from "react-redux";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy=useSelector((state) => state.privacy);
  return (
    <>
      <Container>
      <div className="px-4 py-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage/> : <DisplayCounter />}
          <Controls />
        </div>
      </div>
      </Container>
    </>
  );
}
export default App;