import './map.css'
const Map = () => {
    return ( 
        <div className="lg:w-1/2 md:w-full relative">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.416315950484!2d-73.9951386434477!3d40.71572525633782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2597f026515f5%3A0x9a3149e243c9bc5f!2sMasaryk%20Towers!5e0!3m2!1sen!2sbd!4v1710436144349!5m2!1sen!2sbd" 
            className="border-none map mx-auto"  
            loading="lazy"></iframe>
        </div>
     );
}
 
export default Map;