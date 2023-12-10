import { TwitterLogoIcon } from '@radix-ui/react-icons'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { HomeIcon } from '@radix-ui/react-icons'

function Footer(): JSX.Element {
    return (

        <footer>
            <section id="footer-socials" aria-label="social media">
                <ul className="footer-icons">
                    <li><a href="https://twitter.com/" aria-label="twitter"><TwitterLogoIcon className='Icon' aria-label='twitter icon' /></a></li>
                    <li><a href="https://www.linkedin.com/" aria-label="linkedin"><LinkedInLogoIcon className='Icon' aria-label='linkedIn Icon' /></a></li>
                    <li><a href="https://www.instagram.com/" aria-label="Instagram"><InstagramLogoIcon className='Icon' aria-label='instagram icon' /></a></li>
                    <li><a href="https://discord.com/" aria-label="Discord"><DiscordLogoIcon className='Icon' aria-label='discord icon' /></a></li>
                    <li><a href="#home" aria-label="home"><HomeIcon className='Icon' aria-label='home icon' /></a></li>
                </ul>
            </section>

            <section id="footer-legal" aria-label="legal">
                <small>
                    <ul className="footer-legal-items">
                        <li><a href="#" aria-label='see terms & conditions'>Terms &amp; Conditions</a></li>
                        <li><a href="#" aria-label='see privacy policy'>Privacy Policy</a></li>
                        <li>Made by <a href="https://cgathua.pages.dev/" aria-label='cgathua' target="_blank">@cgathua</a></li>
                    </ul>
                </small>
            </section>
        </footer>
    );
}

export default Footer;