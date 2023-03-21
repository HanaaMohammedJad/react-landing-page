import { MainTitle } from "../../components/main-title"

export const Stuff = () => {
    const title = 'Some Stuff About Us';
    const description = 'The Great Team';
    return (
        <div className="stuff pt-5" >
            <div className="container">
                <MainTitle title={title} description={description} />
                <p className="description text-center mb-5 text-black-50 m-auto" style={{ maxWidth: '500px' }}>
                    Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.
                </p>
                <div className="row align-items-center">
                    <div className="col-lg-4 mb-4 text-center text-md-start">
                        <div className="text">
                            <h4>Retina Design</h4>
                            <p className="text-black-50 fs-6">
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget
                                tincidunt nibh pulvinar a.
                            </p>
                            <p className="text-black-50 fs-6">
                                Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie
                                malesuada.
                            </p>
                            <a className="btn rounded-pill main-btn text-uppercase" href="/">Order Me One</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="image">
                            <img className="img-fluid" src="imgs/laptop.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}