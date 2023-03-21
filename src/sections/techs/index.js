export const Techs = () => {
    return (
        <div class="techs pt-5 pb-5 text-center">
            <div class="container">
                <div class="row align-items-center">
                    {
                        [1, 2, 3, 4, 5, 6].map(num => {
                            return (
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
                                    <img class="img-fluid" src={`imgs/tech-${num}.png`} alt="" />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}