import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
//import work from "../content/work_all";
//Builder
import buildBlock from "../scripts/buildBlock";
import BackTo from "../components/navigation/BackTo";

function WorkPageTemplate(props) {
  const navigate = useNavigate();
  const category = props.category;
  return (
    <>
      <article>
        <div className="spacer"></div>
        <div style={{display: "flex", flexDirection: "row", gap: "8px"}}>
          <PageTitle content={category.categoryTitle} action={() => {console.log("heading-back"); navigate(`../${category.rootPath}`)}}/><PageTitle content={`> ${props.item.title}`} />
        </div>
        <section className="article-content">
          {props.item.content && props.item.content.map(buildBlock)}
        </section>
        <BackTo dest={category.rootPath} />
      </article>
      <Footer />
    </>
  )
}

export default WorkPageTemplate;