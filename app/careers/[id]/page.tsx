import { notFound } from 'next/navigation';
import JobDetails from '@/components/job-details';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  experience: string;
  workingDays: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  googleFormLink: string;
  postedDate: string;
}

const jobPositions: JobPosition[] = [
  {
    id: 'fullstack-engineer',
    title: 'Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'full-time',
    experience: '2-5 years',
    workingDays: '5 days/week',
    salary: 'Negotiable',
    description: 'We are looking for a passionate Full Stack Engineer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern technologies.',
    requirements: [
      'Bachelor&apos;s degree in Computer Science or related field',
      '2+ years of experience in full-stack development',
      'Proficiency in React.js, Next.js, and TypeScript',
      'Experience with Node.js, Express.js, or similar backend frameworks',
      'Knowledge of databases (PostgreSQL, MongoDB)',
      'Experience with cloud platforms (AWS, Vercel)',
      'Strong problem-solving and communication skills',
      'Experience with Git and version control'
    ],
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with design and product teams',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and technical discussions',
      'Troubleshoot and debug applications',
      'Stay updated with latest technologies and best practices'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible working hours',
      'Remote work opportunities',
      'Health insurance coverage',
      'Professional development budget',
      'Modern tech stack and tools',
      'Collaborative team environment'
    ],
    googleFormLink: 'https://forms.gle/your-fullstack-form-link',
    postedDate: '2025-10-28'
  },
  {
    id: 'business-development-executive',
    title: 'Business Development Executive',
    department: 'Business Development',
    location: 'Remote',
    type: 'full-time',
    experience: '1-3 years',
    workingDays: '5 days/week',
    salary: 'Negotiable',
    description: 'Join our business development team to drive growth and establish strategic partnerships. You will be responsible for identifying new opportunities and building relationships with potential clients.',
    requirements: [
      'Bachelor&apos;s degree in Business, Marketing, or related field',
      '1+ years of experience in business development or sales',
      'Strong communication and presentation skills',
      'Experience with CRM systems',
      'Ability to work independently and meet targets',
      'Knowledge of digital marketing and lead generation',
      'Excellent networking and relationship-building skills',
      'Proficiency in Microsoft Office and Google Workspace'
    ],
    responsibilities: [
      'Identify and pursue new business opportunities',
      'Build and maintain client relationships',
      'Develop and implement sales strategies',
      'Prepare proposals and presentations',
      'Track and report on sales performance',
      'Collaborate with marketing team on campaigns',
      'Attend industry events and networking functions'
    ],
    benefits: [
      'Competitive base salary + commission',
      'Flexible working arrangements',
      'Professional development opportunities',
      'Health and wellness benefits',
      'Performance-based bonuses',
      'Travel opportunities for client meetings',
      'Dynamic and fast-paced environment'
    ],
    googleFormLink: 'https://forms.gle/your-business-dev-form-link',
    postedDate: '2025-10-28'
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'full-time',
    experience: '2-4 years',
    workingDays: '5 days/week',
    salary: 'Negotiable',
    description: 'We are seeking a creative UI/UX Designer to join our design team. You will be responsible for creating intuitive and engaging user experiences across our digital products and platforms.',
    requirements: [
      'Bachelor&apos;s degree in Design, HCI, or related field',
      '2+ years of experience in UI/UX design',
      'Proficiency in Figma, Adobe Creative Suite, and Sketch',
      'Strong understanding of user-centered design principles',
      'Experience with prototyping tools (Framer, Principle)',
      'Knowledge of responsive design and mobile-first approach',
      'Excellent visual design skills and attention to detail',
      'Portfolio demonstrating strong UI/UX work'
    ],
    responsibilities: [
      'Design user interfaces and user experiences',
      'Create wireframes, prototypes, and mockups',
      'Conduct user research and usability testing',
      'Collaborate with developers and product managers',
      'Maintain design systems and style guides',
      'Present design concepts to stakeholders',
      'Iterate on designs based on feedback and data'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible working hours',
      'Remote work opportunities',
      'Health insurance coverage',
      'Professional development budget',
      'Latest design tools and software',
      'Creative and collaborative environment'
    ],
    googleFormLink: 'https://forms.gle/your-ui-ux-form-link',
    postedDate: '2025-10-28'
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'full-time',
    experience: '3-6 years',
    workingDays: '5 days/week',
    salary: 'Negotiable',
    description: 'Join our AI team to develop cutting-edge machine learning solutions and AI-powered applications. You will work on innovative projects that leverage artificial intelligence to solve complex business challenges.',
    requirements: [
      'Master&apos;s degree in Computer Science, AI, or related field',
      '3+ years of experience in machine learning and AI development',
      'Proficiency in Python, TensorFlow, PyTorch, and scikit-learn',
      'Experience with deep learning frameworks and neural networks',
      'Knowledge of NLP, computer vision, or reinforcement learning',
      'Experience with cloud AI services (AWS SageMaker, Google AI)',
      'Strong mathematical and statistical background',
      'Experience with MLOps and model deployment'
    ],
    responsibilities: [
      'Develop and implement machine learning models',
      'Design and build AI-powered applications',
      'Research and experiment with new AI technologies',
      'Collaborate with data scientists and engineers',
      'Optimize model performance and scalability',
      'Deploy AI models to production environments',
      'Stay updated with latest AI research and trends'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible working hours',
      'Remote work opportunities',
      'Health insurance coverage',
      'Professional development budget',
      'Access to latest AI tools and resources',
      'Opportunity to work on cutting-edge projects'
    ],
    googleFormLink: 'https://forms.gle/your-ai-engineer-form-link',
    postedDate: '2025-10-28'
  }
];

interface JobPageProps {
  params: {
    id: string;
  };
}

export default function JobPage({ params }: JobPageProps) {
  const job = jobPositions.find(job => job.id === params.id);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
}

export function generateStaticParams() {
  return jobPositions.map((job) => ({
    id: job.id,
  }));
}
