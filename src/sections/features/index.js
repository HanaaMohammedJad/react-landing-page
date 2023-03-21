import { FEATURES } from "../../data/data";
import { MainTitle } from "../../components/main-title"
import { Feat } from "../../components/feat";

export const Features = () => {
    const title = 'We are Good at';
    const description = 'Some Of These Stuff Under';
    return (
        <div className="features text-center pt-5 pb-5">
            <div className="container">
                <MainTitle title={title} description={description} />
                <div className="row">
                    {
                        FEATURES.map((item, index) => <Feat key={index} number={item.number} icon={item.icon} title={item.title} description={item.description} />)
                    }
                </div>
            </div>
        </div>
    )
}