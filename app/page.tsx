import LinkButton from "@/components/LinkButton";
import ProfileName from "@/components/ProfileName";
import ProfilePicture from "@/components/ProfilePicture";
import SocialLinks from "@/components/SocialLinks";

const Home: React.FC = () => {
  const links = [
    {
      id: 1,
      label: "ERP con Odoo",
      url: "https://www.jzolutions.com/landing/lead-generation",
      iconUrl: "/erp.png",
    },
    {
      id: 2,
      label: "Canal de Youtube",
      url: "https://www.youtube.com/@jzolutions",
      iconUrl: "/youtube.png",
    },
    {
      id: 3,
      label: "Siguenos Facebook",
      url: "https://www.facebook.com/profile.php?id=100068116758884",
      iconUrl: "/facebook.png",
    },
    {
      id: 4,
      label: "Webs desde 1 sol",
      url: "https://www.jzolutions.com",
      iconUrl: "/web.png",
    },
    {
      id:5,
      label: "Instagram",
      url: "https://www.instagram.com/jzolutions/",
      iconUrl: "/instagram.png",
    },
  ];

  return (
    <main
      className="flex flex-col items-center  p-16 sm:p-16 md:p-24 bg-gray-100 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/background.png')" }}
    >
      <ProfilePicture src="/jzolutions.png" alt="Profile Picture" />
      <ProfileName name="@Jzolutions" subname="Desarrollo de Software con Odoo." iconUrl="/check.svg" />
      <div className="w-full sm:w-2/3 lg:w-1/2 ">
        {links.map((link) => (
          <LinkButton
            key={link.id}
            label={link.label}
            url={link.url}
            iconUrl={link.iconUrl}
          />
        ))}
      </div>
      <SocialLinks />
    </main>
  );
};

export default Home;
