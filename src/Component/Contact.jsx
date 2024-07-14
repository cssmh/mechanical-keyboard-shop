import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-info-section bg-gray-200 py-16 px-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <p className="text-lg text-center mb-6">
        Wed love to hear from you! Reach out to us with any questions or
        feedback.
      </p>
      <div className="flex justify-center space-x-4">
        <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800" />
        <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
        <FaInstagram className="text-2xl text-pink-600 hover:text-pink-800" />
        <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900" />
      </div>
    </div>
  );
};

export default Contact;
