//import BrandedHeader from "./components/navigation/BrandedHeader/BrandedHeader";
import WorkCard from "./components/WorkCard";
import PageTitle from "./components/PageTitle";
import Button from "./components/blocks/Button";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function WorksPage(props) {
  const category = props.currentCategory;
  const navigate = useNavigate();
  const [catsIsOpen, setCatsIsOpen] = useState(false);
  return (
    <div>
      <article style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div className="spacer"></div>
        <div className="works-page-nav">
          <PageTitle content={category.categoryTitle} />
          {
            props.categories ?
              <ul className={`categories${catsIsOpen ? ` open` : ``}`}>
                <caption onClick={() => setCatsIsOpen(!catsIsOpen)}>Filter By Category</caption>
                {props.categories.map((cat) => (
                  <li className={cat.categoryTitle === category.categoryTitle ? 'selected' : ''} onClick={() => { navigate(`/${cat.rootPath}`); setCatsIsOpen(false) }}>{cat.categoryTitle}</li>
                ))}
              </ul>
              : ''
          }
        </div>
        {category.summary ?
          <section className="article-content" style={{ maxWidth: 'unset' }}>
            {
              category.summary instanceof Array ?
                category.summary.map((i, index) => (
                  <p style={{ paddingBottom: index + 1 === category.summary.length ? '1rem' : '0rem', paddingTop: index === 0 ? '.5rem' : '0rem', lineHeight: '150%', letterSpacing: '0.01em', maxWidth: 'unset' }}>{i}</p>
                ))
                :
                <p style={{ paddingBottom: '1rem', paddingTop: '.5rem', lineHeight: '150%', letterSpacing: '0.01em', maxWidth: 'unset' }}>{category.summary}</p>
            }{
              category.resumePath ?
                <Button design="button-2" destination={`/resume/${category.resumePath}`} content="View this resume" target="_blank" />
                : ''
            }
          </section>
          :
          ''
        }
        {
          props.categories && category.rootPath !== 'work' ?
            <PageTitle content="Related Work" />
            : ''
        }
        <div id="workTable" className="workTable">
          {category.content.map((workItem) => {
            return (
              <WorkCard key={workItem.key} id={workItem.key} title={workItem.title} skills={workItem.skills} date={workItem.date} to={workItem.path} graphic={workItem.graphic} graphicReposition={workItem.graphicReposition} />
            )
          })}
        </div>
        <div style={{
          display: "grid",
          alignItems: "center",
          paddingTop: "3rem",
          paddingBottom: "1.75rem"
        }}>
          <Button design="button-1" destination={props.buttonDestination} target={props.buttonTarget ? props.buttonTarget : "_self"} content={props.buttonText} />
        </div>
      </article>
      <Footer />
    </div>

  )
}

export default WorksPage;