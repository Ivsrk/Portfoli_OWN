import React, {Component} from 'react'
import "./SkillProgress.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from "aos";
import "aos/dist/aos.css";
class SkillProgress extends Component {
  componentDidMount() {
  AOS.init({
    duration : 2000
  });
}
  render() {

    return (
<div >
<div data-aos="zoom-in-up"  data-aos-duration="3000">
<div class="card card1 border  rounded-3" >
  <div class="card-header text-uppercase font-weight-bold font-italic">Skill Set</div>
  <div class="card-body">

          <div class="container con2">
              <div class="row">
                  <div class="col-md-6">
                    <div data-aos="fade-right">
                                <div class="skill-progress">
                                      <div class="row">
                                          <div class="col-4">
                                                <div class="skill-title">
                                                   <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                                   <span>Java script</span>
                                                </div>
                                          </div>
                                          <div class="col-8">
                                              <div class="progress">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </div>
                                      </div>
                                </div>
                                <div class="skill-progress">
                                      <div class="row">
                                          <div class="col-4">
                                                <div class="skill-title">
                                                   <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                                   <span>HTML</span>
                                                </div>
                                          </div>
                                          <div class="col-8">
                                              <div class="progress">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </div>
                                      </div>
                                </div>
                                <div class="skill-progress">
                                      <div class="row">
                                          <div class="col-4">
                                                <div class="skill-title">
                                                   <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                                   <span>CSS</span>
                                                </div>
                                          </div>
                                          <div class="col-8">
                                              <div class="progress">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                          </div>
                                      </div>
                                </div>
                                </div>
                  </div>
                  <div class="col-md-6">
                  <div data-aos="fade-left">
                  <div class="skill-progress">
                        <div class="row">
                            <div class="col-4">
                                  <div class="skill-title">
                                     <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                     <span>C</span>
                                  </div>
                            </div>
                            <div class="col-8">
                                <div class="progress">
                                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                  </div>
                  <div class="skill-progress">
                        <div class="row">
                            <div class="col-4">
                                  <div class="skill-title">
                                     <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                     <span>C++</span>
                                  </div>
                            </div>
                            <div class="col-8">
                                <div class="progress">
                                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                  </div>
                  <div class="skill-progress">
                        <div class="row">
                            <div class="col-4">
                                  <div class="skill-title">
                                     <i class="fa fa-sm fa-fw fa-hashtag"></i>
                                     <span>Java</span>
                                  </div>
                            </div>
                            <div class="col-8">
                                <div class="progress">
                                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                  </div>
                  </div>
                  </div>
              </div>
         </div>
  </div>
</div>


</div>
</div>

    );

  }

}

export default SkillProgress;
