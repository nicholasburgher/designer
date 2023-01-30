import PageTitle from "../components/PageTitle/PageTitle";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import work from "../content/work";
//Builder
import buildBlock from "../scripts/buildBlock";
import BackTo from "../components/navigation/BackTo/BackTo";

function WorkPageTemplate(props) {
  const navigate = useNavigate();
  return (
    <div className="article">
      <div style={{display: "flex", flexDirection: "row", gap: "8px"}}>
        <PageTitle content="Work" action={() => {console.log("heading-back"); navigate('../work')}}/><PageTitle content={`> ${props.title}`} />
      </div>
      <section className="article-content">
        {work[props.index].content && work[props.index].content.map(buildBlock)}
      </section>
      <BackTo />
      <Footer />
    </div>
  )
}

export default WorkPageTemplate;