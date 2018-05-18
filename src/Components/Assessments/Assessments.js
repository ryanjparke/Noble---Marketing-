import React, { Component } from 'react';
import './Assessments.css';

import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';

import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';


const styles = {
    tab: {
        background: "#2AAAE2",
    },
    headline: {
        fontSize: 24,
        marginLeft: 10,
        paddingTop: 1,
        marginBottom: 0,
        fontWeight: 400,
        // background: "red",
        textAlign: "left",
    },
    title: {
        fontSize: 20,
        paddingTop: 1,
        marginLeft: 10,
        textAlign: "left",
        marginBottom: 0,
        fontWeight: 350,
    },
    paragraph: {
        fontSize: 14,
        paddingTop: 4,
        marginLeft: 10,
        fontWeight: 300
    },
    slide: {
        padding: 10,
    },
    views: {
        
    }
};



class Assessments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0,

        };
    }
    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div className='asmtsContainer'>
                <Nav />
                {/************ LEFT SIDE *************/}
                <div className='productsSideNav'>
                    <div className='navHeader'>
                        <p>OUR PRODUCTS</p>
                    </div>
                    <div className='innerProducts'>
                        <a href='/assessments'><p>Assessments</p> </a>
                        <a href=''><p>Training</p> </a>
                        <a href=''><p>Extensions</p> </a>
                        <a href=''><p>Integrations</p> </a>
                        <a href=''><p>Something?</p> </a>
                    </div>
                </div>
                {/************* RIGHT SIDE *************/}
                <div className='asmtsRight'>
                    <div className='productsHeadera'>
                        <p>Assessments</p>
                    </div>
                    <div className='swipeable'>
                        <Tabs
                            onChange={this.handleChange}
                            value={this.state.slideIndex}>
                            <Tab style={styles.tab} label="JUVENILE" value={0} />
                            <Tab style={styles.tab} label="ADULT" value={1} />
                            <Tab style={styles.tab}label="THREE" value={2} />
                        </Tabs>
                        <SwipeableViews
                            index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                            <div style={styles.views}>
                                <h2 style={styles.headline}>Juvenile Assessments</h2>
                                <p style={styles.paragraph}>Noble has juvenile risk classification and need assessment tools that work. Our tools cover behavioral and mental health areas, and assessment results tie to the case planning tool's Big 8 and stabilizing factors, allowing for effective improvement in highlighted need areas.</p>
                                {/* assessment 1 */}
                                <h4 style={styles.title}>PACT - Positive Achievement Change Tool</h4>
                                <p style={styles.paragraph}>The PACT is a leading juvenile risk and needs assessment, and is comprised of two assessments: the PACT Pre-screen (PACT Pre) and the PACT Full-Screen (PACT Full) instruments. The PACT Pre is a short screener designed to give practitioner and screening personnel a simple, quick evaluation of a youth's risk level based on criminal and social history background. The PACT Full is a more comprehensive instrument providing insight into the behavioral needs of youth.</p>
                                {/* assessment 2 */}
                                <h4 style={styles.title}>R-PACT - Residential PACT</h4>
                                <p style={styles.paragraph}>The Residential Positive Achievement Change Tool (R-PACT) is an assessment instrument modified from the Positive Achievement Change Tool (PACT.) It was created specifically for residential programs and can be used as an independent instrument or can be pre-populated with responses from the PACT. Its purpose is to identify the youth’s highest scoring criminogenic needs, guide the development of intervention strategies and assist with determining a youth’s progress in residential programs.</p>
                                {/* assessment 3 */}
                                <h4 style={styles.title}>CARE-2 - Child and Adolescent Risk Evaluation</h4>
                                <p style={styles.paragraph}>Developed by Dr. Kathy Seifert, the Care-2 is a leading juvenile assessment to help in identifying both youth at risk of violence and in addition, recommends specific interventions to help prevent future aggressive behavior. Additional information about the CARE-2 is available via the CARE-2 website.</p>
                                {/* assessment 4 */}
                                <h4 style={styles.title}>OYAS - Ohio Youth Assessment System</h4>
                                <p style={styles.paragraph}>Based on the work by Dr. Ed Latessa, the OYAS is a multi-tool system designed to address risk and needs of youth at different stages of the criminal justice cycle. Noble's offering integrates the system into the case planning system, allowing OYAS results to be used side-by-side with other assessments when creating a case plan. More information about the OYAS can be found on the Ohio Department of Youth Services site.</p>
                                {/* assessment 5 */} 
                                <h4 style={styles.title}>PREA - Prison Rape Elimination Act</h4>
                                <p style={styles.paragraph}>The PREA is a 15-item assessment designed by Noble in partnership with customers to assist departments with statutory requirements associated with the PREA.</p>                           </div>
                                {/****** ADULT ASSESSMENTS ******/}
                            <div>
                                <h2 style={styles.headline}>Adult Assessments</h2>
                                <h4 style={styles.title}>SRNA - The Static Risk and Needs Assessment</h4>
                                <p style={styles.paragraph}>Developed by the Washington State Institute for Public Policy by Dr. Robert Barnoski, the Static Risk Assessment is based on offender demographics and criminal history while the Needs Assessment allows for greater information gathering to be used in the identification of top criminogenic needs for case planning purposes.</p>
                                <h4 style={styles.title}>WRNA - The Women's Risk and Needs Assessment</h4>
                                <p style={styles.paragraph}>In 2008, the National Institute of Corrections in cooperation with the University of Cincinnati announced the availability of a series of new risk and need assessments for adult, women offenders. The assessments include:</p>
                                <h4 style={styles.title}>ORAS - Ohio Risk Assessment System</h4>
                                <p style={styles.paragraph}>Based on the work by Dr. Ed Latessa, the ORAS is a multi-tool system designed to address risk and needs of offenders at different stages of the criminal justice cycle, and is designed to predict the likelihood of re-arrest and recidivism at the different stages. Noble's offering integrates the system into the case planning system, allowing ORAS results to be used side-by-side with other assessments when creating a case plan.</p>
                                <h4 style={styles.title}>ODARA - The Ontario Domestic Assault Risk Assessment</h4>
                                <p style={styles.paragraph}>Finally, a validated tool to help you with your domestic violence caseloads! The Ontario Domestic Assault Risk Assessment is a leading actuarial domestic violence risk assessment tool designed to identify the risk of future assaults against intimate partners.</p>
                                <h4 style={styles.title}>VPRAI - Virginia Pretrial Risk Assessment Instrument</h4>
                                <p style={styles.paragraph}>The Virginia Pretrial Risk Assessment Instrument is designed to identify the likelihood of failure to appear in court, the danger to the community posed by a defendant pending trial, and to assist pretrial officers in making a bail recommendation.</p>
                                <h4 style={styles.title}>DRAOR - Dynamic Risk Assessment for Offender Re-Entry</h4>
                                <p style={styles.paragraph}>The DRAOR is a 19-item case management measure that augments traditional risk instruments by assessing Stable and Acute dynamic risks as well as Protective factors. Elevated acute risk scores predict likelihood and imminence of client failure, while elevated protective scores appear to mitigate risk of reoffending. Moreover, changes in acute risks and protective factors have been demonstrated to improve predictive accuracy over static risk measures, thereby informing real-time changes in case planning and risk management. Currently it is used in several correctional systems with both male and female offenders.</p>
                            </div>
                            <div style={styles.slide}>
                                Something Else Tools
                                </div>
                        </SwipeableViews>
                    </div>
                </div>

                {/* <Footer /> */}
                {/**** container div ****/}
            </div>
        )
    }
}
export default Assessments;