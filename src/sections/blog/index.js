import { ARTICLES } from '../../data/data';
import { MainTitle } from '../../components/main-title';
import { BlogCard } from '../../components/blog-card';

export const Blog = () => {
    const title = 'Read Our Blog';
    const description = 'New Stories';
    return (
        <div className="blog pt-5 pb-5">
            <div className="container">
                <MainTitle title={title} description={description} />
                <div className="row">
                    {
                        ARTICLES.map((item, index) => <BlogCard num={index + 1} title={item.title} date={item.date} />)
                    }
                </div>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <a className="btn rounded-pill main-btn text-uppercase" href="/">More Stories</a>
                </div>
            </div>
        </div>
    )
}