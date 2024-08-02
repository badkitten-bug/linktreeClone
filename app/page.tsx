import Image from "next/image";

export default function Home() {
  const links = [
    { label: "Brookerty", icon: "/github.png", url: "https://www.brookerty.com/" },
    { label: "Brookerty", icon: "/github.png", url: "https://www.brookerty.com" },
    { label: "Brookerty", icon: "/github.png", url: "https://www.brookerty.com" },
  ];

  return (
    <main className="flex flex-col items-center p-8 sm:p-16 md:p-24 mt-20">
      <div className="text-center">
        <div className="flex flex-col items-center mb-6">
          <Image src="/dinosaur.png" alt="PhotoUser" width={90} height={90} className="rounded-full" />
          <p className="mt-4 text-lg font-semibold">Brookerty</p>
        </div>
        <div className="w-full sm:w-2/3 lg:w-1/2">
          {links.map((link, idx) => (
            <div key={idx} className="bg-slate-100 mt-4 p-4 flex items-center justify-center rounded-lg shadow-md">
              <Image src={link.icon} alt={`${link.label} icon`} width={30} height={30} className="mr-4" />
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="bg-red-800 text-white py-2 px-6 w-full rounded-full hover:bg-red-700 transition-colors">
                  {link.label}
                </button>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 space-x-6">
          {["Facebook", "Github", "Linkedin"].map((platform, idx) => (
            <div key={idx} className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
              {platform}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
