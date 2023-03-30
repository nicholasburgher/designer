import { useNavigate } from 'react-router-dom';
//import Image from "./components/blocks/Image";
import buildBlock from "./scripts/buildBlock";
import coverContent from './content/coverContent';

function CoverPage() {
  const navigate = useNavigate();
  return (
    <div className="cover-page">
      <div className="cover">
        <div className="centered-group">
          <div className="uxui-heroimg"></div>
        </div>
        <div className="centered-group">
          <div onClick={() => navigate('about')} className="my-name">
            Nicholas Burgher
          </div>
          <div className="big-letters">
            <div>D</div>
            <div>E</div>
            <div>S</div>
            <div>I</div>
            <div>G</div>
            <div>N</div>
            <div>E</div>
            <div>R</div>
          </div>
          <div className="contact-info">
              <div>
                nicholas.burgher@me.com
              </div>
              <div>
                |
              </div>
              <div>
                417.224.7029
              </div>
          </div>
        </div>
        <div class="ball-1"></div>
      </div>
      
      <article>
        <section className="article-content">
          {coverContent[0].content && coverContent[0].content.map(buildBlock)}
        </section>
      </article>
    </div>
  )
}
export default CoverPage;

//<h3 onClick={() => navigate('work')} style={{ cursor: "pointer" }}>ENTER</h3>
/*
Old Home Content...
<h1>Designer</h1>
<h2 onClick={() => navigate('about')} style={{ cursor: "pointer" }}>Nicholas Burgher</h2>
*/