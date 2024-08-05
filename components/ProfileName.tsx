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
    </div>
    <p className="color-text-verde">{subname}</p>
  </div>
);

export default ProfileName;
