import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InLineStyle } from "./components/inlineStyle";
import { StyledComponents } from "./components/StyledComponets";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InLineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
