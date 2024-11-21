import React from "react";
import { FaUser, FaLinkedin, FaGithub } from "react-icons/fa";

const DashCard = ({ user, onClick }) => {
  const getCardStyle = (rank) => {
    switch (rank) {
      case "Gold":
        return "border-[#d4af37]";
      case "Silver":
        return "border-gray-400";
      case "Bronze":
        return "border-[#cd7f32]";
      default:
        return "border-gray-700";
    }
  };

  // Default hardcoded technologies
  const defaultTechnologies = ["React", "Node.js", "GraphQL", "Docker", "AWS"];

  // Calculate average rating
  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return "N/A";
    const total = ratings.reduce((sum, r) => sum + r.rating, 0);
    return (total / ratings.length).toFixed(1);
  };

  return (
    <div
      className={`cursor-pointer bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 border-[3px] ${getCardStyle(
        user.rank
      )} shadow-md rounded-lg p-4 flex flex-col items-center`}
      onClick={onClick}
    >
      {/* User Avatar */}
      <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center mb-4">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="User Avatar"
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          <FaUser className="text-gray-500 text-4xl" />
        )}
      </div>

      {/* User Info */}
      <h2 className="text-lg font-semibold text-gray-100">{user.username}</h2>
      <p className="text-sm text-gray-400 mt-2">
        {user.profession || "Professional"}
      </p>
      <p className="text-gray-300 text-center text-sm mt-2">
        {user.description || "No description provided."}
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        {(user.technologies || defaultTechnologies).slice(0, 5).map((tech, index) => (
          <span
            key={index}
            className="bg-gray-600 text-gray-100 text-xs px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Ratings Section */}
      <div className="bg-gray-700 bg-opacity-80 p-2 mt-4 rounded-lg w-full">
        <h3 className="text-sm text-gray-300 font-semibold">
          Average Rating:{" "}
          <span className="text-[#d4af37]">{calculateAverageRating(user.ratings)}</span>
        </h3>
        {user.ratings &&
          user.ratings.slice(0, 3).map((rating, index) => (
            <div
              key={index}
              className="text-xs text-gray-300 mt-1 flex justify-between"
            >
              <span>Feedback: {rating.feedback}</span>
              <span className="text-[#d4af37]">Rating: {rating.rating}/5</span>
            </div>
          ))}
      </div>

      {/* Links */}
      <div className="flex space-x-4 mt-4">
        {user.linkedin_url && (
          <a
            href={user.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:text-[#005983] transition duration-200"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {user.github_url && (
          <a
            href={user.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition duration-200"
          >
            <FaGithub size={20} />
          </a>
        )}
      </div>

      {/* View Portfolio Button */}
      <div className="mt-auto w-full flex justify-center">
        <button className="bg-[#d4af37] text-gray-900 px-4 py-1 mt-4 rounded-full font-semibold hover:bg-[#c3a037] transition duration-200 text-sm">
          View Portfolio
        </button>
      </div>
    </div>
  );
};

export default DashCard;
