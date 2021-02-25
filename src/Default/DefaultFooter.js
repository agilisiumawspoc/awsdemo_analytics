import logo from '../Assests/img/logo.svg'

const DefaultFooter = () => {
 return(
    <div className="row default-footer">
        <div className="col-sm-3 footer-logo">
            <img src={logo} alt="Agilisium logo"/>
        </div>
        <div className="col-sm-6 footer-contact-detail">This dashboard is powered by Agilisium. Please reach out to dashboard@agilisium.com if you have any questions or suggestions.</div>
        <div className="col-sm-3 footer-upd-detail">Data last updated 1/2/2021 6:00 PM</div>
    </div> 
 );
}

export default DefaultFooter;