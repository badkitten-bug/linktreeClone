import ProfileName from '../app/components/ProfileName';
import LinkButton from '../app/components/LinkButton';
import ProfilePicture from './components/ProfilePicture';
const Home: React.FC = () => {
  const links = [
    { label: "Claim your linktree", url: "https://www.google.com" },
    { label: "Business Blog", url: "https://www.google.com" },
    { label: "Forbes Interview", url: "https://www.google.com" },
  ];

  return (
    <main className="flex flex-col items-center p-8 sm:p-16 md:p-24 bg-gray-100 min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/background.png')" }}>
      <ProfilePicture src="/dinosaur.png" alt="Profile Picture" />
      <ProfileName name="Brookerty" subname="Your place to learn what's new and discover what's good at Linktree."/>
      <div className="w-full sm:w-2/3 lg:w-1/2">
        {links.map((link, idx) => (
          <LinkButton key={idx} label={link.label} url={link.url} />
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-6">
        {["Facebook", "Github", "Linkedin"].map((platform, idx) => (
          <div key={idx} className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
            {platform}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
