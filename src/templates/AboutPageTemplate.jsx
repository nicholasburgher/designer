import Footer from "../components/Footer";
import about from "../content/about";
//Builder
import buildBlock from "../scripts/buildBlock";

function AboutPageTemplate(props) {
  return (
    <div className="article">
      <section className="article-content">
        {about[props.index].content && about[props.index].content.map(buildBlock)}
      </section>
      <Footer />
    </div>
  )
}

export default AboutPageTemplate;