import "./Work.scss";
//import BrandedHeader from "./components/navigation/BrandedHeader/BrandedHeader";
import WorkCard from "./components/WorkCard";
import PageTitle from "./components/PageTitle";
import Button from "./components/blocks/Button";
import work from "./content/work";
import Footer from "./components/Footer";

function Work() {
  return (
    <div>
      <article style={{maxWidth: "1024px", margin: "0 auto"}}>
        <div className="spacer"></div>
        <PageTitle content="Work" />
        <div className="workTable">
          {work.map((workItem) => {
           return (
              <WorkCard key={workItem.key} id={workItem.key} title={workItem.title} skills={workItem.skills} date={workItem.date} to={workItem.path} graphic={workItem.graphic} graphicReposition={workItem.graphicReposition}/>
            )
          })}
        </div>
        <div style={{
          display: "grid",
          alignItems: "center",
          paddingTop: "3rem",
          paddingBottom: "1.75rem"
          }}>
          <Button design="button-1" destination="https://dribbble.com/nicholasburgher" target="_blank" content="See More on Dribbble" />
        </div>
      </article>
      <Footer />
    </div>
    
  )
}

export default Work;