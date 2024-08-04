
import React from "react";

const SocialLinks: React.FC = () => (
  <div className="flex justify-center mt-10 space-x-6">
    {["Facebook", "Github", "Linkedin"].map((platform, idx) => (
      <div
        key={idx}
        className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
      >
        {platform}
      </div>
    ))}
  </div>
);

export default SocialLinks;
