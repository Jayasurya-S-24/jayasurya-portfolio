import { ExternalLink, Github, Sparkles } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'AI-Resume Analyzer',
      description: 'A AI powered resume analysis tool that helps the recriuters to filter the resumes based on skills and experience using llm  models and with more additional features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Flask', 'PostgreSQL', 'LLM','API Integration'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Campus fire detection system',
      description: 'A mobile application for early detection of fire in campus using iot sensors and ML models to alert the authorities and prevent fire hazards. ',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Chart.js', 'Tailwind', 'API'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management app for assigning, tracking, and completing tasks. ',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TypeScript', 'React', 'Flask', 'MongoDB'],
      demoLink: 'https://staffs-to-do-list.vercel.app',
      githubLink: 'https://github.com/Jayasurya-S-24/Staffs-To-Do-list-1',
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for portfolio websites with customizable templates and SEO optimization.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Supabase', 'Tailwind', 'MDX'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'OpenWeather API', 'Leaflet', 'CSS3'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'Workout tracking application with progress analytics, goal setting, and exercise library.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'MongoDB', 'Express', 'Charts'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'Workout tracking application with progress analytics, goal setting, and exercise library.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'MongoDB', 'Express', 'Charts'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'Workout tracking application with progress analytics, goal setting, and exercise library.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'MongoDB', 'Express', 'Charts'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">Showcasing my recent work and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all hover:scale-105 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-cyan-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles className="text-cyan-400" size={16} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
