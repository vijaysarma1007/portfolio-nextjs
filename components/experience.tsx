'use client';
import React from 'react';
import SectionHeading from './sectionHeading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.4);
  const { theme } = useTheme();
  return (
    <section
      id='experience'
      ref={ref}
      className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline
        animate={false}
        lineColor=''>
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  backgroundColor:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255,25,255,0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0,0,0,0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2 rem',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255,255,255,0.5)',
                }}
                date={item.date}
                iconStyle={{
                  background:
                    theme === 'light'
                      ? 'white'
                      : '0.4rem solid rgba(255,255,255,0.15)',
                  fontSize: '2rem',
                  backgroundColor: theme === 'light' ? 'white' : 'black',
                }}
                icon={item.icon}>
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='font-normal !mt-0'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
