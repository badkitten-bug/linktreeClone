import Image from "next/image";

interface ProfilePictureProps {
  src: string;
  alt: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, alt }) => (
  <div className="flex flex-col items-center mb-1 mt-3">
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      className="mb-2"
    />
  </div>
);

export default ProfilePicture;
