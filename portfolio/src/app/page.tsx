import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {/* Replace with your actual image */}
              <Image 
                src="/Profile.PNG" // Change this to your image path
                alt="Ahmed Jamal"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Description */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Hi, I am <span className="text-indigo-600">[Ahmed Jamal]</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              [I am a passionate developer with a love for creating beautiful and functional web applications. 
              I enjoy working with modern technologies and am constantly learning new skills to improve my craft.]
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              [Currently I am a second year student at the ohio state university!]
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}