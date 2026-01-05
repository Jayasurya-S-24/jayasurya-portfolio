import { User, Briefcase, GraduationCap, Heart } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a ML Enngineer who is self driven, passonate and also have the knowledge in working with data pipelines, ETL tools and cloud platforms.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
             I started my engineering journey as a backend developer in Python with flask, which gave me a solid programming foundation. 
             Over time, I moved into machine learning, where I worked on data preprocessing, model training, and evaluation to build complete solutions for real time problems. 
             To complement that, I learned data engineering concepts like ETL and pipeline building on cloud platforms.
             So I'm comfortable working as an ML engineer and also supporting data engineering needs when the project requires it.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Experience</h3>
              <p className="text-slate-400">Fresher</p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Education</h3>
              <p className="text-slate-400">Bachelor in Information Technology</p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Projects</h3>
              <p className="text-slate-400">5+ Completed</p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Passion</h3>
              <p className="text-slate-400">Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
