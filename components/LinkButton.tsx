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
  <div className={`w-full mt-4 ${customClass}`}>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block"
    >
      <button className="bg-slate-900 text-white py-4 px-6 w-full rounded-full hover:bg-slate-800 transition-colors shadow-md text-lg flex items-center relative">
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
          <span>{label}</span>
        </div>
      </button>
    </a>
  </div>
);

export default LinkButton;
