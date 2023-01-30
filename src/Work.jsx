import "./Work.scss";
//import BrandedHeader from "./components/navigation/BrandedHeader/BrandedHeader";
import WorkCard from "./components/WorkCard/WorkCard";
import PageTitle from "./components/PageTitle/PageTitle";
import Button from "./components/blocks/Button";
import work from "./content/work";

function Work() {
  return (
    <div style={{maxWidth: "1024px", margin: "0 auto"}}>
      <PageTitle content="Featured Projects" />
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
        paddingTop: "2rem"
        }}>
        <Button design="button-1" destination="https://dribbble.com/nicholasburgher" target="_blank" content="See More on Dribbble" />
      </div>
    </div>
  )
}

export default Work;