import { Route, Routes, useLocation } from "react-router-dom";
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
import work_featured from "./content/work_featured";
import ResumesPage from "./ResumesPage";


function App() {
  const contentCategories = [
    {
      categoryTitle: 'All Work',
      content: work_all,
      rootPath: 'work'
    },
    {
      categoryTitle: 'Graphic Design',
      summary: 'I greatly enjoy all creative activities, especially those of a visual nature! I studied Commercial Art at Southwest Baptist University where I was awarded the \"Outstanding Art Student\" of 2014. After graduating, I began assisting teams in creating marketing visuals, printed products, and digital interfaces. I\'m an expert in both design concepts and software related to the trade.',
      content: work_graphicDesign,
      rootPath: 'design-work',
      resumePath: 'graphic-designer'
    },
    {
      categoryTitle: 'User Experience',
      summary: [
        'Closely related to Graphic Design, User Experience Design focuses on crafting memorable, usable, valuable human experiences that people love. Rather than focusing on purely ROI or aesthetic appeal, UX strives to keep the interests of the customer top of mind and to remove barriers they might have, be it in functionality or value. I love this approach to design, and believe anything less fails to create truly remarkable outcomes.',
        'I believe UX Design is some of the most rewarding work for me. I enjoy connecting with customers to understand their needs and desires. Then, I love collaborating with other professionals to discover valuable, usable, feasible, and business viable solutions for that customer.'
      ],
      content: work_ux,
      rootPath: 'ux-work',
      resumePath: 'ux-designer'
    },
    {
      categoryTitle: 'Development',
      summary: [
        'I\'ve been blessed with opportunities to support creative teams in building breakthrough product solutions through self-taught development skills. For 5 years as a Marketing Coordinator, I acquired a solid foundation on HTML and CSS, as I fleshed out new  company website interfaces and built custom email campaigns.',
        'As needs of the teams I served expanded, I gathered new knowledge that I immediately applied to bring about high-value outcomes. This included learning Javascript, advanced Excel formulas, Google Script Editor for Sheets, and GREP (InDesign).',
        'My passion for continual learning has opened doors to use Javascript, SCSS, Git, and React on a regular basis, where I build customer-facing front-end experiences. My background in visual design helps these interfaces appear attractive and responsive. This site stands as a testament to my knowledge and skills, despite my lack of a formal development degree.'
      ],
      content: work_dev,
      rootPath: 'dev-work',
      resumePath: 'developer'
    },
    {
      categoryTitle: 'Audio/Visual',
      summary: [
        'My earliest work as a videographer and editor started when I was a teenager. I put together montage videos for my church VBS programs. My interest in video sparked as I entered high school. HTV Magazine of Hillcrest High School (Springfield, MO) is an award-winning advanced Broadcast Journalism class, of which I strived to join prior to moving to California, MO. However, the prerequisite courses taught me the technical foundations for crafting engaging audio/visual content that I would use throughout my professional career.',
        'At Techless, I generated a large amount of high-production video content, including marketing videos, video podcasts, and company announcements. We used Black Magic Design video cameras, cinema lenses, various mics, live production switchers, Adobe Premiere Pro, and Davinci Resolve.',
        'In addition, I also run my own Youtube channel, where I perform live electronic music. I compose and mix my own tracks. Lastly, I take photographs on the side with my wife, having executed close to 50 photoshoots from family, newborn, product photography, and weddings. I edit in Lightroom and Photoshop.'
      ],
      content: work_av,
      rootPath: 'av-work'
    }
  ]
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname.split('/')[location.pathname.split('/').length - 2] === 'resume' ? '' : <><HamburgerMenu /><BrandedHeader /></>}

      <div className="content">
        <Routes>
          <Route path="/" element={<div><CoverPage /><WorksPage currentCategory={{ categoryTitle: 'Featured Projects', content: work_featured, rootPath: '' }} buttonDestination="work" buttonText="See All Work" /></div>} />
          <Route path="about" element={<AboutPageTemplate index="0" />} />
          {work_featured.map((workItem) => (
            <Route path={`/${workItem.path}`} element={<WorkPageTemplate item={workItem} category={{ categoryTitle: "Featured", rootPath: '/#workTable' }} />} />
          ))}
          {contentCategories.map((category) => {
            return (
              <>
                <Route path={category.rootPath} element={<WorksPage categories={contentCategories} currentCategory={category} buttonDestination="https://dribbble.com/nicholasburgher" buttonText="See More on Dribbble" buttonTarget="_blank" />} />
                {category.content.map((workItem, index) => (
                  <Route path={`/${category.rootPath}/${workItem.path}`} element={<WorkPageTemplate item={workItem} category={category} />} />
                ))}
              </>
            )
          })}


          {/*
          <Route path="work/*" element={<WorksPage pageTitle="All Work" works={work_all} />} />
          {work_all.map((workItem, index) => (
            <Route path={`${workItem.path}`} element={<WorkPageTemplate title={workItem.title} index={index} />} />
          ))}
          */}

          <Route path="resume" element={<ResumePageTemplate />}>
            <Route index element={<ResumesPage allResumes={allResumes} />} />
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
