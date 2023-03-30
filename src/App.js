import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import HamburgerMenu from "./components/navigation/HamburgerMenu";
import CoverPage from "./CoverPage";
import Work from "./Work";
import BrandedHeader from "./components/navigation/BrandedHeader";
import WorkPageTemplate from "./templates/WorkPageTemplate";
import AboutPageTemplate from "./templates/AboutPageTemplate";
import work from "./content/work";


function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <BrandedHeader />
      <div className="content">
        <Routes>
          <Route path="/" element={<div><CoverPage /><Work /></div>} />
          <Route path="about" element={<AboutPageTemplate index="0" />} />
          <Route path="work/*" element={<Work />} />
          {work.map((workItem, index) => {
            return (
              <Route path={`${workItem.path}`} element={<WorkPageTemplate title={workItem.title} index={index} />} />
            )
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
