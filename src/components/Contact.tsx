import {PaperPlaneIcon} from '@radix-ui/react-icons'
import {EnvelopeClosedIcon} from '@radix-ui/react-icons'
import {DrawingPinIcon} from '@radix-ui/react-icons'
function Contact() {
    return (
        <>
            <section id="contact">
                <h2>Contact</h2>
                <div className="container">
                    <form action="contact-form" method="post" className="form">
                        <fieldset>
                            <legend>
                                <label id="name"> Name <input type="text" name="Name" aria-label="official name" required  autoComplete='on'/></label>
                                <label id="email"> Email <input type="email" name="Email Address" aria-labelledby="email" required /></label>
                                <label id="date">Appointment Date <input type="date" name="Schedule Date" aria-labelledby="date" required /></label>
                                <label id="time">Appointment Time <input type="time" name="Schedule Time" aria-labelledby="time" required /></label>
                            </legend>
                        </fieldset>
                        <fieldset>
                            <legend>
                                <label> Message
                                    <textarea id="message" rows={5} aria-labelledby="message"></textarea>
                                </label>
                            </legend>
                        </fieldset>
                        <input type="submit" id="submit" value="Submit" className="btn btn-primary" />
                    </form>

                    <aside className="contact">  
                        <h3>Contact Info</h3>
                        <p>Please feel free to reach out to us, for any queries.</p> 
                        <ul className="contact_details">
                            <li>
                                <PaperPlaneIcon className='PaperPlane'/>
                                <h4>(404)-001-1234</h4>
                            </li>
                            <li>
                                <EnvelopeClosedIcon className='EnvelopeClosed' />
                                <h4>support@logo.com</h4>
                            </li>
                            <li>
                                <DrawingPinIcon className='DrawingPin'/>
                                <h4>Atlanta, Georgia</h4>
                            </li>
                        </ul>
                    </aside>
                </div>
            </section>
        </>
    );
}

export default Contact;