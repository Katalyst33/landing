import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid';
import ServiceList from '../services/ServiceList';

const features = [
  {
    name: 'Custom Software Development',
    description:
      'Tailored software solutions designed to meet specific business needs, including web applications, mobile apps, and enterprise software development.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Cloud Services and Solutions',
    description:
      'Assistance with migrating to the cloud, cloud infrastructure management, and implementing cloud-based applications for enhanced scalability, flexibility, and cost-effectiveness.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Data Analytics and Business Intelligence',
    description:
      'Utilizing advanced analytics tools and techniques to extract insights from data, driving informed decision-making and optimizing business processes.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'IT Infrastructure Management',
    description:
      'Comprehensive management and maintenance of IT infrastructure, including network setup, cybersecurity solutions, server management, and IT support services.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'E-commerce Solutions',
    description:
      'Design, development, and optimization of e-commerce platforms to facilitate online sales, improve customer experiences, and drive revenue growth for businesses operating in the digital marketplace.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Digital Transformation Consulting',
    description:
      'Strategic guidance and support for organizations looking to modernize their operations, embrace emerging technologies, and adapt to evolving market trends.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'UI/UX Design',
    description:
      'Crafting intuitive and visually appealing user interfaces (UI) and user experiences (UX) to enhance user engagement, interaction, and satisfaction on websites and web applications.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Mobile App Development',
    description:
      'Creating native and cross-platform mobile applications for iOS and Android devices, leveraging modern technologies and frameworks to deliver seamless mobile experiences.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Cybersecurity Solutions',
    description:
      'Implementing robust cybersecurity measures to protect websites, web applications, and digital assets from cyber threats, including malware detection, intrusion prevention, and security audits.',
    href: '#',
    icon: ArrowPathIcon,
  },
];

export default function HomeFeature() {
  return (
    <div className=" ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-secondary-500/20">
                Our Services
              </span>
            </a>
          </div>
          <h1 className="title">
            Everything you need to reinvigorate your Business Online
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            With a focus on collaboration, innovation, and excellence, we are
            dedicated to helping you stay ahead in today&rsquo;s competitive
            landscape. Discover how {process.env.companyName} can empower your
            business to thrive in the digital age.
          </p>
        </div>

        {/*error here */}
        <div className={`my-10`}>
          <ServiceList />
        </div>

        {/*error here */}
      </div>
    </div>
  );
}
