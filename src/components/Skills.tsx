import { Code2, Database, Palette, Smartphone, Globe, Zap, Heart, Users, Lightbulb, Award, Video } from 'lucide-react';
import { useState } from 'react';

function Skills() {
  const [activeTab, setActiveTab] = useState<'technical' | 'non-technical'>('technical');

  const technicalSkills = [
    {
      icon: Code2,
      title: 'Python',
      skills: ['Numpy', 'Pandas', 'Matplotlib', 'Sckitlearn','Seaborn','Flask'],
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Database,
      title: 'Databsase',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'Responsive Design', ],
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Machine Learning',
      skills: ['Supervised learning', 'Unsupervised learning', 'Semi supervised learning'],
      color: 'from-orange-400 to-red-500',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', ],
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Zap,
      title: 'Tools',
      skills: ['Github', 'VS Code', 'Docker',],
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  const nonTechnicalSkills = [
    {
      icon: Users,
      title: 'Communication',
      skills: ['Presentation', 'Collaboration', 'Client Relations', 'Documentation'],
      color: 'from-pink-400 to-rose-500',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      skills: ['Critical Thinking', 'Creativity', 'Analytical Skills', 'Research'],
      color: 'from-yellow-400 to-amber-500',
    },
    {
      icon: Award,
      title: 'Leadership',
      skills: ['Team Management', 'Decision Making', 'Mentoring', 'Project Management'],
      color: 'from-indigo-400 to-blue-500',
    },
    {
      icon: Heart,
      title: 'Designing',
      skills: ['Canva Design', 'Creativity', 'Editting', ],
      color: 'from-red-400 to-pink-500',
    },
     {
      icon: Video,
      title: 'Video Editting',
      skills: ['Editting Videos', 'Animations',  ],
      color: 'from-red-400 to-pink-500',
    },
  ];

  const skillCategories = activeTab === 'technical' ? technicalSkills : nonTechnicalSkills;

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">Technologies and expertise</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === 'technical'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab('non-technical')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === 'non-technical'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Non-Technical Skills
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-105 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="text-white" size={28} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
