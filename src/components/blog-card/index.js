export const BlogCard = ({ num, date, title }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card">
                <img src={`imgs/blog-${num}.jpg`} className="card-img-top" alt="Blog Post" />
                <div className="card-body">
                    <span className="text-black-50">{date}</span>
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    )
}