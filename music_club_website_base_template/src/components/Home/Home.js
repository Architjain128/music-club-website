import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.css';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
import AwesomeSlider from 'react-awesome-slider'
import styles from 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
// import "bootstrap-css-only/css/bootstrap.min.css";
// import {Button} from 'react-bootstrap';
//  import "mdbreact/dist/css/mdb.css";
import {MDBContainer , MDBBtn ,MDBModal , MDBModalBody , MDBModalHeader , MDBModalFooter , MDBInput} from 'mdbreact';


// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';
import './Home.css';

class Home extends Component {

  state = {
    isOnDisplay: true,
    modal : false
  }

  modalToggle = () =>{
    this.setState({
      modal : !this.state.modal
    })
  }

  fade = () => {

    if (this.eventTitle1.current) {
      this.eventTitle1.current.style.opacity = '20%';
      this.eventDesc1.current.style.opacity = '20%';
      this.eventTitle1.current.style.transform = 'translate(0px , -700px)';
      this.eventDesc1.current.style.transform = 'translate(-1100px , 0px)';
      this.regBtn1.current.style.transform = 'translate(-1100px, 0px)';
    }

    if (this.eventTitle2.current) {
      this.eventTitle2.current.style.opacity = '20%';
      this.eventDesc2.current.style.opacity = '20%';
      this.eventTitle2.current.style.transform = 'translate(0px , -700px)';
      this.eventDesc2.current.style.transform = 'translate(-1100px , 0px)';
    }

    if (this.eventTitle3.current) {
      this.eventTitle3.current.style.opacity = '20%';
      this.eventDesc3.current.style.opacity = '20%';
      this.eventTitle3.current.style.transform = 'translate(0px , -700px)';
      this.eventDesc3.current.style.transform = 'translate(-1100px , 0px)';
    }

    if (this.eventTitle4.current) {
      this.eventTitle4.current.style.opacity = '20%';
      this.eventDesc4.current.style.opacity = '20%';
      this.eventTitle4.current.style.transform = 'translate(0px , -700px)';
      this.eventDesc4.current.style.transform = 'translate(-1100px , 0px)';
    }


  }

  bringBack = (e) => {

    if (this.eventTitle1.current) {
      this.eventTitle1.current.style.opacity = '100%';
      this.eventDesc1.current.style.opacity = '100%';
      this.eventTitle1.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc1.current.style.transform = 'translate(0px , 0px)';
      this.regBtn1.current.style.transform = 'translate(0px, 0px)';

    }

    if (this.eventTitle2.current) {
      this.eventTitle2.current.style.opacity = '100%';
      this.eventDesc2.current.style.opacity = '100%';
      this.eventTitle2.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc2.current.style.transform = 'translate(0px , 0px)';
    }

    if (this.eventTitle3.current) {
      this.eventTitle3.current.style.opacity = '100%';
      this.eventDesc3.current.style.opacity = '100%';
      this.eventTitle3.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc3.current.style.transform = 'translate(0px , 0px)';

    }

    if (this.eventTitle4.current) {
      this.eventTitle4.current.style.opacity = '100%';
      this.eventDesc4.current.style.opacity = '100%';
      this.eventTitle4.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc4.current.style.transform = 'translate(0px , 0px)';
    }

  }

  eventTitle1 = React.createRef();
  eventDesc1 = React.createRef();
  eventTitle2 = React.createRef();
  eventDesc2 = React.createRef();
  eventTitle3 = React.createRef();
  eventDesc3 = React.createRef();
  eventTitle4 = React.createRef();
  eventDesc4 = React.createRef();
  regBtn1 = React.createRef();

  render() {
    console.log(this.state.isOnDisplay)
    return (
      <React.Fragment>
        <div className="container-fluid mainDiv bg-white">
          <AwesomeSlider fillParent={false} className="carousel container-sm" cssModule={styles} transitionDelay={500} mobileTouch={true} bullets={true} onTransitionStart={this.fade} onTransitionEnd={this.bringBack}  >
            <div className=" container-sm  carouselDiv" id="img1">
              <div className="eventTextDiv container-xs" >
                <h1 className={"eventTitle text-center"} ref={this.eventTitle1}>Meltdown</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc1}>Where all the metal heads go Crazy</p>
                <button type="button" className="btn btn-outline-danger regBtn" ref={this.regBtn1} data-toggle="modal" data-target="#exampleModalCenter">
                      Register For Event
                    </button>
              </div>
            </div>
            <div className="container-sm carouselDiv" id="img2">
              <div className="eventTextDiv container-xs">
                <h1 className=" eventTitle text-center" ref={this.eventTitle2}>Euphonic</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc2}>The dopest introduction to music club</p>
              </div>
            </div>
            <div className="container-sm carouselDiv" id="img3">
              <div className="eventTextDiv container-xs">
                <h1 className=" eventTitle text-center" ref={this.eventTitle3}>Unplugged</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc3}>Just raw beautiful talent , no wires attached</p>
              </div>
            </div>

            <div className="container-sm carouselDiv" id="img4">
              <div className="eventTextDiv container-xs">
                <h1 className=" eventTitle text-center" ref={this.eventTitle4}>Roadblock</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc4}>Bring the music to the streets</p>
              </div>
            </div>
          </AwesomeSlider>
        </div>

                {/*MODAL START*/}

                    <div className="modal fade modalBack" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content mainModal">

                          <div className="modal-header">
                            <h2 className="modal-title modalTitle mx-auto">Register</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <form>
                          <div className="modal-body">
                          <div class="wrapper">
                          
                            
                            <div class="group">
                              <input type="text" required="required"/><span class="highlight"></span><span class="bar"></span>
                              <label>Name</label>
                            </div>
                            <div class="group">
                              <input type="text" required="required"/><span class="highlight"></span><span class="bar"></span>
                              <label>Email</label>
                            </div>
                            <div class="group">
                              <input type="password" required="required"/><span class="highlight"></span><span class="bar"></span>
                              <label>Password</label>
                            </div>
                            <div class="group">
                              <input type="number" required="required"/><span class="highlight"></span><span class="bar"></span>
                              <label>Number</label>
                            </div>
                            <div class="group">
                              <textarea type="textarea" rows="5" required="required"></textarea><span class="highlight"></span><span class="bar"></span>
                              <label>Message</label>
                            </div>
                            
                          
                      </div>
                          </div>
                          <div className="modal-footer">

                            <div class="btn-box">
                              <button className="btn btn-danger mx-4" type="button" data-dismiss="modal">Close</button>
                              <button className="btn  btn-outline-warning mx-4" type="submit">Register</button>
                              
                           </div>
                          </div>
                          </form>
                        </div>
                      </div>
                    </div>

                {/*MODAL ENDS*/}
      
      
      
        <hr className='my-4' />
        <div className="jumbotron about">
          <h1 className='aboutHeadDiv py-5 px-4'>
            About
            </h1>
          <div className='row'>
            <div className='col-sm-8 aboutTextDiv card-blockquote'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit pellentesque bibendum. Donec eu ornare ex. Etiam pharetra dui elementum euismod mattis. Ut sollicitudin congue odio, sed tempor justo hendrerit vel. Vivamus fringilla dui a quam tincidunt finibus. Nullam sapien enim, ornare non condimentum in, pellentesque ac dolor. Donec vitae nibh eu magna accumsan maximus in sed magna. Ut accumsan gravida lectus. Maecenas eleifend nunc nisl, nec interdum augue fermentum a. Cras non ante quis turpis rhoncus eleifend. Aliquam ut facilisis diam. Nam egestas vehicula sem a pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tempus bibendum justo a fermentum. Praesent a mollis velit. Pellentesque euismod dui id leo finibus ullamcorper.
              Morbi eu leo diam. Fusce enim arta libero viverra, non auctor odio ultrices.
              sdavvavsaavavbadsfdggfadffhggefgffgegdgfhgrgsfdgfbv
              grwrdgfsefdgfgrgfhfgrwdgfnfgrwdgfnfgrw Nulla cursus eget elit vitae tincidunt. Nam a nibh ut nunc lobortis egestas quis sed lacus. Curabitur viverra lectus enim, ac malesuada lorem laoreet venenatis. Sed dui tellus, aliquam laoreet interdum et, gravida eu dui. Sed rhoncus auctor mi eget placerat. Integer nec lacus et mi luctus interdum quis at nisl. Cras a leo vitae arcu iaculis facilisis. Nam et dignissim neque. Nam varius varius accumsan. Vestibulum rutrum fringilla fermentum. </div>
            <div className='col-sm-4 view overlay card card-img-top' id='image'>
            </div>
          </div>
          </div>
          <div className='jumbotron-fluid landingPageFooter'>
            <div className='text-center footer'>
              <span id='footer-note text-center'>
              &copy; Copyright: lorem-ipsum@gmail.com
              </span>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Home;