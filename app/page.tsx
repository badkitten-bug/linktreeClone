import LinkButton from "@/components/LinkButton";
import ProfileName from "@/components/ProfileName";
import ProfilePicture from "@/components/ProfilePicture";
import SocialLinks from "@/components/SocialLinks";

const Home: React.FC = () => {
  const links = [
    {
      label: "Pagina web para cuidar casas",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },
    {
      label: "My Portfolio",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },
    {
      label: "Business Blog",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },
    {
      label: "Vuelos Baratos",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },
    {
      label: "Instagram",
      url: "https://www.google.com",
      iconUrl: "/github.png",
    },
  ];

  return (
    <main
      className="flex flex-col items-center p-8 sm:p-16 md:p-24 bg-gray-100 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/background.png')" }}
    >
      <ProfilePicture src="/dinosaur.png" alt="Profile Picture" />
      <ProfileName name="@Steve" subname="HOUSITTING POR EL MUNDO." />
      <div className="w-full sm:w-2/3 lg:w-1/2">
        {links.map((link, idx) => (
          <LinkButton
            key={idx}
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
