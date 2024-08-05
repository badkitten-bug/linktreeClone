import Image from "next/image";
interface LinkButtonProps {
  label: string;
  url: string;
  iconUrl?: string;
  customClass?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  url,
  iconUrl,
  customClass,
}) => (
  <div className={`w-full sm:w-auto mt-4 `}>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block"
    >
      <button className={`bg-custom-rojo text-white py-5 px-6 w-full max-w-full rounded-full transition-colors shadow-md text-lg flex items-center relative ${customClass}`}>
        {iconUrl && (
          <Image
            src={iconUrl}
            alt="icon"
            width={24}
            height={24}
            className="mr-4"
          />
        )}
        <div className="absolute left-0 right-0 flex justify-center">
          <span className="hover-text font-outfit font-extrabold">{label}</span>
        </div>
      </button>
    </a>
  </div>
);

export default LinkButton;
