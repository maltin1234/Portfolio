import { FaUser } from "react-icons/fa"; // Import user icon

export default function DashCard({ user }) {
  const getCardStyle = (rank) => {
    switch (rank) {
      case "Gold":
        return "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-[3px] border-[#d4af37] shadow-[0_4px_15px_rgba(212,175,55,0.5)]";
      case "Silver":
        return "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-[3px] border-gray-400 shadow-[0_4px_15px_rgba(192,192,192,0.5)]";
      case "Bronze":
        return "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-[3px] border-[#cd7f32] shadow-[0_4px_15px_rgba(205,127,50,0.5)]";
      default:
        return "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-[3px] border-gray-700 shadow-md";
    }
  };

  const rank = "Gold"; // Example rank

  return (
    <div
      className={`relative ${getCardStyle(
        rank
      )} rounded-lg w-96 h-[400px] mx-auto p-6 text-center flex flex-col justify-between`} // Increased height
    >
      {/* Top Section */}
      <div>
        {/* User Avatar */}
        <div className="rounded-full border-[3px] border-[#d4af37] w-24 h-24 mx-auto bg-gray-800 overflow-hidden shadow-md flex items-center justify-center">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="User Avatar"
              className="object-cover w-full h-full"
            />
          ) : (
            <FaUser className="text-gray-500 text-4xl" />
          )}
        </div>

        {/* User Info */}
        <h2 className="text-xl font-bold text-gray-100 mt-4">{user.username}</h2>
        <p className="text-gray-300 text-sm mt-2">{user.description || "No description provided."}</p>
      </div>

      {/* Ratings Section */}
      <div className="text-left bg-gray-800 bg-opacity-90 rounded-lg p-4 mt-4 overflow-y-auto h-[120px]">
        <h3 className="text-lg font-bold text-gray-100 mb-2">Ratings:</h3>
        {user.ratings?.length > 0 ? (
          user.ratings.map((rating) => (
            <div
              key={rating.id}
              className="bg-gray-900 rounded-lg p-2 mb-2 border border-gray-700"
            >
              <p className="text-sm text-gray-300">Feedback: {rating.feedback}</p>
              <p className="text-sm text-[#d4af37]">Rating: {rating.rating}/5</p>
            </div>
          ))
        ) : (
          <p className="text-gray-300 text-sm">No ratings available.</p>
        )}
      </div>

      {/* Bottom Section */}
      <div>
        <a
          href={user.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 underline text-sm inline-block"
        >
          View LinkedIn
        </a>

        <button className="bg-[#d4af37] text-gray-900 px-6 py-2 mt-4 rounded-lg shadow-md font-semibold hover:bg-[#c3a037] transition duration-200 text-sm">
          Preview
        </button>
      </div>
    </div>
  );
}
