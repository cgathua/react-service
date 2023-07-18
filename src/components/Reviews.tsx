import FirstImg from './pexels-valentin-angel-fernandez-14587417.webp'
import SecondImg from './pexels-radomir-jordanovic-1644924.webp'
import ThirdImg from './pexels-4574925.webp'
import { StarFilledIcon } from '@radix-ui/react-icons'

function Reviews() {
    return (

        <section id='reviews'>
            <h2>Reviews</h2>
            <div className="container">
                <figure className="review">
                    <article className="avatar">
                        <img 
                            src={FirstImg} 
                            alt="asian woman" 
                            loading='lazy'
                            width={640}
                            height={640}
                            className='PexelsValentinImg'
                            srcSet='/pexels-valentin-angel-fernandez-14587417.jpg'
                        />
                        <h3 className="review_h">Mercy</h3>
                        <small className="review_small">HR Manager</small>
                        <div>
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                        </div>
                    </article>
                    <figcaption><p className="review_p">I'm very satisfied with the work that was done on my car.</p></figcaption>
                </figure>

                <figure className="review">
                    <article className="avatar">
                        <img
                            src={SecondImg} 
                            alt="black woman" 
                            loading='lazy' 
                            width={640}
                            height={640}
                            className='PexelsRadomirImg'
                            srcSet='/pexels-radomir-jordanovic-1644924.jpg'
                        />
                        <h3 className="review_h">Ann</h3>
                        <small className="review_small">Stylist</small>
                        <div>
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                        </div>
                    </article>
                    <figcaption><p className="review_p">The shop finished the job on time and I paid the quoted price.</p></figcaption>
                </figure>

                <figure className="review">
                    <article className="avatar">
                        <img 
                            src={ThirdImg} 
                            alt="white woman" 
                            loading='lazy' 
                            width={640}
                            height={640}
                            className='PexelsImg'
                            srcSet='/pexels-4574925.jpg'
                        />
                        <h3 className="review_h">Stephanie</h3>
                        <small className="review_small">Photographer</small>
                        <div>
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                        </div>
                    </article>
                    <figcaption><p className="review_p">The service advisor addressed my concerns, about my car.</p></figcaption>
                </figure>
            </div>
        </section>
    );
}

export default Reviews;