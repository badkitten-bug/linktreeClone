interface LinkButtonProps {
  label: string;
  url: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ label, url }) => (
  <div className="w-full mt-4">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block"
    >
      <button className="bg-slate-900 text-white py-4 px-6 w-full rounded-full hover:bg-slate-800 transition-colors shadow-md text-console.log();
      ">
        {label}
      </button>
    </a>
  </div>
);

export default LinkButton;
