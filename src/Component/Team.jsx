const Team = () => {
  return (
    <div className="our-team-section py-16 px-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center">
        <div className="team-member bg-white p-4 m-4 rounded-md shadow-lg text-center">
          <img
            src="https://example.com/team-member1.jpg"
            alt="Team Member 1"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="text-gray-600">Co-Founder & CEO</p>
        </div>
        <div className="team-member bg-white p-4 m-4 rounded-md shadow-lg text-center">
          <img
            src="https://example.com/team-member2.jpg"
            alt="Team Member 2"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold">Jane Smith</h3>
          <p className="text-gray-600">Co-Founder & CTO</p>
        </div>
        <div className="team-member bg-white p-4 m-4 rounded-md shadow-lg text-center">
          <img
            src="https://example.com/team-member1.jpg"
            alt="Team Member 1"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="text-gray-600">Co-Founder & CEO</p>
        </div>
        <div className="team-member bg-white p-4 m-4 rounded-md shadow-lg text-center">
          <img
            src="https://example.com/team-member2.jpg"
            alt="Team Member 2"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold">Jane Smith</h3>
          <p className="text-gray-600">Co-Founder & CTO</p>
        </div>
        <div className="team-member bg-white p-4 m-4 rounded-md shadow-lg text-center">
          <img
            src="https://example.com/team-member1.jpg"
            alt="Team Member 1"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="text-gray-600">Co-Founder & CEO</p>
        </div>
        <div className="team-member bg-white p-4 m-4 rounded-md shadow-lg text-center">
          <img
            src="https://example.com/team-member2.jpg"
            alt="Team Member 2"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold">Jane Smith</h3>
          <p className="text-gray-600">Co-Founder & CTO</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default Team;
