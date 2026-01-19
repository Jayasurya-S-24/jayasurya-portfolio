import { Download, Github, Linkedin, Mail } from 'lucide-react';

const STATIC_PHOTO_PATH = '/jayasurya-profile.jpg';
const STATIC_RESUME_PATH = '/My_Resume.pdf';

function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = STATIC_RESUME_PATH;
    link.download = 'resume.pdf';
    link.click();
    link.remove();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="text-cyan-400 text-2xl font-semibold">Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Jayasurya Senthil
              <br />
              <span className=" bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-3">
                ML Engineer
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
              Transforming ideas into elegant digital solutions with passion and precision.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href='/resume.pdf'
                download={true}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/Jayasurya-S-24"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jayasurya-s-bb151a31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src='/hero.jpg'
                  alt="Profile"
                  className="w-full object-top h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;