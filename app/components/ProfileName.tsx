interface ProfileNameProps {
  name: string;
  subname?: string;
}

const ProfileName: React.FC<ProfileNameProps> = ({ name, subname }) => (
  <div className="text-center mb-4">
    <p className="text-2xl font-semibold text-white">{name}</p>
    <p className="text-1xl font-semibold text-white">{subname}</p>
  </div>
);

export default ProfileName;
