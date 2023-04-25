import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";
import Body from "./components/blocks/Body";
import Button from "./components/blocks/Button";
import Subheading from "./components/blocks/Subheading";
import Title from "./components/blocks/Title";
const ResumesPage = (props) => {
    const allResumes = props.allResumes;
    return (
        <>
            <article style={{minHeight: 'calc(100vh - 192px)'}}>
                <div className="spacer"></div>
                <section className="article-content">
                    <Subheading design="centered" content="Choose a Resume" />
                    <Body content="" />
                    <div className="btn-group">
                    {allResumes.map((resume) => (
                        <Button design="button-1" destination={resume.path} content={resume.title} />
                    ))}
                    </div>
                </section>
            </article>
            <Footer />
        </>
    )
}

export default ResumesPage;