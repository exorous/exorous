import { notFound } from 'next/navigation';
import JobApplicationForm from '@/components/job-application-form';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import MotionSection from '@/components/motion-section';

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
    salary: 'BDT 50,000–90,000/month',
    description: 'We are looking for a passionate Full Stack Engineer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern technologies. No formal degree required — show us what you\'ve built and what you can do.',
    requirements: [
      'Strong hands-on experience with modern web development',
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
      'Remote work opportunities',
      'Working hours: 10 AM to 7 PM with one hour lunch break',
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
    salary: 'BDT 30,000–60,000/month base + commission',
    description: 'Join our business development team to drive growth and build meaningful partnerships. You\'ll identify new opportunities and nurture relationships with potential clients. No degree needed — your track record and communication matter most.',
    requirements: [
      'Proven experience in business development or sales',
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
      'Remote work opportunities',
      'Working hours: 10 AM to 7 PM with one hour lunch break',
      'Performance-based bonuses',
      'Collaborative team environment'
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
    salary: 'BDT 40,000–75,000/month',
    description: 'We are seeking a creative UI/UX Designer to craft intuitive, engaging experiences across our products. No degree required — a strong portfolio and user-centered thinking are what we care about.',
    requirements: [
      'Portfolio demonstrating strong UI/UX work',
      '2+ years of experience in UI/UX design',
      'Proficiency in Figma, Adobe Creative Suite, and Sketch',
      'Strong understanding of user-centered design principles',
      'Experience with prototyping tools (Framer, Principle)',
      'Knowledge of responsive design and mobile-first approach',
      'Excellent visual design skills and attention to detail'
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
      'Remote work opportunities',
      'Working hours: 10 AM to 7 PM with one hour lunch break',
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
    salary: 'BDT 70,000–120,000/month',
    description: 'Join our AI team to develop cutting-edge ML solutions and AI-powered applications. We value practical experience and impact over degrees — share your projects and outcomes.',
    requirements: [
      'Hands-on experience building and deploying ML models',
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
      'Remote work opportunities',
      'Working hours: 10 AM to 7 PM with one hour lunch break',
      'Access to latest AI tools and resources',
      'Opportunity to work on cutting-edge projects'
    ],
    googleFormLink: 'https://forms.gle/your-ai-engineer-form-link',
    postedDate: '2025-10-28'
  }
];

interface ApplyPageProps {
  params: {
    id: string;
  };
}

export default function ApplyPage({ params }: ApplyPageProps) {
  const job = jobPositions.find(job => job.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 py-8">
        <MotionSection delay={0.1} direction="up">
          <Link href={`/careers/${job.id}`}>
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Job Details
            </Button>
          </Link>
        </MotionSection>

        <MotionSection delay={0.2} direction="up">
          <JobApplicationForm jobId={job.id} jobTitle={job.title} />
        </MotionSection>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return jobPositions.map((job) => ({
    id: job.id,
  }));
}

