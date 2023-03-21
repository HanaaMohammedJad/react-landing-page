import { MainTitle } from "../../components/main-title"
import { MY_WORKS_IMAGES } from "../../data/data";
import './our-work.css';

export const OurWork = () => {
    const title = 'We Make This';
    const description = 'Prepare To Be Amazed';
    const skills = [
        'All', 'Design', 'Code', 'Photo', 'App'
    ]
    return (
        <div className="our-work text-center pt-5 pb-5" style={{
            backgroundColor: '#eff7fa'
        }}>
            <div className="container">
                <MainTitle title={title} description={description} />
                <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
                    {
                        skills.map((skill, index) => <li className={index === 0 ? 'active rounded-pill' : ''} key={index}>{skill}</li>)
                    }
                </ul>
                <div className="row">
                    {
                        MY_WORKS_IMAGES.map((imgUrl, index) => {
                            return (
                                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="box mb-3 bg-white" data-work="Application">
                                        <img className="img-fluid" src={imgUrl} alt="" />
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <a className="btn rounded-pill main-btn text-uppercase" href="/">I Want More</a>
                </div>
            </div>
        </div>
    )
}