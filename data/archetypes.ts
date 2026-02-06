import { Archetype } from '../types/quiz';

export const archetypes: Record<string, Archetype> = {
  sentinel: {
    key: 'sentinel',
    name: 'Sentinel',
    title: 'The Privacy Guardian',
    description: 'You are the shield in the shadows. Sentinels are the vigilant protectors of the Endless ecosystem, always watching for threats and ensuring the safety of the community. Your instinct is to defend, secure, and preserve what matters most.',
    coreTrait: 'Protection-focused',
    color: '#6366f1',
    gradient: 'from-indigo-600 via-purple-600 to-indigo-800',
    icon: 'shield',
    actions: [
      'Review and audit smart contracts for vulnerabilities',
      'Help newcomers understand privacy best practices',
      'Participate in security bounty programs',
      'Create guides on protecting digital assets'
    ],
    quote: '"In the endless void, I am the light that guards the way."'
  },
  weaver: {
    key: 'weaver',
    name: 'Weaver',
    title: 'The Community Connector',
    description: 'You are the thread that binds. Weavers create the invisible connections that transform strangers into allies. Your gift is seeing potential in people and bringing them together to create something greater than themselves.',
    coreTrait: 'Relationship builder',
    color: '#ec4899',
    gradient: 'from-pink-500 via-rose-500 to-purple-600',
    icon: 'heart-handshake',
    actions: [
      'Welcome and onboard new community members',
      'Organize virtual meetups and events',
      'Bridge conversations between different groups',
      'Celebrate community achievements and milestones'
    ],
    quote: '"Every connection is a thread in the infinite tapestry."'
  },
  oracle: {
    key: 'oracle',
    name: 'Oracle',
    title: 'The Insight Provider',
    description: 'You are the voice of wisdom. Oracles possess the rare ability to see patterns others miss and translate complexity into clarity. Your knowledge illuminates the path forward for those seeking understanding.',
    coreTrait: 'Knowledge sharer',
    color: '#8b5cf6',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    icon: 'eye',
    actions: [
      'Create educational content and tutorials',
      'Answer questions in community channels',
      'Analyze trends and share insights',
      'Mentor those seeking to deepen their knowledge'
    ],
    quote: '"Truth reveals itself to those who seek with open minds."'
  },
  builder: {
    key: 'builder',
    name: 'Builder',
    title: 'The Technical Creator',
    description: 'You are the architect of tomorrow. Builders transform ideas into reality through code, documentation, and innovation. Your hands shape the very foundation upon which the Endless ecosystem grows.',
    coreTrait: 'Technical creator',
    color: '#10b981',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    icon: 'hammer',
    actions: [
      'Contribute code to open-source projects',
      'Build tools and integrations for the ecosystem',
      'Improve documentation and technical guides',
      'Prototype new features and innovations'
    ],
    quote: '"From nothing, we create everything."'
  },
  ghost: {
    key: 'ghost',
    name: 'Ghost',
    title: 'The Silent Observer',
    description: 'You are the patient watcher. Ghosts understand that wisdom comes from observation and reflection. Your quiet presence absorbs knowledge, waiting for the perfect moment to emerge and contribute.',
    coreTrait: 'Learning-oriented',
    color: '#64748b',
    gradient: 'from-slate-600 via-gray-600 to-zinc-700',
    icon: 'ghost',
    actions: [
      'Explore and learn at your own pace',
      'Bookmark resources for future reference',
      'Observe community discussions and dynamics',
      'Prepare for your moment to contribute'
    ],
    quote: '"In silence, I gather the strength of a thousand voices."'
  }
};
