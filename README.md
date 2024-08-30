# Getting Started with Create React App

Sometimes I use Simplify as a lookup table for personal project urls, etc. However, more often than not, Simplify will crash or even refuse to open on certain pages that are not recognizable as an application form.

To solve this issue, I built my own watered down version of simplify, just for basic access to your profile data.

So now I have Simplify for automatic application completion, but also a fallback extension in case Simplify crashes and I need to lookup something.

## Usage

This project is not intended for use by other people, but if you so choose to use this...

For self usage you will need a basic understanding of:
  - React
  - JavaScript/Typescript
  - Very basic chrome extension development

1. Navigate to src/data/*.ts
2. Update one of the constants `PROFESSIONAL_EXPERIENCE`, `HOTLINKS`, `SKILLS`, `PROJECTS`, `SHORT_ANSWERS`.
3. Make sure the new entry follows the corresponding defined interface
    - *_Note_*: the order of the json entries or arrays will effect the displayed order

For example, to update the experience, change the PROFESSIONAL_EXPERIENCE constant:

```json
export const PROFESSIONAL_EXPERIENCE: ProfessionalExperience[] = [
  {
    title: 'Graduate Teaching Assistant',
    company: 'University of Illinois at Urbana-Champaign',
    city: 'Champaign',
    state: 'Illinois',
    startDate: '01/01/2024',
    endDate: '01/01/2024',
    description: [
      '• Equipped 100+ students with foundational data science skills, including basic text analysis and data pipelining concepts, by teaching Python tools (Jupyter, Matplotlib, NLTK, NumPy, Pandas, SpaCy) in an Intro to Python for Data Science course',
    ],
  },
];
```

This would display the following experience:


## Deployment

Deployment build:

```
npm run build
```

Your artifacts will be in `app-buddy/build`.

Deployment to Chrome:
1. Got to `chrome://extensions/`
   - Make sure developer mode is enabled for your chrome browser
3. Choose `Load Unpacked`
4. Choose the `app-buddy/build`
