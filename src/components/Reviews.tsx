import FirstImg from '/pexels-valentin-angel-fernandez-14587417.jpg' 
import FirstImgWebp from '/pexels-valentin-angel-fernandez-14587417.webp';
import SecondImg from '/pexels-radomir-jordanovic-1644924.jpg';
import SecondImgWebp from '/pexels-radomir-jordanovic-1644924.webp';
import ThirdImg from '/pexels-4574925.jpg';
import ThirdImgWebp from '/pexels-4574925.webp';
import { StarFilledIcon } from '@radix-ui/react-icons';

function Reviews(): JSX.Element {
    return (

        <section id='reviews' aria-label='reviews'>
            <h2>Reviews</h2>
            <div className="container">
                <figure className="review" aria-label='review'>
                    <article className="avatar">
                        <picture>
                            <source srcSet={FirstImgWebp} type="image/avif" />
                            <img
                                src={FirstImg}
                                width={640}
                                height={640}
                                alt="asian woman"
                                className='PexelsValentinImg'
                                loading='lazy'
                            />
                        </picture>
                        <h3 className="review_h">Mercy</h3>
                        <small className="review_small">HR Manager</small>
                        <span>
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                        </span>
                    </article>
                    <figcaption><p className="review_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptate quis doloribus eaque sunt officiis ducimus accusantium optio excepturi sed.</p></figcaption>
                </figure>

                <figure className="review" aria-label='review'>
                    <article className="avatar">
                        <picture>
                            <source srcSet={SecondImgWebp} type="image/avif" />
                            <img
                                src={SecondImg}
                                width={640}
                                height={640}
                                alt="black woman"
                                className='PexelsRadomirImg'
                                loading='lazy'
                            />
                        </picture>
                        <h3 className="review_h">Ann</h3>
                        <small className="review_small">Stylist</small>
                        <span>
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                        </span>
                    </article>
                    <figcaption><p className="review_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius odit, sit molestias corporis adipisci?</p></figcaption>
                </figure>

                <figure className="review" aria-label='review'>
                    <article className="avatar">
                        <picture>
                            <source srcSet={ThirdImgWebp} type="image/avif" />
                            <img
                                src={ThirdImg}
                                width={640}
                                height={640}
                                alt="white woman"
                                className='PexelsImg'
                                loading='lazy'
                            />
                        </picture>
                        <h3 className="review_h">Stephanie</h3>
                        <small className="review_small">Photographer</small>
                        <span>
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                            <StarFilledIcon aria-hidden />
                        </span>
                    </article>
                    <figcaption><p className="review_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aut recusandae quibusdam eligendi enim? Non, architecto! Libero soluta corporis a.</p></figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Reviews;