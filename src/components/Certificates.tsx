import { Award, ExternalLink, Calendar, Zap, Users, BookOpen } from 'lucide-react';
import { useState } from 'react';

function Certificates() {
  const [activeTab, setActiveTab] = useState<'certifications' | 'hackathons' | 'presentations'>('certifications');

  const certificates = [
    {
      title: 'Python for Machine Learning an Data Science',
      issuer: 'Udemy',
      date: '21/12/2025',
      link: '/ml&ds.jpg', 
    },
    {
      title: 'React Professional Certification',
      issuer: 'React Institute',
      date: '2023',
      description: 'Deep dive into React ecosystem, hooks, state management, and performance optimization.',
      link: '#',
    },
    {
      title: 'UI/UX Design Principles',
      issuer: 'Design School',
      date: '2023',
      description: 'User-centered design methodologies and best practices for creating intuitive interfaces.',
      link: '#',
    },
    {
      title: 'Full Stack Development',
      issuer: 'Code University',
      date: '2022',
      description: 'End-to-end web application development from frontend to backend and deployment.',
      link: '#',
    },
  ];

  const hackathons = [
    {
      title: 'DevHack 2024',
      description: 'Won 1st place for innovative AI-powered web application',
      date: '2024',
      prize: '1st Prize',
    },
    {
      title: 'TechFest Hackathon',
      description: 'Developed a mobile-first e-commerce platform',
      date: '2023',
      prize: 'Finalist',
    },
    {
      title: 'Web Innovation Challenge',
      description: 'Created a real-time collaboration tool',
      date: '2023',
      prize: 'Top 10',
    },
  ];

  const presentations = [
    {
      title: 'React Performance Optimization',
      event: 'Tech Conference 2024',
      date: '2024',
      attendees: '150+',
    },
    {
      title: 'Modern CSS Techniques',
      event: 'Web Development Meetup',
      date: '2023',
      attendees: '80+',
    },
    {
      title: 'Building Scalable APIs',
      event: 'Developer Summit 2023',
      date: '2023',
      attendees: '120+',
    },
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">Professional certifications and accomplishments</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'certifications'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Award size={18} />
            Certifications
          </button>
          <button
            onClick={() => setActiveTab('hackathons')}
            className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'hackathons'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Zap size={18} />
            Hackathons ({hackathons.length})
          </button>
          <button
            onClick={() => setActiveTab('presentations')}
            className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'presentations'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <BookOpen size={18} />
            Papers & Talks ({presentations.length})
          </button>
        </div>

        {/* Certifications Content */}
        {activeTab === 'certifications' && (
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="text-white" size={24} />
                  </div>
                  {/* FIXED: Using anchor tag for external links to photos */}
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all"
                    title="View Certificate"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{cert.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-slate-400 text-sm">{cert.issuer}</span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-slate-400 text-sm">
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Hackathons Content */}
        {activeTab === 'hackathons' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="text-white" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold">
                    {hackathon.prize}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{hackathon.title}</h3>
                <p className="text-slate-300 text-sm mb-3 leading-relaxed">{hackathon.description}</p>
                <div className="flex items-center gap-1 text-slate-400 text-sm">
                  <Calendar size={14} />
                  {hackathon.date}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Presentations Content */}
        {activeTab === 'presentations' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentations.map((presentation, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-xs bg-slate-800/50 px-2 py-1 rounded-full">
                    <Users size={12} />
                    {presentation.attendees}
                  </div>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{presentation.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{presentation.event}</p>
                <div className="flex items-center gap-1 text-slate-400 text-sm">
                  <Calendar size={14} />
                  {presentation.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Certificates;