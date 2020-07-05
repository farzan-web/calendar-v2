import './appointment-review.styles.scss';

function AppointmentReview() {
	return(
        <div className='review'>
            <p className='review-header'>Just a few steps to set your</p>
            <p className="review-time">5 Minutes Appointment</p>
            <p className="clock"><span>&#128339;</span> 5 min</p>
        </div>
	);
}

export default AppointmentReview;