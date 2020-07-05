import './calender.styles.scss';
import days from '../../data/calender.json';
import hours from '../../data/hours.json';
import Timezone from '../timzone/timezone.component';


export default class Calender extends React.Component{
    constructor(){
        super();
        this.state = {
            timeHandle:false,
        }
    }

    render(){
        return(
            <div className='calender-component-container'>
                <div className='calender-component-grid'>

                    <div className='calender'>
                        <p className='calender-header'>Choose your appointment date</p>
                        <div className='calender-api'>
                            <p className='calender-date'>July 2020</p>
                            <div className='calender-body'>
                                <p className='week-days'> MON </p>
                                <p className='week-days'> TUE </p>
                                <p className='week-days'> WED </p>
                                <p className='week-days'> THU </p>
                                <p className='week-days'> FRI </p>
                                <p className='week-days'> SAT </p>
                                <p className='week-days'> SUN </p>
                                { days.map(day => 
                                    <div className='month-days' >
                                        <p onClick={() => this.setState({ timeHandle: true })}
                                            className={`${day.id<10 ? "one" : "two"}`} key={day.id}> { day.day } 
                                        </p>
                                    </div>
                                ) }
                            </div>
                        </div>
                        <Timezone />
                    </div>

                    <div className={`${this.state.timeHandle ? "time-visible" : "time-hide"} time`}>
                        <p className='time-header'></p>
                        <div className='time-api'>
                            <p className='time-date'>Monday, July 6</p>
                            <div className='time-body'>
                                { hours.map(hour => 
                                    <div className='time-hours' >
                                        <p className={`${hour.id<10 ? "one" : "two"}`} key={hour.id}> { hour.hour } </p>
                                    </div>
                                ) }
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
            
        );
    }
}

