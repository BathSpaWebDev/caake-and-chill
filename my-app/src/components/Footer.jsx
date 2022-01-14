import "./footer.css";

export const Footer = () => {

    return (
        <section>
            <footer className="footer">
                <div className="footer-content-centered">
                    <h1 className="footer-title">Caaake, The Ultimate Online Movie Rental.</h1>
                    <address className="footer-contact">
                        <p>Email: <a href = "mailto: support@caaake.co.uk">support@caaake.co.uk</a></p>
                        <a href="tel:+13115552368">(311) 555-2368</a>
                        <p>100 Winchester Circle Los Gatos, CA 95032 United States</p>
                    </address>
                </div>
            
            </footer>
        </section>
    )
}