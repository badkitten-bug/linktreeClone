import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div>
        <div className="items-center">
          <div className="items-center"><Image src="/dinosaur.png" alt="PhotoUser" width={90} height={90} /></div>
          <p className="text-center">The all-Business</p>
        </div>
        <div className="border-green-400 text-center">
          <div className="bg-slate-100 mt-4">
            <Image src="/github.png" alt="PhotoUser" width={50} height={50} />
            <button className="bg-red-800"> My portfolio</button>
          </div>
          <div className="bg-slate-100 mt-4">
            <Image src="/github.png" alt="PhotoUser" width={50} height={50} />
            <button className="bg-red-800"> Business blog</button>
          </div>
          <div className="bg-slate-100 mt-4">
            <Image src="/github.png" alt="PhotoUser" width={50} height={50} />
            <button className="bg-red-800"> Forbes interview</button>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="m-4">Facebook</div>
          <div className="m-4">Github</div>
          <div className="m-4">Linkedin</div>
        </div>
      </div>
    </main>
  );
}
