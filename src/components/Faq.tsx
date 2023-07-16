import AccordionDemo from "./Accordion";
import { Fragment } from "react";

function Faq() {
    return (
        <Fragment>
            <section id="faqs">
                <h2>FAQ</h2>
               <div className="container">
                    <AccordionDemo />
                </div>
            </section>
        </Fragment>    
    );
};

export default Faq