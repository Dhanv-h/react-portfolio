import { FaDatabase, FaPython, FaHtml5, FaJsSquare, FaGitAlt, FaNetworkWired } from "react-icons/fa";
import { SiLinux } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

export const skills = [
  {
      title: "Java & SQL",
      desc: "Proficient in Java programming and SQL for database management and queries.",
      logo: <FaDatabase />
  },
  {
      title: "Web Design",
      desc: "Building responsive and modern web designs using HTML, CSS, and Tailwind CSS.",
      logo: <FaHtml5 />
  },
  {
      title: "Web Development",
      desc: "Developing dynamic web applications with JavaScript and React.",
      logo: <FaJsSquare />
  },
  {
      title: "Version Control",
      desc: "Managing and collaborating on projects using Git and GitHub.",
      logo: <FaGitAlt />
  },
  {
    title: "Python",
    desc: "Writing automation scripts in Python to simplify tasks and improve efficiency.",
    logo: <FaPython />
  },
  {
      title: "Linux & Networks",
      desc: "Working with Linux commands and understanding networking concepts.",
      logo: <SiLinux />
  }
];

export const timeline = [
    {
      icon: schoolIcon,
      date: '2021-2024',
      title: 'Bachelor of Engineering (BE)',
      subtitle: 'Thanthai Periyar Government Institute of Technology',
      desc: 'Computer Science and Engineering (CSE)',
    },
    {
      icon: schoolIcon,
      date: '2019-2021',
      title: 'Diploma',
      subtitle: 'Murugappa Polytechnic College',
      desc: 'Electrical and Electronics Engineering (EEE)',
    },
    {
      icon: schoolIcon,
      date: '2017-2018',
      title: 'Higher Secondary (HSLC)',
      subtitle: 'Ebenezer Matriculation Higher Secondary School',
      desc: 'Pure Science Stream',
    },
    {
      icon: schoolIcon,
      date: '2016',
      title: 'SSLC (10th)',
      subtitle: 'Ebenezer Matriculation Higher Secondary School',
    },
    { icon: starIcon },
  ];

