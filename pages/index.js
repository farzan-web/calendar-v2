import './index.scss';

import AppointmentDetail from '../components/appointment-details/appointment-details.component';
import AppointmentReview from '../components/appointment-review/appointment-review.component';
import Calender from '../components/calender/calender.component';
import TimeHour from '../components/time-hour/time-hour.component';

export default class Index extends React.Component{
    constructor(){
        super();

        this.timeHandleClick = this.timeHandleClick.bind(this);
        this.detailsHandleClick = this.detailsHandleClick.bind(this);

        this.state = {
            timeHandle:false,
            detailsHandle:true,
        }
    }

    timeHandleClick() {
        this.setState({ timeHandle: true });
    }

    detailsHandleClick() {
        this.setState({ timeHandle: false });
        this.setState({ detailsHandle: true });
    }


    render(){
        return(
            <div className='App'>
                <div className='appointment-container'>
                    <div className={`${this.state.detailsHandle ? "appointment-grid-details" : this.state.timeHandle ? "appointment-grid3" : "appointment-grid2"}`}>
                        <div>
                            <AppointmentReview />
                        </div>
                        <div className= {`${this.state.detailsHandle ? "invisible" : "visible"}`}>
                            <Calender timeHandleClick={this.timeHandleClick}/>
                        </div>
                        <div className= {`${this.state.timeHandle ? "visible" : "invisible"}`}>
                            <TimeHour  detailsHandleClick={this.detailsHandleClick} />
                        </div>
                        <div className= {`${this.state.detailsHandle ? "visible" : "invisible"}`}>
                            <AppointmentDetail />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
