import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="join">
            <button className="btn btn-danger bg-red-500 text-white">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} className="join-form">
                <Link to="/" className="mr-5">I can be a React component, multiple React components, or just some text.</Link>
                <Link to="/" className="mr-5">I can be a React component, multiple React components, or just some text.</Link>
                <Link to="/" className="mr-5">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;