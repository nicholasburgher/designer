import { Outlet } from "react-router-dom";

const ResumePageTemplate = () => {
    return (
        <>
            {/*<div style={{height: '48px'}}>&nbsp;</div>*/}
            <Outlet />
        </>
    )
}

export default ResumePageTemplate;