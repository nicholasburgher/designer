import detailsForAllResumes from "./detailsForAllResumes";

const resume_Dev = {
    path: 'developer',
    title: 'Developer',
    intro: 'I am a detail-oriented, reliable, and collaborative creative professional with over 9 years of experience producing design solutions of extreme excellence and craftsmanship.',
    skillsUsed: [
        'Problem Solving',
        'Time Management',
        'User Interaction Design',
        'Graphic Design',
        'Digital Imaging',
        'Communication',
        'Technical Writing',
        'Creative Direction'        
    ],
    industryKnowledge: [
        'Git, Node Package Manager',
        'React JS, Vanilla Javascript',
        'HTML, CSS, SCSS, some PHP',
        'Figma',
        'Squarespace, Wordpress, Shopify',
        'Visual Studio Code'
    ],
    experience: [
        {
            ...detailsForAllResumes.tpm,
            details: [
                '2 week project, designed and launched Kirk Elliott PhD Depository Solutions website (storage.kirkelliottphd.com).',

                'Utilized Figma to design and prototype user interfaces before assisting development in buildout of web applications using React.',

                'Leading a redesign project for texasdepository.com, adding a brand new logged in experience, and resolving previous customer challenges and business processes.',

                'Collaborated with team members to understand the business needs of the depository and discover solutions to common problems clients faced at the time.',

                'Established trust and expertise in design with company leadership by providing quality communication on design direction, and requesting feedback.',

                'Wrote clean, adaptable code that can grow as needed to meet future business needs of TPM and it\'s clients.'
            ]
        },
        {
            ...detailsForAllResumes.techless,
            details: [
                'Created valuable, usable customer experiences for Wisephone. Supplied product documentations for apps like Maps, Notes, Camera, and dozens of other product smaller product needs.',
                'Collaborated with engineers weekly to identify feasible design solutions to design challenges.',
                'Supported engineering teams with working code, design documentation, and product testing services during bi-weekly sprints.',
                'Built prototypes and flows in Figma. Also coded prototypes with vanilla JS or React to better explain design intent.',
                'One month, developed the Techless Tech Addiction Quiz, a tool for driving brand engagement and expanding email marketing lists.',
                'Worked across all departments and teams to help identify and understand business opportunities. Used techniques such as user research, product testing, and risk assessment to evaluate high-value opportunities.'
            ]
        },
        {
            ...detailsForAllResumes.dexter,
            details: [
                
                'Generated advanced typesetting and file generation solutions for Dexter\'s Prepress and Account Management, using technologies like InDesign\'s Data Merge and GREP styling. Trained team members on using the new tools.',
                'Provided art direction and project management for the creative team responsible for delivering three 52-week church bulletin design sets for our yearly church bulletin subscription product line. Led the team from 2016-2020.',
                'Managed dextersolutions.net, adding new content and features to the site. Built custom landing pages for events, signup forms, and online tools using HTML, CSS, and Javascript.',
                'Utlized Salesforce and Pardot to program nuturing campaigns and automations for marketing efforts.',
                'Generated "lookbooks" showcasing over 100 unique branded products. Built design automations to assist with PDF generation, and employed contract designers to support for certain manual processes.'
            ]
        }
    ],
    education: [
        {
            ...detailsForAllResumes.sbu,
        }
    ],
    highlights: [
        ...detailsForAllResumes.highlights
    ]
}
let keywords = '';
for (let i = 0; i < resume_Dev.skillsUsed.length; i++) {
    keywords = keywords + ' ' + resume_Dev.skillsUsed[i]
};
resume_Dev.keywords = keywords;

export default resume_Dev;