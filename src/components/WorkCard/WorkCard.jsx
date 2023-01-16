import "./WorkCard.scss";
import { useNavigate } from 'react-router-dom';

function WorkCard(props) {
  const navigate = useNavigate();
  return (
    <div className="WorkCard" id={props.id} onClick={() => navigate(`../${props.to}`)}>
      <div
        className="WorkCard_Background"
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/" + props.graphic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: ".6"
        }}
      ></div>
      <div className="WorkCard_Content">
        <h3 className="title">{props.title}</h3>
        <p className="skills">{props.skills}</p>
        <p className="dates">{props.date}</p>
      </div>
    </div>
  )
}

export default WorkCard;