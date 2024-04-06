import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="sticky inset-x-0 bottom-0 z-50 backdrop-blur-smooth flex items-center justify-center h-14 px-4 text-sm bg-gray-100">
      <a href="https://www.linkedin.com/in/kade93" target="_blank" className="mx-2 text-gray-600 hover:text-blue-600">
        <FontAwesomeIcon icon={faLinkedin as IconProp} className="text-xl sm:text-2xl" />
      </a>
      <a href="https://github.com/kade93" target="_blank" className="mx-2 text-gray-600 hover:text-black">
        <FontAwesomeIcon icon={faGithub as IconProp} className="text-xl sm:text-2xl" />
      </a>
      <a href="https://stackoverflow.com/users/14581797/kade-youn" target="_blank" className="mx-2 text-gray-600 hover:text-orange-500">
        <FontAwesomeIcon icon={faStackOverflow as IconProp} className="text-xl sm:text-2xl" />
      </a>
    </div>
  );
}

export default Footer;
