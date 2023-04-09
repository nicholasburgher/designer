import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFViewer
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    viewer: {
        width: window.innerWidth - 17,
        height: window.innerHeight,
    }
});

// Create Document Component
const ResumeDocument = (props) => (
    <PDFViewer style={styles.viewer}>
        <Document>
            <Page size="LETTER" style={styles.page}>
                <View style={styles.section}>
                    <Text>{props.resume.title}</Text>
                    {props.resume.skillsUsed.map((skill) => (<Text>{skill}</Text>))}
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default ResumeDocument;