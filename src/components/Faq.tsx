import AccordionDemo from "./Accordion";

function Faq(): JSX.Element {
    return (
        <section id="faqs" aria-label="faqs">
            <h2>FAQ</h2>
            <figure className="container" aria-label="accordion">
                <AccordionDemo />
            </figure>
        </section>
    );
};

export default Faq