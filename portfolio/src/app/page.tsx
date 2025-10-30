import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gold">
              <Image 
                src="/Profile.PNG"
                alt="Your Name"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Description */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gold mb-4">
              Hi, I'm <span className="text-white">[Your Name]</span>
            </h1>
            <p className="text-lg text-gold mb-6 leading-relaxed">
              [Write a brief description about yourself here.]
            </p>
            <p className="text-lg text-gold leading-relaxed">
              [Add another sentence or two about your interests.]
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}