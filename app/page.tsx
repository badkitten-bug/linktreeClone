import LinkButton from "@/components/LinkButton";
import ProfileName from "@/components/ProfileName";
import ProfilePicture from "@/components/ProfilePicture";
import SocialLinks from "@/components/SocialLinks";

const Home: React.FC = () => {
  const links = [
    {
      id: 1,
      label: "Renacimiento",
      url: "https://brookerty.com/?paged=0&listing_page_id=25144&areas%5B%5D=renacimiento&v=4ea34d044500",
    },
    {
      id: 2,
      label: "Bella Vista",
      url: "https://brookerty.com/?paged=0&listing_page_id=25144&areas%5B%5D=bella-vista&v=4ea34d044500",
    },
    {
      id: 3,
      label: "Piantini",
      url: "https://brookerty.com/?paged=0&listing_page_id=25144&areas%5B%5D=piantini&v=4ea34d044500",
    },
    {
      id: 4,
      label: "Cacicazgos",
      url: "https://brookerty.com/?paged=0&listing_page_id=25144&areas%5B%5D=cacicazgos&v=4ea34d044500",
    },
    {
      id: 5,
      label: "Evarito Morales",
      url: "https://brookerty.com/?paged=0&listing_page_id=25144&areas%5B%5D=evaristo-morales&v=4ea34d044500",
      customClass: "bg-custom-rojo",
    },
  ];

  return (
    <main
      className="flex flex-col items-center p-4 sm:p-16 md:p-24 bg-gray-100 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgroundLivingRoom.jpg')" }}
    >
      <div className="relative w-full sm:w-3/4 lg:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent rounded-lg opacity-90 pointer-events-none"></div>
        <div className="relative z-10 bg-opacity-90 rounded-lg shadow-lg p-8 text-center">
          <ProfilePicture src="/logoBrookertyCheck.png" alt="Profile Picture" />
          <p className="font-montserrat font-semibold text-xl text-custom-verde mt-4">
            Ingresa a tu sector
          </p>
          <p className="font-montserrat font-semibold text-xl text-custom-verde mt-2 mb-8">
            y encuentra una renta fácil
          </p>
          <ProfilePicture src="/logoRentas.png" alt="Profile Picture" />
          <div className="w-full">
            {links.map((link) => (
              <LinkButton key={link.id} label={link.label} url={link.url} customClass={link.customClass} />
            ))}
          </div>
          <div className="w-full mt-2 py-6">
            <a href="https://brookerty.com/?page_id=16053&v=4ea34d044500" target="_blank" rel="noopener noreferrer" className="w-full block">
              <button
                className={`bg-custom-verde text-white py-6 px-6 w-full max-w-full rounded-full transition-colors shadow-md text-lg flex items-center relative`}
              >
                <div className="absolute left-0 right-0 flex justify-center">
                  <span className="hover-text font-outfit font-extrabold">
                    Coloca una propiedad
                  </span>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
