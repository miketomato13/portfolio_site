import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{color: "#fff"}}>
              Feel free to contact me for any work or suggestions below:
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  <a href="https://www.linkedin.com/in/michaelspitaleri/">Click Here to contact me via LinkedIn</a><br/>
                  <a href="tel: 954-895-0199">
                     (954) 895-0199
                  </a><br/>
                  <a href="mailto: michaelaspitaleri@gmail.com">
                     michaelaspitaleri@gmail.com
                  </a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
