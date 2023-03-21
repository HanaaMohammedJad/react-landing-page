import { QouteBox } from "../../components/qoute-box"
import { QOUTES } from "../../data/data"

export const Team = () => {
    return (
        <div className="team text-center pb-5 pt-5" style={{ backgroundColor: '#eff7fa' }}>
            <div className="container pb-5 pt-5">
                <h2 className="fw-bold" style={{ color: '#ffc400' }}>Meet The Team</h2>
                <p className="text-black-50 mb-5">
                    Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.
                </p>

                <div className="row">
                    {
                        QOUTES.map((item, index) => <QouteBox img={item.img} title={item.title} qoute={item.qoute} />)
                    }
                </div>
            </div>
        </div>
    )
}