import './index.scss';
import data from '../data/data.json';
import user from '../data/user.json';

import AppointmentDetail from '../components/appointment-details/appointment-details.component';
import AppointmentReview from '../components/appointment-review/appointment-review.component';
import Calender from '../components/calender/calender.component';
import TimeHour from '../components/time-hour/time-hour.component';
import Timezone from '../components/timzone/timezone.component';

export default class Index extends React.Component{
    static async getInitialProps(){
        return {
            cards:data,
            users:user,
        }
    }
    render(){
        return(
            <div className='App'>
                <div className='appointment-container'>
                    <div className='appointment-grid'>
                        <div className='review'>
                        <p>Just a few steps to set your</p>
                        <p>5 minutes appointment</p>
                        </div>
                        <div className='calender'>
                            <p>second</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}