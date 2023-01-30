import { useNavigate } from 'react-router-dom';
import Image from "./components/blocks/Image";

function CoverPage() {
  const navigate = useNavigate();
  return (
    <div class="cover-page">
      <div onClick={() => navigate('about')} style={{ cursor: "pointer", textAlign: "center", width: "75%" }}>
        <Image source="NB_Designer_Logo.svg" customClass="w1024"/>
        
      </div>
      
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