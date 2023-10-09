import AccordionDemo from "./Accordion";

function Faq(): JSX.Element {
    return (
        <section id="faqs">
            <h2>FAQ</h2>
            <div className="container">
                <AccordionDemo />
            </div>
        </section>
    );
};

export default Faq