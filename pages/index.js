import './index.scss';

import AppointmentDetail from '../components/appointment-details/appointment-details.component';
import AppointmentReview from '../components/appointment-review/appointment-review.component';
import Calender from '../components/calender/calender.component';

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
                        <div>
                            <AppointmentReview />
                        </div>
                        <div>
                            <Calender />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}