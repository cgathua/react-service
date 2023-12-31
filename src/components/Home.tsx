
function Home(): JSX.Element {
    return (
        <section id="home" aria-label="home">
            <figure className="container" aria-label="home content">
                <article className="banner">
                    <h1>One Stop Service</h1>
                    <p>We are a Bmw only service center, based in Atlanta, Georgia. Our technicians are ASE certified and receive on-going training.</p>
                    <button className="btn btn-primary"><a href="#contact" aria-label="schedule service">schedule service <svg aria-hidden fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" min-width="16px" height="16px" viewBox="0 0 382.168 382.168" xmlSpace="preserve" stroke="#ACACB2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M314.209,240.87c3.609-8.377,3.902-15.961,0.89-22.586c-1.171-2.585-2.867-4.996-5.021-7.149 c-3.621-3.62-7.871-5.886-10.941-7.184c2.357-8.145,1.752-15.261-1.791-21.177c-0.971-1.628-2.192-3.151-3.588-4.578 c-9.479-9.699-16.645-7.21-16.645-7.21s3.873-15.466-7.336-26.43c-11.209-10.964-21.867-6.279-31.115,3.119l-46.609,46.589 c-6.584-2.472-16.945-8.701-27.615-7.477c-19.006,2.183-23.959,14.89-26.639,25.527c-6.066,24.031-4.262,59.861-11.127,73.705 c-8.443,17.023-24.977,31.318-24.977,31.318l64.83,64.83c26.396-26.395,51.791-33.232,70.74-41.16 c42.943-17.965,64.021-39.473,74.744-51.023C334.244,266.035,317.336,245.247,314.209,240.87z"></path> <path d="M155.305,50.727l41.797-11.415c-2.287-5.254-5.26-10.224-8.838-14.771C178.248,11.814,163.951,3.13,148.007,0.089 c-1.709-0.327-3.471,0.261-4.641,1.553c-1.17,1.29-1.584,3.098-1.094,4.77L155.305,50.727z"></path> <path d="M146.761,136.573l34.324,43.611l45.855-42.509l-31.209-39.653c5.265-10.702,7.806-22.612,7.373-34.651 c-0.057-1.535-0.812-2.958-2.055-3.862c-1.242-0.904-2.83-1.187-4.307-0.769L111.73,82.823l-24.598-65 c-0.607-1.605-1.996-2.787-3.678-3.13c-1.686-0.34-3.422,0.201-4.609,1.44c-24.76,25.841-26.75,66.521-4.629,94.628 c13.779,17.507,34.479,27.549,56.785,27.55C136.312,138.312,141.6,137.728,146.761,136.573z"></path> </g> </g> </g></svg></a></button>
                </article>
                <picture>
                    <img
                        srcSet="pexels-stephan-louis-480w.webp 480w, pexels-stephan-louis960w.webp 960w, pexels-stephan-louis.jpg 1920w"
                        src="pexels-stephan-louis.jpg"
                        alt="bmw"
                        width={1920}
                        height={1080}
                        className="HomeImage"
                    />
                </picture>
            </figure>
        </section>
    );
};

export default Home;
