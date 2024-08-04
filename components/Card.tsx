
import React from "react";
import LinkButton from "./LinkButton";

interface CardProps {
  label: string;
  url: string;
  iconUrl?: string;
  customClass?: string;
}

const Card: React.FC<CardProps> = ({ label, url, iconUrl ,customClass }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
    <LinkButton label={label} url={url}  iconUrl={iconUrl} customClass={customClass} />
  </div>
);

export default Card;
