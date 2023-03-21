export const MainTitle = ({ title, description }) => {
    return (
        <div className="main-title mt-5 mb-5 position-relative">
            <img className="mb-4" src="imgs/title.png" alt="" />
            <h2>{title}</h2>
            <p className="text-black-50 text-uppercase">{description}</p>
        </div>
    )
}