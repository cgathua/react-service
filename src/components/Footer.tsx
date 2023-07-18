import { TwitterLogoIcon } from '@radix-ui/react-icons'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { HomeIcon } from '@radix-ui/react-icons'
function Footer() {
    return (

        <footer>
            <section id="footer-socials" aria-label="social media">
                <ul className="footer-icons">
                    <li><a href="#" aria-label="twitter"><TwitterLogoIcon className='Icon' /></a></li>
                    <li><a href="#" aria-label="linkedin"><LinkedInLogoIcon className='Icon' /></a></li>
                    <li><a href="#" aria-label="Instagram"><InstagramLogoIcon className='Icon' /></a></li>
                    <li><a href="#" aria-label="Discord"><DiscordLogoIcon className='Icon' /></a></li>
                    <li><a href="#home" aria-label="home"><HomeIcon className='Icon' /></a></li>
                </ul>
            </section>

            <section id="footer-legal" aria-label="legal">
                <small>
                    <ul className="footer-legal-items">
                        <li><a href="#" aria-label='see terms & conditions'>Terms &amp; Conditions</a></li>
                        <li><a href="#" aria-label='see privacy policy'>Privacy Policy</a></li>
                        <li>Made by <a href="https://cgathua.pages.dev/" target="_blank" aria-label='website designer'>@cgathua</a></li>
                    </ul>
                </small>
            </section>
        </footer>
    );
}

export default Footer;