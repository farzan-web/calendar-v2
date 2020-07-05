import './calender.styles.scss';

function Calender() {
	return(
        <div className='calender'>
            <p className='calender-header'>Choose your appointment date</p>
            <div className='calender-api'>
                <p className='calender-date'>July 2020</p>
                <div className='calender-body'>
                    { this.props.days.map(day => <h1 key={day.id}> { day.day } </h1>) }
                </div>
            </div>
        </div>
	);
}

export default Calender;