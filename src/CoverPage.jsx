import { useNavigate } from 'react-router-dom';
//import Image from "./components/blocks/Image";
import buildBlock from "./scripts/buildBlock";
import coverContent from './content/coverContent';

function WhatIDo() {
  const navigate = useNavigate();
  const content = [
    {
      letter1: 'G',
      letter2: 'D',
      title: 'Graphic Design',
      linkText: 'Learn More',
      destination: './design-work'
    },
    {
      letter1: 'U',
      letter2: 'X',
      title: 'User Experience',
      linkText: 'Learn More',
      destination: './ux-work'
    },
    {
      letter1: '<',
      letter2: '>',
      title: 'Development',
      linkText: 'Learn More',
      destination: './dev-work'
    },
    {
      letter1: 'A',
      letter2: 'V',
      title: 'Audio / Visual',
      linkText: 'Learn More',
      destination: './av-work'
    }
  ];
  return (
    <section className="what-i-do cover">
      <h3 align="center">What I Do</h3>
      <table cellPadding="10" width="100%">
        <tbody>
          <tr>
            {content.map((item) => (
              <td onClick={() => navigate(item.destination)} align="center">
                <table width="100px">
                  <tbody>
                    <td>
                      <td align="center">
                        {item.letter1}
                      </td>
                      <td align="center">
                        {item.letter2}
                      </td>
                    </td>
                  </tbody>
                </table>
                <h4>{item.title}</h4>
                <a onClick={() => navigate(item.destination)}>{item.linkText}</a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  )
}

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
        <section className="article-content who-i-am">
          <h3 align="center">Who I Am</h3>
          {coverContent[0].content && coverContent[0].content.map(buildBlock)}
        </section>
      </article>
      <WhatIDo />
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