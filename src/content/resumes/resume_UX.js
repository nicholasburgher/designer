import detailsForAllResumes from "./detailsForAllResumes";

const resume_UX = {
    path: 'ux-designer',
    title: 'User Experience',
    intro: 'I am a detail-oriented, reliable, and collaborative creative professional with over 9 years of experience producing design solutions of extreme excellence and craftsmanship.',
    skillsUsed: [
        'User Experience Design',
        'Graphic Design',
        'Photography / Digital Imaging',
        'Web Design',
        'Front-End Development',
        'User Interface / Interaction Design',
        'Animation',
        'Project Management / Time Management',
        'Design Documentation / Technical Writing',
        'Creative Direction'        
    ],
    industryKnowledge: [
        'Figma',
        'Photophop, Illustrator, InDesign',
        'React JS, Vanilla Javascript',
        'HTML, CSS, SCSS, some PHP',
        'Squarespace, Wordpress, Shopify',
        'Mailchimp, Pardot, Salesforce'
    ],
    experience: [
        {
            ...detailsForAllResumes.tpm,
            details: [
                'Redesigned texasdepository.com, adding a brand new logged in experience, and resolving previous customer barriers.',
                'Designed and implemented dozens of elegant icons and other visual assets to be used as a part of user interfaces.',
                'Grew alongside other developers as we utilized tools like React JS to build groundbreaking web applications.',
                'Established trust and expertise in design with company leadership by providing quality communication on design direction, and requesting feedback.'
            ]
        },
        {
            ...detailsForAllResumes.techless,
            details: [
                'Created valuable, usable customer experiences for users of Wisephone.',
                'Generated engaging content to enhance user experiences, such as video demonstrations, tutorials, online tools, and user flows.',
                'Formalized the UX process for new product needs. 24-page document goes over the practice of product discovery and user research.',
                'Built prototypes, both low and high fidelity, with paper, Figma, coded prototypes (JS and React). Tested interfaces for usability using tools like Maze.co.',
                'Supported engineers with working code, product testing, and product design documentation.',
                'Worked across all departments and teams to help identify and understand business problems and evaluate potential solutions. Used techniques such as user research, product testing, and risk assessment.'
            ]
        },
        {
            ...detailsForAllResumes.dexter,
            details: [
                'Led a team of designers, providing art direction for the creation of three 52-week church bulletin subscriptions series, yearly from 2016-2020.',
                'Supported the design and development of print product design and production for Hermitage Art, a client of Dexter. Assisted in brainstorming new product ideas and obtaining approval on all artwork.',
                'Generated advanced typesetting and file generation solutions for Dexter\'s Prepress department, using technologies like InDesign\'s Data Merge and GREP styling. Trained teams on how to use the new tools.',
                'Programmed nuturing campaigns for marketing efforts with Mailchimp and Pardot',
                'Generated "lookbooks" showcasing over 100 products. Built design automations to assist with PDF generation and employed contract designers to support some manual processes.',
                'Managed dextersolutions.net, adding new content to the site. Built custom landing pages for events, signup forms, and online tools.',
                'Made marketing business decisions based on goal progress.'
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
for (let i = 0; i < resume_UX.skillsUsed.length; i++) {
    keywords = keywords + ' ' + resume_UX.skillsUsed[i]
};
resume_UX.keywords = keywords;

export default resume_UX;