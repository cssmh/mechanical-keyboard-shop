import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-section bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Mechanical Keyboard Shop. All rights reserved.</p>
        <div className="social-links flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
