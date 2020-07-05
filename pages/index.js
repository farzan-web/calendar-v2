import './index.scss';
import days from '../data/calender.json';

import AppointmentDetail from '../components/appointment-details/appointment-details.component';
import AppointmentReview from '../components/appointment-review/appointment-review.component';
import Calender from '../components/calender/calender.component';
import TimeHour from '../components/time-hour/time-hour.component';
import Timezone from '../components/timzone/timezone.component';

export default class Index extends React.Component{
    static async getInitialProps(){
        return {

        }
    }
    render(){
        return(
            <div className='App'>
                <div className='appointment-container'>
                    <div className='appointment-grid'>
                        <AppointmentReview />
                        <Calender days={days}/>
                    </div>
                </div>
            </div>
        )
    }
}