import './appointment-details.styles.scss';

function AppointmentDetails() {
	return(
        <div className='details-container'>
            <div className='details-grid'>
                <p className='details-header'>Enter Details</p>

                <p className="name">Name *</p>
                <input type="text" id="name" name="name" />

                <p className="email">Email *</p>
                <input type="email" id="email" name="email" />

                <p className="guest-container"><span className="guest">Add Guests</span></p>

                <p className="discription">Please share anything that will help prepare for our meeting.</p>
                <textarea id="discription" name="fname" />

                <p className="Schedule-container"><span className="Schedule">Schedule Event</span></p>

            </div>
        </div>
	);
}

export default AppointmentDetails;