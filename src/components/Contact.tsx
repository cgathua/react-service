import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { MobileIcon } from '@radix-ui/react-icons'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { DrawingPinIcon } from '@radix-ui/react-icons'

function Contact(): JSX.Element {
    return (

        <section id="contact" aria-label='contact'>
            <h2>Contact</h2>
            <figure className="container" aria-label='contact form'>
                <form action="contact-form" method="post" className="form">
                    <fieldset>
                        <legend>
                            <label id="name"> Name <input type="text" name="Name" aria-label="official name" title="first and last name, separated by a gap" autoComplete='on' pattern="(^[a-zA-Z]{1,15} [a-zA-Z]{1,15}$)" required /></label>
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

                <aside className="contact" aria-label='contact information'>
                    <h3>Contact Info</h3>
                    <p>Please feel free to reach out to us, for any queries.</p>
                    <ul className="contact_details">
                        <li>
                            <MobileIcon className='Mobile' aria-hidden />
                            <h4>(404)-001-1234</h4>
                        </li>
                        <li>
                            <EnvelopeClosedIcon className='EnvelopeClosed' aria-hidden />
                            <h4>support@logo.com</h4>
                        </li>
                        <li>
                            <DrawingPinIcon className='DrawingPin' aria-hidden />
                            <h4>Atlanta, Georgia 30144</h4>
                        </li>
                    </ul>
                </aside>
            </figure>
        </section>
    );
}

export default Contact;