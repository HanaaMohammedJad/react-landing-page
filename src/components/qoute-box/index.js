export const QouteBox = ({ img, title, qoute }) => {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="box bg-white">
                <img className="img-fluid" src={img} alt="" />
                <h4 className="p-3 text-light" style={{
                    backgroundColor: '#33d1cc'
                }}>{title}</h4>
                <blockquote className="text-black-50 p-3">
                    {qoute}
                </blockquote>
            </div>
        </div>
    )
}