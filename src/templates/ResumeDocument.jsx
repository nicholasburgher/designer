import {
    Page,
    Text,
    View,
    Image,
    Document,
    StyleSheet,
    Font,
    PDFViewer
} from '@react-pdf/renderer';
import Logo from '../content/resumes/myLogo.png';

// Register font
Font.register({
    family: 'Inter',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf',
        },
        {
            src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZg.ttf',
            fontStyle: 'normal',
            fontWeight: 200
        },
        {
            src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZg.ttf',
            fontStyle: 'normal',
            fontWeight: 300
        },
        {
            src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZg.ttf',
            fontStyle: 'normal',
            fontWeight: 500
        },
        {
            src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZg.ttf',
            fontStyle: 'normal',
            fontWeight: 600
        },
        {
            src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZg.ttf',
            fontStyle: 'normal',
            fontWeight: 700
        },
        {
            src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZg.ttf',
            fontStyle: 'normal',
            fontWeight: 800
        },
    ]
});
Font.registerHyphenationCallback(word => (
    [word]
));

const brightOrange = '#FF4B0A';
const bluePrimary = '#003B80';

const headerBase = {
    fontWeight: 700,
    color: bluePrimary
}
// Create styles
const styles = StyleSheet.create({
    page: {
        //flexDirection: 'column',
        //justifyContent: 'space-around',
        backgroundColor: '#fff',
        fontFamily: 'Inter',
        fontSize: 12,
        marginTop: 18,
        paddingBottom: 18
    },
    row: {
        padding: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 18
    },
    column: {
        marginBottom: 18,
        flexDirection: 'column',
        gap: 18
        //flexGrow: 1
    },
    h1: {
        ...headerBase,
        fontSize: 28,
        textTransform: 'uppercase',
    },
    h2: {
        ...headerBase,
        fontSize: 11
    },
    splitter: {
        margin: 18,
        marginTop: 0,
        marginBottom: 0,
        height: 9,
        backgroundColor: bluePrimary,
        borderRadius: '50vh'
    },
    intro: {
        fontSize: 10,
        fontWeight: 500,
        lineHeight: 1.33
    },
    body: {
        fontSize: 8,
        letterSpacing: -0.005,
        lineHeight: 1.5,
        flex: 1
    },
    bodyBullet: {
        fontWeight: 700
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    },
    numberedList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 9
    },
    numberedList__listItem: {
        flexDirection: 'row',
        gap: 11,
        fontSize: 10,
        alignItems: 'center',
        width: '100%'
    },
    numberedList__number: {
        color: 'white',
        backgroundColor: bluePrimary,
        alignItems: 'center',
        textAlign: 'center',
        height: 17,
        width: 17,
        paddingTop: 2,
        borderRadius: '50%',
        fontWeight: 500
    },
    numberedList__text: {
        fontWeight: 600,
        //display: 'flex',
        //flexDirection: 'row',
        flex: '1'
    },
    viewer: {
        width: window.innerWidth - 17,
        height: window.innerHeight,
    },
    sidebar: {
        borderLeft: '1px solid ' + bluePrimary,
        paddingLeft: 16,
        width: 250,
        flexGrow: 1
    },
    skillList: {
        flexDirection: 'column',
        gap: 8,
        marginBottom: 9
    },
    skill: {
        fontSize: 9,
        fontWeight: 500,
        lineHeight: 1.5,
        marginBottom: 1
    },
    mainContent: {
        flexGrow: '2'
    },
    logoLockup: {
        display: 'flex',
        gap: 15,
        alignItems: 'center',
        marginTop: 48
    },
    logo: {
        width: 53,
        height: 37
    },
    contactTable: {
        display: 'flex',
        gap: 6,
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 600,
        opacity: .7
    },
    pageNumber: {
        position: 'absolute',
        bottom: 28,
        left: 16,
        fontSize: 10
    }
});
const ExperienceBlock = (props) => {
    return (
        <View wrap={false}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', fontSize: 9, fontWeight: 300, marginBottom: 4 }}>
                <Text>{props.exp.companyName}</Text>
                <Text>{props.exp.location}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', fontSize: 9, letterSpacing: 0.01, fontWeight: 700, marginBottom: 6 }}>
                <Text>{props.exp.jobTitle}</Text>
                <Text>{props.exp.dates}</Text>
            </View>
            {props.exp.details.map((li) => (
                <View wrap={false} style={{ flexDirection: 'row', gap: 8, alignItems: 'stretch' }}>
                    <Text style={styles.bodyBullet}>·</Text>
                    <Text style={{ ...styles.body, marginBottom: props.listSpacing }}>{li}</Text>
                </View>
            ))}
        </View>
    )
}

const SidebarList = (props) => {
    return (
        <View wrap={false} style={styles.column}>
            <Text style={styles.h2}>{props.title}</Text>
            <View style={styles.skillList}>
                {props.list.map((li) => (
                    <Text style={styles.skill}>{li}</Text>
                ))}
            </View>
        </View>
    )
}

// Create Document Component
const ResumeDocument = (props) => {
    return (
        <PDFViewer style={styles.viewer}>
            <Document
                title={`Nicholas Burgher - ${props.resume.title} Resume`}
                author="Nicholas Burgher"
                creator="Nicholas Burgher"
                keywords={props.resume.keywords}
                subject={props.resume.skillsUsed[0]}
            >
                <Page size="LETTER" style={styles.page}>
                    <Text fixed style={styles.pageNumber} render={({ pageNumber, totalPages}) => (
                        `${pageNumber} of ${totalPages}`
                    )} />
                    <View style={{ ...styles.row, alignItems: 'center', marginTop: -18 }}>
                        <View style={{ gap: 6, marginBottom: 0 }}>
                            <Text style={{ ...styles.h1, letterSpacing: 2, marginBottom: -5 }}>Nicholas Burgher</Text>
                            <Text style={{ color: brightOrange, fontWeight: 700, letterSpacing: 10, textTransform: 'uppercase' }}>{props.resume.title}</Text>
                            <Text style={{ fontWeight: 600 }}>417-227-7029 | nicholas.burgher@me.com</Text>
                        </View>
                        <View style={{ fontSize: 9, flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                            <Text style={{ paddingBottom: 2, fontSize: 12, color: brightOrange }}>Portfolio Links</Text>
                            <Text>https://nicholasburgher.github.io/designer</Text>
                            <Text>https://dribbble.com/nicholasburgher</Text>
                        </View>
                    </View>
                    <View style={styles.splitter}></View>
                    {/* Start Content */}
                    <View style={{ ...styles.row, alignItems: 'stretch', flexGrow: 1 }}>
                        <View style={{ ...styles.column, width: 430 }}>
                            <Text style={{ ...styles.intro, textAlign: 'center' }}>
                                {props.resume.intro}
                            </Text>
                            <Text style={styles.h2}>Work Experience</Text>
                            {/* TECHLESS */}
                            {props.resume.experience.map((exp) => (
                                <ExperienceBlock exp={exp} listSpacing='8' />
                            ))}
                        </View>
                        <View style={{ ...styles.sidebar }}>
                            <View style={styles.column}>
                                <Text style={styles.h2}>Top 5 Most Exciting Work Activities</Text>
                                <View style={styles.numberedList}>
                                    {[
                                        'Building Tools',
                                        'Solving real business problems',
                                        'Adding value!',
                                        'Helping team members succeed',
                                        'Making things beautiful, excellent, or flawless'
                                    ].map((item, index) => (
                                        <View style={styles.numberedList__listItem}>
                                            <Text style={styles.numberedList__number}>{index + 1}</Text>
                                            <Text style={styles.numberedList__text}>{item}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <SidebarList title='Skills & Relevant Knowledge' list={props.resume.skillsUsed} />
                            <View style={styles.column}>
                                <View style={{ ...styles.skillList, paddingLeft: 18 }}>
                                    {props.resume.industryKnowledge.map((skill) => (
                                        <Text style={styles.skill}>{skill}</Text>
                                    ))}
                                </View>
                            </View>
                            <SidebarList wrap={false} title='Certifications / Accomplishments / Community Involvement' list={props.resume.highlights} />
                            <View style={styles.column}>
                                <Text style={styles.h2}>Education</Text>
                                <ExperienceBlock exp={props.resume.education[0]} listSpacing='0' />
                            </View>
                            <View style={styles.logoLockup}>
                                <Image style={styles.logo} src={Logo} />
                                <View style={styles.contactTable}>
                                    <Text>417-224-7029</Text>
                                    <Text>nicholas.burgher@me.com</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </Page>
            </Document>
        </PDFViewer>
    )
};

export default ResumeDocument;