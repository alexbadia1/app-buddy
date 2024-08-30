export interface Project {
  title: string;
  description: string[];
  viewProject: string;
}

export const PROJECTS: Project[] = [
  {
    title:
      'Diagram Driven Cloud Infrastructure Tool (HackIllinois Finalist 2024)',
    description: [
      '• Led a team of 3 students to the top 3 finalists out of 24+ projects and 340+ contestants at HackIllinois 2024',
      '• Developed a cloud infrastructure tool that generates Terraform code from a user-created diagram using Next.js',
    ],
    viewProject: 'https://demo-self-ten.vercel.app/',
  },
  {
    title:
      'Distributed Denial of Service Attack Detection with Quantum Computing',
    description: [
      '• Conducted research that identified denial of service traffic in honeypot network hive-plot graphs with 90%+ accuracy using the Max-Cut Algorithm, Quantum Approximate Optimization Algorithm, and IBM Qiskit',
    ],
    viewProject:
      'https://ecc.marist.edu/documents/2625221/2667540/QAOA+5+page+paper/1a4563f5-03eb-4eb4-b74f-b1e69ec909f5',
  },
  {
    title: 'Browser-Based Operating System and Compiler',
    description: [
      '• Built a browser-based compiler that translates high-level language source code into 6502a machine code, which runs on a browser-based multitasking operating system equipped with a shell, CPU, file system, scheduler, and memory',
    ],
    viewProject: 'https://alexbadia1.github.io/AxiOS-Compiler/##/',
  },
  {
    title: 'Maple Juice (Hadoop Clone)',
    description: [
      '• Built a scalable distributed MapReduce framework, featuring a fault-tolerant distributed file system with gossip failure detection, passive replication, bully leader election, a distributed log querier, and an SQL layer',
    ],
    viewProject: 'https://github.com/alexbadia1/Maple-Juice',
  },
];
