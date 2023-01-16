import { useNavigate } from 'react-router-dom';

function CoverPage() {
  const navigate = useNavigate();
  return (
    <div class="cover-page">
      <div style={{ textAlign: "center" }}>
        <h1>Designer</h1>
        <h2 onClick={() => navigate('about')} style={{ cursor: "pointer" }}>Nicholas Burgher</h2>
      </div>
      
    </div>
  )
}
export default CoverPage;

//<h3 onClick={() => navigate('work')} style={{ cursor: "pointer" }}>ENTER</h3>