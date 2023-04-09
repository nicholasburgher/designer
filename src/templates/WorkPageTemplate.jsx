import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
//import work from "../content/work_all";
//Builder
import buildBlock from "../scripts/buildBlock";
import BackTo from "../components/navigation/BackTo";

function WorkPageTemplate(props) {
  const navigate = useNavigate();
  return (
    <>
      <article>
        <div className="spacer"></div>
        <div style={{display: "flex", flexDirection: "row", gap: "8px"}}>
          <PageTitle content={props.categoryTitle} action={() => {console.log("heading-back"); navigate(`../${props.categoryRoot}`)}}/><PageTitle content={`> ${props.item.title}`} />
        </div>
        <section className="article-content">
          {props.item.content && props.item.content.map(buildBlock)}
        </section>
        <BackTo />
      </article>
      <Footer />
    </>
  )
}

export default WorkPageTemplate;