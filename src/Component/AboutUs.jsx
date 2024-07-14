const AboutUs = () => {
  return (
    <div className="about-us-page bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div
        className="hero-section bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{ backgroundImage: "url(https://example.com/hero-image.jpg)" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl font-bold mb-4">
            About Mechanical Keyboard Shop
          </h1>
          <p className="text-lg mb-6">
            Your go-to destination for premium mechanical keyboards
          </p>
          <a
            href="/products"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="our-story-section py-16 px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <p className="text-lg mb-4">
          Founded by keyboard enthusiasts, our journey began with a simple goal:
          to provide the best mechanical keyboards available. We believe in the
          perfect blend of quality, performance, and aesthetics, and this belief
          drives us every day.
        </p>
        <p className="text-lg">
          Our mission is to offer high-quality products, outstanding customer
          service, and to build a community for keyboard lovers. Join us in
          exploring the exciting world of mechanical keyboards!
        </p>
      </div>

      {/* Our Values Section */}
      <div className="our-values-section bg-gray-200 py-16 px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-4">
            <strong>Quality:</strong> We prioritize high-quality products that
            provide an excellent typing experience.
          </li>
          <li className="text-lg mb-4">
            <strong>Customer Service:</strong> We are dedicated to providing
            exceptional service and support to our customers.
          </li>
          <li className="text-lg mb-4">
            <strong>Community:</strong> We aim to create a welcoming and
            inclusive community for keyboard enthusiasts.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
