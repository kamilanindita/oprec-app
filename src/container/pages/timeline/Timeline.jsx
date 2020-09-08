import React, { Component, Fragment } from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Container, Card, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { faCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from 'react-router-dom'

class Timeline extends Component {

    render(){
        return (
            <Fragment>
                <div className="App" style={{ backgroundColor:'#fafcfc' }}>
                <Container>
                <h4 style={{ paddingTop:'55px'}}><center>Pendaftaran</center></h4>
                <br></br>
                <Card style={{ marginTop:'-20px'}}>
                    <Card.Body style={{ backgroundColor:'rgb(175,238,238,0.6)' }}>
                        <small><FontAwesomeIcon icon={ faInfoCircle } size="1x" style={{color: 'rgb(135,206,250)'}} />INFORMASI TAHAPAN</small>
                        <br></br>
                        <FontAwesomeIcon icon={ faCircle }  style={{color: '#FF0000'}} /> menunjukkan tahapan belum dilakukan. <br></br>
                        <FontAwesomeIcon icon={ faCircle }  style={{color: 'rgb(255, 165, 0)'}} /> menunjukkan tahapan yang sedang dijalankan. <br></br>
                        <FontAwesomeIcon icon={ faCircle }  style={{color: 'rgb(16, 204, 82)'}} /> menunjukkan tahapan sudah diselesaikan. <br></br>
                        <FontAwesomeIcon icon={ faCircle }  style={{color: 'rgb(169,169,169)'}} /> menunjukkan tahapan hanya informasi. <br></br>
                    </Card.Body>
                </Card>
                <br></br>
                <h5 style={{ marginTop:'-20px'}}>Timeline</h5>
                            <VerticalTimeline>
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                // icon={<WorkIcon />}
                                >
                                <NavLink style={{ textDecoration: 'none', color:'#fff' }} exact to={'/timeline/personal-data'}>
                                <h3 className="vertical-timeline-element-title">Data Pribadi</h3>
                                <h4 className="vertical-timeline-element-subtitle">Personal Data</h4>
                                <small>20 - 30 September 2020</small>
                                <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                                </NavLink>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(255, 165, 0)' }}
                                dateStyle={{ color:'rgb(135,206,250)' }}
                                iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                                // icon={<WorkIcon />}
                                > <NavLink style={{ textDecoration: 'none', color:'#fff' }} exact to={'/timeline/experience-data'}>
                                <h3 className="vertical-timeline-element-title">Pengalaman Kerja/Kepanitiaan</h3>
                                <h4 className="vertical-timeline-element-subtitle">Work/Org Experience</h4>
                                <small>20 - 30 September 2020</small>
                                <p>
                                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                                </p>
                                </NavLink>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#FF0000', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #FF0000' }}
                                iconStyle={{ background: '#FF0000', color: '#fff' }}
                                // icon={<WorkIcon />}
                                >
                                <NavLink style={{ textDecoration: 'none', color:'#fff' }} exact to={'/timeline/choice-division'}>
                                <h3 className="vertical-timeline-element-title">Pilihan Divisi</h3>
                                <h4 className="vertical-timeline-element-subtitle">Choices Division</h4>
                                <small>20 - 30 September 2020</small>
                                <p>
                                    User Experience, Visual Design
                                </p>
                                </NavLink>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(169,169,169)' }}
                                iconStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                // icon={<WorkIcon />}
                                >
                                <NavLink style={{ textDecoration: 'none', color:'#fff' }} exact to={'/timeline/upload-file'}>
                                <h3 className="vertical-timeline-element-title">Unggah Berkas</h3>
                                <h4 className="vertical-timeline-element-subtitle">Upload File</h4>
                                <small>20 - 30 September 2020</small>
                                <p>
                                    User Experience, Visual Design
                                </p>
                                </NavLink>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(169,169,169)' }}
                                iconStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                // icon={<SchoolIcon />}
                                >
                                <NavLink style={{ textDecoration: 'none', color:'#fff' }} exact to={'/timeline/assignment'}>
                                <h3 className="vertical-timeline-element-title">Penugasan</h3>
                                <h4 className="vertical-timeline-element-subtitle">Assigment</h4>
                                <small>1 - 7 Oktober 2020</small>
                                <p>
                                    Strategy, Social Media
                                </p>
                                </NavLink>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(169,169,169)' }}
                                iconStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                // icon={<SchoolIcon />}
                                >
                                 <NavLink style={{ textDecoration: 'none', color:'#fff' }} exact to={'/timeline/fgd'}>
                                <h3 className="vertical-timeline-element-title">Diskusi Kelompok/FGD</h3>
                                <h4 className="vertical-timeline-element-subtitle">Focus Group Discussion</h4>
                                <small>1 - 7 Oktober 2020</small>
                                <p>
                                    Creative Direction, User Experience, Visual Design
                                </p>
                                </NavLink>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(169,169,169)' }}
                                iconStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                // icon={<SchoolIcon />}
                                >
                                 <NavLink style={{ textDecoration: 'none', color:'#fff' }} exact to={'/timeline/interview'}>
                                <h3 className="vertical-timeline-element-title">Wawancara</h3>
                                <h4 className="vertical-timeline-element-subtitle">Interview</h4>
                                <small>18 - 20 Oktober 2020</small>
                                <p>
                                    Creative Direction, Visual Design
                                </p>
                                </NavLink>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(169,169,169)' }}
                                iconStyle={{ background: 'rgb(169,169,169)', color: '#fff' }}
                                // icon={<SchoolIcon />}
                                >
                                 <NavLink style={{ textDecoration: 'none', color:'#fff' }} exact to={'/timeline/announcement'}>
                                <h3 className="vertical-timeline-element-title">Pengumuman</h3>
                                <h4 className="vertical-timeline-element-subtitle">Announcement</h4>
                                <small>25 Oktober 2020</small>
                                <p>
                                    Creative Direction, Visual Design
                                </p>
                                </NavLink>
                                </VerticalTimelineElement>
                        </VerticalTimeline>
                    <br></br>
                    <br></br>
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header> */}
                </Container>
                </div>
          </Fragment>
        )
    }

}

export default Timeline;