import Image from "next/image";

interface ProfilePictureProps {
  src: string;
  alt: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, alt }) => (
  <div className="flex flex-col items-center mb-6">
    <Image
      src={src}
      alt={alt}
      width={90}
      height={90}
      className="rounded-full"
    />
  </div>
);

export default ProfilePicture;
