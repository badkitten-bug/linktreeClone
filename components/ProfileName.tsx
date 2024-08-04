import Image from "next/image";

interface ProfileNameProps {
  name: string;
  subname?: string;
  iconUrl?: string;
}

const ProfileName: React.FC<ProfileNameProps> = ({
  name,
  subname,
  iconUrl,
}) => (
  <div className="text-center flex flex-col items-center space-y-2">
    <div className="flex items-center space-x-2">
      <h1 className="text-2xl font-bold text-slate-100">{name}</h1>

      {iconUrl && (
        <div className="flex-shrink-0">
          <Image src={iconUrl} alt="icon" width={24} height={24} />
        </div>
      )}
    </div>
    {subname && <p className="text-slate-200">{subname}</p>}
  </div>
);

export default ProfileName;
