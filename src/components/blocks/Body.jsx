//NOTE: styling can be manipulated from App.scss

function Body(props) {
    return <p className={props.design} dangerouslySetInnerHTML={{__html: props.content}}/>
}

export default Body;