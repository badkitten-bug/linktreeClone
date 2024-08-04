import LinkButton from "@/components/LinkButton";
import ProfileName from "@/components/ProfileName";
import ProfilePicture from "@/components/ProfilePicture";
import SocialLinks from "@/components/SocialLinks";

const Home: React.FC = () => {
  const links = [
    {
      id: 1,
      label: "Desarrolla tu ERP con Odoo",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },
    {
      id: 2,
      label: "Canal de Youtube",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },  
    {
      id: 3,
      label: "Siguenos Facebook",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },
    {
      id: 4,
      label: "Webs desde 1 sol",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },
    {
      id:5,
      label: "Instagram",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },
  ];

  return (
    <main
      className="flex flex-col items-center p-0 sm:p-16 md:p-24 bg-gray-100 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/background.png')" }}
    >
      <ProfilePicture src="/jzolutions.png" alt="Profile Picture" />
      <ProfileName name="@Jzolutions" subname="Desarrollo de Software con Odoo." />
      <div className="w-full sm:w-2/3 lg:w-1/2 ">
        {links.map((link, idx) => (
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
