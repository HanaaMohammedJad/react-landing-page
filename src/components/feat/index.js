import './feat.css';

export const Feat = ({ number, icon, title, description }) => {
    const numberIcon = `${number} position-absolute bottom-0 number`;
    const icon_ = `${icon} fa-4x position-absolute bottom-0 icon`;
    return (
        <div className="col-md-6 col-lg-4">
            <div className="feat">
                <div className="icon-holder position-relative">
                    <i className={numberIcon}></i>
                    <i className={icon_}></i>
                </div>
                <h4 className="mb-3 mt-3 text-uppercase">{title}</h4>
                <p className="text-black-50 lh-lg">{description}</p>
            </div>
        </div>
    )
}