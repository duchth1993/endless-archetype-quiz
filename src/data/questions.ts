import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "You discover a potential vulnerability in a popular DeFi protocol. What's your first instinct?",
    options: [
      {
        text: "Immediately report it through proper channels and help patch it",
        scores: { sentinel: 5, weaver: 1, oracle: 2, builder: 3, ghost: 0 }
      },
      {
        text: "Share the discovery with trusted community members to discuss",
        scores: { sentinel: 2, weaver: 5, oracle: 2, builder: 1, ghost: 1 }
      },
      {
        text: "Write a detailed analysis explaining the vulnerability to educate others",
        scores: { sentinel: 2, weaver: 1, oracle: 5, builder: 2, ghost: 1 }
      },
      {
        text: "Start coding a fix or tool to address the issue",
        scores: { sentinel: 2, weaver: 0, oracle: 1, builder: 5, ghost: 0 }
      },
      {
        text: "Observe how others respond and learn from the situation",
        scores: { sentinel: 1, weaver: 1, oracle: 2, builder: 0, ghost: 5 }
      }
    ]
  },
  {
    id: 2,
    question: "A newcomer joins the community feeling overwhelmed. How do you help?",
    options: [
      {
        text: "Warn them about common scams and security practices first",
        scores: { sentinel: 5, weaver: 2, oracle: 1, builder: 0, ghost: 0 }
      },
      {
        text: "Personally welcome them and introduce them to friendly members",
        scores: { sentinel: 1, weaver: 5, oracle: 1, builder: 0, ghost: 1 }
      },
      {
        text: "Point them to the best resources and explain key concepts",
        scores: { sentinel: 1, weaver: 2, oracle: 5, builder: 1, ghost: 1 }
      },
      {
        text: "Show them a tool or project you built that might help",
        scores: { sentinel: 0, weaver: 1, oracle: 2, builder: 5, ghost: 0 }
      },
      {
        text: "Remember when you were new and silently empathize",
        scores: { sentinel: 0, weaver: 2, oracle: 1, builder: 0, ghost: 5 }
      }
    ]
  },
  {
    id: 3,
    question: "What energizes you most in a decentralized community?",
    options: [
      {
        text: "Knowing the ecosystem is secure and users are protected",
        scores: { sentinel: 5, weaver: 1, oracle: 1, builder: 2, ghost: 0 }
      },
      {
        text: "Seeing strangers become collaborators and friends",
        scores: { sentinel: 0, weaver: 5, oracle: 1, builder: 1, ghost: 2 }
      },
      {
        text: "Watching understanding spread as people learn and grow",
        scores: { sentinel: 1, weaver: 2, oracle: 5, builder: 1, ghost: 2 }
      },
      {
        text: "Shipping something that people actually use",
        scores: { sentinel: 1, weaver: 1, oracle: 1, builder: 5, ghost: 0 }
      },
      {
        text: "The freedom to explore and discover at my own pace",
        scores: { sentinel: 0, weaver: 1, oracle: 2, builder: 0, ghost: 5 }
      }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to spend your time in Web3 spaces?",
    options: [
      {
        text: "Auditing contracts and reviewing security practices",
        scores: { sentinel: 5, weaver: 0, oracle: 2, builder: 2, ghost: 0 }
      },
      {
        text: "Chatting, networking, and building relationships",
        scores: { sentinel: 0, weaver: 5, oracle: 1, builder: 0, ghost: 1 }
      },
      {
        text: "Reading, researching, and creating educational content",
        scores: { sentinel: 1, weaver: 1, oracle: 5, builder: 1, ghost: 2 }
      },
      {
        text: "Coding, building, and experimenting with new tech",
        scores: { sentinel: 1, weaver: 0, oracle: 1, builder: 5, ghost: 0 }
      },
      {
        text: "Lurking, absorbing information, and taking notes",
        scores: { sentinel: 0, weaver: 0, oracle: 2, builder: 0, ghost: 5 }
      }
    ]
  },
  {
    id: 5,
    question: "The Endless ecosystem is launching something big. What role do you naturally gravitate toward?",
    options: [
      {
        text: "Security reviewer — ensuring everything is safe before launch",
        scores: { sentinel: 5, weaver: 0, oracle: 1, builder: 2, ghost: 0 }
      },
      {
        text: "Community ambassador — rallying excitement and support",
        scores: { sentinel: 0, weaver: 5, oracle: 1, builder: 0, ghost: 1 }
      },
      {
        text: "Content creator — explaining what it means and why it matters",
        scores: { sentinel: 1, weaver: 2, oracle: 5, builder: 1, ghost: 1 }
      },
      {
        text: "Developer — building integrations or contributing code",
        scores: { sentinel: 1, weaver: 0, oracle: 0, builder: 5, ghost: 0 }
      },
      {
        text: "Curious observer — watching how it unfolds before engaging",
        scores: { sentinel: 0, weaver: 1, oracle: 2, builder: 0, ghost: 5 }
      }
    ]
  }
];
