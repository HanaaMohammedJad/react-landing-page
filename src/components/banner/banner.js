import './banner.css';


export const Banner = () => {
    return <div className="landing d-flex justify-content-center align-items-center">
        <div className="text-center text-light">
            <h1>Taste the Creativity</h1>
            <p className="fs-6 text-white-50 mb-5">We make awesome graphic and web design</p>
            <a className="btn rounded-pill main-btn" href="/">Get Started</a>
        </div>
    </div>
}