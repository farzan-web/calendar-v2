import './time-hour.styles.scss';
import hours from '../../data/hours.json';

function TimeHour({detailsHandleClick}) {
	return(
        <div className= "time">
        <p className='time-header'></p>
        <div className='time-api'>
            <p className='time-date'>Monday, July 6</p>
            <div className='time-body' onClick={() =>{ detailsHandleClick() }}>
                { hours.map(hour => 
                    <div className='time-hours' >
                        <p 
                            className={`${hour.id<10 ? "one" : "two"}`} key={hour.id}> { hour.hour } 
                        </p>
                    </div>
                ) }
            </div>
        </div>
    </div>
	);
}

export default TimeHour;