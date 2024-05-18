import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import { GrTransaction } from 'react-icons/gr';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'B.tech in Civil Engineering',
    location: 'Vizianagaram, IN',
    description: 'Completed my B.Tech in Civil Engineering. ',
    icon: React.createElement(LuGraduationCap),
    date: '2011 - 2015',
  },
  {
    title: 'Site Engineer',
    location: 'PAN India',
    description:
      'Worked as Site Engineer , Jr. Project Coordinator for Various Comanpies as a civil engineer.',
    icon: React.createElement(CgWorkAlt),
    date: '2015-2018',
  },
  {
    title: 'Post Graduate Program in Project Engineering and Management',
    location: 'Pune, IN',
    description:
      'I graduated after 2 years of studying at National Institude of Construction Management and Research. I immediately found a job as a project coordinator.',
    icon: React.createElement(LuGraduationCap),
    date: '2018-2020',
  },
  {
    title: 'Project Coordinator',
    location: 'Madurai, IN',
    description:
      'Managed National and State Highways projects Pan India, Tender and Contract Managment.',
    icon: React.createElement(CgWorkAlt),
    date: '2020-2021',
  },
  {
    title: 'Career Break',
    location: 'Hyderabad, IN',
    description:
      'Focused and developed my skills to step into tech industry as a full stack web developer',
    icon: React.createElement(GrTransaction),
    date: '2021-2022',
  },
  {
    title: 'Software Engineer',
    location: 'Hyderabad, IN',
    description:
      'Currently Wokring as Software Engineer at Compliance Group. Have hands on experience with ALM tools like Polarion, React.Js, full-stack web development and lot more',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'Next Auth Page',
    description: 'Developed a simple single page auth page using Next.Js',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind'],
    imageUrl: corpcommentImg,
    pageLink: 'https://nextauth-app-henna.vercel.app/auth',
  },
  {
    title: 'Google HomePage Clone',
    description:
      "Built Google homepage clone, it can fetch the data using REST Api's",
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux', "REST Api's"],
    imageUrl: rmtdevImg,
    pageLink:
      'https://google-clone-git-main-vijaysarma1007s-projects.vercel.app/',
  },
  {
    title: 'IMDB Clone',
    description:
      'This is clone project of IMDB with dark/ light mode. Uses movide db API to fetch the latest movie data.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
    pageLink: 'https://imdb-next-five.vercel.app/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Micro Services',
  'Docker',
  'Kubernetes',
  'Express',
  'Python',
  'Django',
  'Framer Motion',
] as const;
