import React, { useEffect } from 'react';
import { ProfessionalExperienceCard } from '../components/ProfessionalExperienceCard';
import { PROFESSIONAL_EXPERIENCE } from '../data/professional';
import { HOTLINKS } from '../data/hotlinks';
import { HotLinkCard } from '../components/LinkCard';
import { SHORT_ANSWERS } from '../data/shortanswers';
import { ShortAnswerCard } from '../components/ShortAnswerCard';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import { SKILLS, SKILLS_STRING } from '../data/skills';
import { TabBody } from '../components/TabBody';
import { CopyTextContainer } from '../components/CopyTextContainer';

import './index.css';
import { toast } from 'react-toastify';

export function App() {
  const [focusedTab, setFocusedTab] = React.useState(0);

  const tabs = [
    <TabBody>
      {PROFESSIONAL_EXPERIENCE.map((experience) => (
        <ProfessionalExperienceCard data={experience} />
      ))}
    </TabBody>,
    <TabBody>
      {HOTLINKS.map((hotlink) => (
        <HotLinkCard data={hotlink} />
      ))}
    </TabBody>,
    <TabBody>
      {PROJECTS.map((project) => (
        <ProjectCard data={project} />
      ))}
    </TabBody>,
    <TabBody>
      <button
      style={{margin: '8px 0px', color: 'black', backgroundColor: 'white', border: 'none', padding: '2px 4px', borderRadius: '8px'}}
        onClick={() => {
          try {
            navigator.clipboard.writeText(SKILLS_STRING);
            toast.dismiss();
            toast('Copied to clipboard!');
          } catch (err) {
            toast('Error');
          }
        }}
      >Copy All Skills</button>
      {SKILLS.map((skill, i) => (
        <CopyTextContainer text={skill} />
      ))}
    </TabBody>,
    <TabBody>
      {SHORT_ANSWERS.map((shortAnswer, i) => (
        <ShortAnswerCard data={shortAnswer} id={i} />
      ))}
    </TabBody>,
  ];

  return (
    <div className="app" data-theme="black">
      <div className="tabs">
        <div className="tab-actions">
          <div
            className={`tab-action ${focusedTab === 0 ? 'tab-focused' : ''}`}
            onClick={() => setFocusedTab(0)}
          >
            Experience
          </div>
          <div className="gutter-8px" />
          <div
            className={`tab-action ${focusedTab === 1 ? 'tab-focused' : ''}`}
            onClick={() => setFocusedTab(1)}
          >
            Links
          </div>
          <div className="gutter-8px" />
          <div
            className={`tab-action ${focusedTab === 2 ? 'tab-focused' : ''}`}
            onClick={() => setFocusedTab(2)}
          >
            Projects
          </div>
          <div className="gutter-8px" />
          <div
            className={`tab-action ${focusedTab === 3 ? 'tab-focused' : ''}`}
            onClick={() => setFocusedTab(3)}
          >
            Skills
          </div>
          <div className="gutter-8px" />
          <div
            className={`tab-action ${focusedTab === 4 ? 'tab-focused' : ''}`}
            onClick={() => setFocusedTab(4)}
          >
            Short Answers
          </div>
        </div>
        {tabs[focusedTab]}
      </div>
    </div>
  );
}
