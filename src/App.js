import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import HamburgerMenu from "./components/navigation/HamburgerMenu";
import CoverPage from "./CoverPage";
import BrandedHeader from "./components/navigation/BrandedHeader";
import WorkPageTemplate from "./templates/WorkPageTemplate";
import AboutPageTemplate from "./templates/AboutPageTemplate";
import work_all from "./content/work_all";
import work_graphicDesign from "./content/work_graphicDesign";
import work_ux from "./content/work_ux";
import work_dev from "./content/work_dev";
import work_av from "./content/work_av";
import ResumePageTemplate from "./templates/ResumePageTemplate";
import ResumeDocument from "./templates/ResumeDocument";
import allResumes from "./content/resumes/allResumes";
import WorksPage from "./WorksPage";


function App() {
  const contentCategories = [
    {
      categoryTitle: 'All Work',
      content: work_all,
      rootPath: 'work'
    },
    {
      categoryTitle: 'Graphic Design',
      content: work_graphicDesign,
      rootPath: 'design-work'
    },
    {
      categoryTitle: 'User Experience',
      content: work_ux,
      rootPath: 'ux-work'
    },
    {
      categoryTitle: 'Development',
      content: work_dev,
      rootPath: 'dev-work'
    },
    {
      categoryTitle: 'Audio-Visual',
      content: work_av,
      rootPath: 'av-work'
    }
  ]
  return (
    <div className="App">
      {window.location.pathname.includes('/resume') ? '' : <><HamburgerMenu /><BrandedHeader /></>}

      <div className="content">
        <Routes>
          <Route path="/" element={<div><CoverPage /><WorksPage pageTitle="All Work" works={work_all} /></div>} />
          <Route path="about" element={<AboutPageTemplate index="0" />} />

          {contentCategories.map((category) => {
            return (
              <>
            <Route path={category.rootPath} element={<WorksPage pageTitle={category.categoryTitle} works={category.content} />} />
            {category.content.map((workItem, index) => (
              <Route path={`/${category.rootPath}/${workItem.path}`} element={<WorkPageTemplate item={workItem} categoryTitle={category.categoryTitle} categoryRoot={category.rootPath} />} />
            ))}
            </>
          )})}


          {/*
          <Route path="work/*" element={<WorksPage pageTitle="All Work" works={work_all} />} />
          {work_all.map((workItem, index) => (
            <Route path={`${workItem.path}`} element={<WorkPageTemplate title={workItem.title} index={index} />} />
          ))}
          */}

          <Route path="resume" element={<ResumePageTemplate />}>
            {allResumes.map((resume) => (
              <Route path={`${resume.path}`} element={<ResumeDocument resume={resume} />} />
            ))}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
