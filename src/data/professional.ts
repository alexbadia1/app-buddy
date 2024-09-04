export interface ProfessionalExperience {
  title: string;
  company: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const PROFESSIONAL_EXPERIENCE: ProfessionalExperience[] = [
  {
    title: 'Course Assistant',
    company: 'University of Illinois at Urbana-Champaign',
    city: 'Champaign',
    state: 'Illinois',
    startDate: '08/026/2024',
    endDate: '12/23/2024',
    description: [
      '• Mentoring multiple teams through semester long projects in the software design lab.',
    ],
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'University of Illinois at Urbana-Champaign',
    city: 'Champaign',
    state: 'Illinois',
    startDate: '01/01/2024',
    endDate: '05/31/2024',
    description: [
      '• Equipped 100+ students with foundational data science skills, including basic text analysis and data pipelining concepts, by teaching Python tools (Jupyter, Matplotlib, NLTK, NumPy, Pandas, SpaCy) in an Intro to Python for Data Science course.',
    ],
  },
  {
    title: 'Fullstack Software Engineer',
    company: 'Numerix',
    city: 'New York',
    state: 'New York',
    startDate: '10/01/2022',
    endDate: '08/01/2023',
    description: [
      'Backend & DevOps: AWS Cloud Migration, Tableau Server Management, Microservice Development',
      '• Led a migration of development environments from an on-premise Kubernetes cluster to AWS ECS by (1) migrating K8 manifests to AWS Copilot manifests, (2) resolving dependency order, and (3) optimizing costs with scheduled scaling and pruning microservices.',
      '• Automated Tableau server deployment to AWS EC2 with auto-initialized: (1) data connectors to Snowflake, AWS S3, and Microsoft SQL Server, (2) cronjob automated backups to AWS S3, and (3) optional SSL certification generation for HTTPS access.',
      '• Developed a microservice to trigger PnL calculations by retrieving data from S3, storing job status in DynamoDB, and submitting events in SQS which were consumed by Step Functions, and processed in Lambdas with results outputted to S3.',
      '• Unblocked financial engineers over 100 times by debugging various microservices and serverless functions.',
      'Frontend: React UI Development for Financial Product Testing & Prototyping',
      '• Created a suite of pages, forms, and components totaling 10K+ lines of code for data input, display, settings, and configs.',
      '• Removed 5K+ lines of code by fixing and refactoring broken UI components, form validation logic, malformed requests, and unexpected response errors while reducing backend load by debouncing unnecessary requests or caching frequent requests.'
    ],
  },
  {
    title: 'Summer Associate - Senior Intern',
    company: 'Bank of New York Mellon',
    city: 'New York',
    state: 'New York',
    startDate: '06/01/2022',
    endDate: '08/01/2022',
    description: [
      '• Increased robustness of an API registry for 3K+ microservices (Angular, Flask) by resolving critical bugs.',
      '• Reviewed API designs in bi-weekly architecture meetings as part of the approval process for new software projects.',
      '• Built an Eclipse plugin (Java) that provides real-time internal API documentation for 10K+ endpoints through code completion, context-aware navigation, and intelligent code hints while achieving 90%+ code coverage with SonarQube.',
    ],
  },
  {
    title: 'Fullstack Software Engineer Intern',
    company: 'Canon USA',
    city: 'New York',
    state: 'New York',
    startDate: '01/01/2022',
    endDate: '05/01/2022',
    description: [
      '• One of two interns for Canon Business Process Services first-ever internship program.',
      '• Developed a document processing application with functionalities for uploading, splitting PDFs, highlighting text, adding annotations, and reading barcodes, using a .NET backend with DocuVieware and a React/Redux frontend.',
      '• Shadowed a senior engineer, learning agile methodologies (stand-ups, sprint planning, user stories) and code reviews.',
    ],
  },
  {
    title: 'Associate Backend Software Engineer',
    company: 'Concourse Labs',
    city: 'New York',
    state: 'New York',
    startDate: '01/01/2022',
    endDate: '05/01/2022',
    description: [
      '• Acquired in January 2024 by Fortinet and rebranded to FortiCSPM (Cloud Security Posture Management).',
      '• Eliminated manual deployment of microservices (Spring Boot) to AWS EKS development environments with GitLab CI/CD pipelines to automates tests (across Bazel, Gradle, Maven), Docker image builds, and Helm deployments.',
      '• Debugged multi-cloud (AWS, Azure, GCP) infrastructure configuration polling microservices with Postman.',
    ],
  },
];
