import { Code, Database, GitBranch, Box, PenTool, Zap, Server, Layers } from 'lucide-react';

interface SkillsProps {
  registerSection?: (id: string, element: HTMLElement | null) => void;
  isDark?: boolean;
}

interface SkillCategory {
  category: string;
  skills: Array<{ name: string; level: number; icon: string }>;
}

export const Skills = ({ registerSection, isDark = false }: SkillsProps) => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Programming',
      skills: [
        { name: 'C', level: 80, icon: 'code' },
        { name: 'C++', level: 75, icon: 'code' },
        { name: 'JAVA', level: 85, icon: 'code' },
        { name: 'C#', level: 80, icon: 'code' },
      ],
    },
    {
      category: 'Engineering',
      skills: [
        { name: 'Basic Electronics', level: 80, icon: 'zap' },
        { name: 'Simple Circuits', level: 75, icon: 'layers' },
        { name: 'Electric Measurements', level: 70, icon: 'database' },
        { name: 'Wiring & Connections', level: 80, icon: 'server' },
      ],
    },
    {
      category: 'Website Development',
      skills: [
        { name: 'HTML', level: 95, icon: 'pen-tool' },
        { name: 'CSS', level: 80, icon: 'box' },
        { name: 'React', level: 85, icon: 'code' },
        { name: 'Javascript', level: 90, icon: 'code' },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 80, icon: 'git-branch' },
        { name: 'VS Code', level: 97, icon: 'code' },
        { name: 'Wordpress', level: 95, icon: 'box' },
        { name: 'Github', level: 90, icon: 'git-branch' },
      ],
    },
  ];

  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white/50 border-slate-300';
  const textPrimary = isDark ? 'text-slate-200' : 'text-slate-800';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-600';
  const progressBg = isDark ? 'bg-slate-800' : 'bg-slate-300';

  const getIcon = (icon: string) => {
    const iconMap: Record<string, JSX.Element> = {
      code: <Code className="w-6 h-6 text-cyan-400" />,
      database: <Database className="w-6 h-6 text-cyan-400" />,
      'git-branch': <GitBranch className="w-6 h-6 text-cyan-400" />,
      box: <Box className="w-6 h-6 text-cyan-400" />,
      'pen-tool': <PenTool className="w-6 h-6 text-cyan-400" />,
      zap: <Zap className="w-6 h-6 text-cyan-400" />,
      server: <Server className="w-6 h-6 text-cyan-400" />,
      layers: <Layers className="w-6 h-6 text-cyan-400" />,
    };
    return iconMap[icon] || <Code className="w-6 h-6 text-cyan-400" />;
  };

  return (
    <section
      id="skills"
      ref={(el) => registerSection && registerSection('skills', el)}
      className="min-h-screen py-20 px-4 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-black">
          Skills & Expertise
        </h2>
        {/* Gradient line below heading */}
        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${cardBg} backdrop-blur-sm p-6 md:p-8 rounded-xl border transition-all`}
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category.category}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    {getIcon(skill.icon)}
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className={`font-medium ${textPrimary}`}>{skill.name}</span>
                        <span className={textSecondary}>{skill.level}%</span>
                      </div>
                      <div className={`w-full ${progressBg} rounded-full h-2 overflow-hidden`}>
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
