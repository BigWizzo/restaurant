import './style.css';
import { Landing } from './landing';
import { Contact } from './contact';
import { AboutUs } from './about';
import { Nav } from './nav';

Nav.createNav();
Landing.header();
Landing.main();
AboutUs.about();
Contact.footer();
