import './calender.styles.scss';
import days from '../../data/calender.json';
import Timezone from '../timzone/timezone.component';


function Calender({timeHandleClick}) {
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
                                    <p onClick={() =>{ timeHandleClick() }}
                                        className={`${day.id<10 ? "one" : "two"}`} key={day.id}> { day.day } 
                                    </p>
                                </div>
                            ) }
                        </div>
                    </div>
                    <Timezone />
                </div>
            </div>
    </div>
            
        );
    
}

export default Calender;