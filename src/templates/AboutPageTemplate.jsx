import Footer from "../components/Footer";
import about from "../content/about";
//Builder
import buildBlock from "../scripts/buildBlock";

function AboutPageTemplate(props) {
  return (
    <>
      <article>
        <div className="spacer"></div>
        <section className="article-content">
          {about[props.index].content && about[props.index].content.map(buildBlock)}
        </section>
      </article>
      <Footer />
    </>
  )
}

export default AboutPageTemplate;