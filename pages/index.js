import './index.scss';

import AppointmentDetail from '../components/appointment-details/appointment-details.component';
import AppointmentReview from '../components/appointment-review/appointment-review.component';
import Calender from '../components/calender/calender.component';
import TimeHour from '../components/time-hour/time-hour.component';

export default class Index extends React.Component{
    constructor(){
        super();

        this.timeHandleClick = this.timeHandleClick.bind(this);

        this.state = {
            timeHandle:false,
        }
    }

    timeHandleClick() {
        this.setState({ timeHandle: true });
    }


    render(){
        return(
            <div className='App'>
                <div className='appointment-container'>
                    <div className={`${this.state.timeHandle ? "appointment-grid3" : "appointment-grid2"}`}>
                        <div>
                            <AppointmentReview />
                        </div>
                        <div>
                            <Calender timeHandleClick={this.timeHandleClick}/>
                        </div>
                        <div>
                            <TimeHour timeHandle={this.state.timeHandle} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
