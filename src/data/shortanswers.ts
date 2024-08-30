export interface ShortAnswer {
  question: string;
  answer: string;
}

export const SHORT_ANSWERS: ShortAnswer[] = [
  {
    question: 'Anything else you want to share?',
    answer: `
Dear Whomever It May Concern,

Professionally, I have 2+ years experience at The Bank of New York Mellon, Canon, Concourse Labs (acquired by Fortinet), and Numerix doing a versatile mix of frontend, backend, cloud, and application development.

Before starting the master of computer science program at UIUC, I graduated summa cum laude from Marist College with dual majors in Computer Science and Cybersecurity, earning $40K+ in scholarships and a recommendation letter from an IBM Distinguished Engineer (see: https://drive.google.com/file/d/1ZITPcNAsCNBxDE8OXYjZzWPs8hGo5lud/view?usp=sharing)

If you have a moment, check out my personal website at https://alexbadia.com/ - it's designed with a creative flair you might enjoy!

I'm open to any role where I might fit best, but I'm particularly interested in .

Thank you for your time!
    `.trim(),
  },
  {
    question: 'What has been your favorite project?',
    answer: `
My favorite project has been the Diagram Driven Cloud Infrastructure Tool, which I led to the top 3 finalists out of 24+ projects and 340+ contestants at HackIllinois 2024. We developed a cloud infrastructure tool that generates Terraform code from a user-created cloud infrastructure diagrams.

We are still working this project. We chose to name the project Stratus with the goal to build the "Figma" of multi-cloud infrastructure design and deployment. The low-code trend inspires Stratus to push the bounds of Infrastructure as code to Infrastructure as diagrams. Stratus combines:

1. A web-based cloud infrastructure design tool.
2. A multi-cloud compiler/generator to terraform and ansible.
3. A deployment engine.

So far, I am building out the web-based cloud infrastructure design tool and the multi-cloud compiler/generator. I also see an opportunity to add Artificial Intelligence I assistants trained on cloud documentation to provide real-time feedback/recommendations/assistants in the web-based cloud infrastructure tool. It's a big project, but I love it as it's a great way to learn about cloud services and test my knowledge of frontend, backend, and cloud.

One of the intriguing challenges I've encountered in this project is how to provision resources in the correct order when translating the cloud infrastructure diagram into a Terraform file. If you've ever seen a cloud infrastructure diagram, you'll know that they are essentially directed (mostly acyclic) dependency  graphs. This is a classic computer science problem of ordering based on dependencies which can be solved with Topological Sorting Algorithms.

Since the graphs are relatively small and not guaranteed to be fully connected, I used Kahn's algorithm to determine the provisioning order. When handling cycles such as cyclical configurations or refs, the backend will either pessimistically fail the terraform generation or eagerly try to resolve it. Regarding cyclical configurations or refs, eager resolutions would try factoring out standard configurations or using static values for refs.
    `.trim(),
  },
  {
    question: 'What has been your most challenging project?',
    answer: `
At Numerix, our IT department initiated a cloud migration effort to modernize our infrastructure. However, our team encountered a significant hurdle when it was revealed that the on-premises K8 cluster for development environments would be decommissioned within a hard deadline of a few months.

So, like every other team, I had to move our development environments to AWS. [Un]-Fortunately our team was one of the last to migrate to AWS. I was able to schedule meetings with other team members to piece together and document the migration process (to ECS).

Moreover, I focused on cost savings by pruning extraneous microservices and adding scheduled auto-scaling of ECS containers to shutdown each team member’s development environments outside of each team member's respective working hours. 

As an entry level SWE without access to the budget to measure cost savings, I just focused on what I could control.
    `.trim(),
  },
];
