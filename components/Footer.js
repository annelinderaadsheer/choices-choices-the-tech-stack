// components/Footer.js
import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Functie om het jaar te updaten
        const updateYear = () => {
            const currentYear = new Date().getFullYear();
            if (currentYear !== year) {
                setYear(currentYear);
            }
        };

        // Jaar updaten elke 24 uur
        const interval = setInterval(updateYear, 1000 * 60 * 60 * 24);

        // Opruimen van de interval bij component unmount
        return () => clearInterval(interval);
    }, [year]);

    return (
        <footer>
            <img src="/RedPers_Logo_Cmyk_Black.webp" alt="Red Pers Logo" />
            <ul className="footer-layout">
                <li className="kopjes">
                    <h3 className="kop-4">RUBRIEKEN</h3>
                    <ul className="sub-list">
                        <li><a href="/">Binnenland</a></li>
                        <li><a href="/">Buitenland</a></li>
                        <li><a href="/">Columns</a></li>
                        <li><a href="/">Economie</a></li>
                        <li><a href="/">Kunst & Media</a></li>
                        <li><a href="/">Podcast</a></li>
                        <li><a href="/">Politiek</a></li>
                        <li><a href="/">Wetenschap</a></li>
                    </ul>
                </li>

                <li className="kopjes">
                    <h3 className="kop-4">NAVIGATIE</h3>
                    <ul className="sub-list">
                        <li><a href="/">Colofon</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Doneren</a></li>
                        <li><a href="/">Meedoen</a></li>
                        <li><a href="/">Over Red Pers</a></li>
                    </ul>
                </li>

                <li className="kopjes">
                    <h3 className="kop-4">SERVICE</h3>
                    <ul className="sub-list">
                        <li><a href="/">Tip de redactie</a></li>
                        <li><a href="/">Meld een fout</a></li>
                    </ul>
                </li>

                <li className="kopjes">
                    <h3 className="kop-4">MEER RED PERS</h3>
                    <ul className="sub-list">
                        <li><a href="/">Nieuwsbrief</a></li>
                        <li><a href="/">LinkedIn</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">X Twitter</a></li>
                    </ul>
                </li>
            </ul>

            <section className="end-footer">
                <p>© {year} Stichting Red Pers - Alle rechten voorbehouden</p>
                <ul className="end-footer-credits">
                    <li><a href="/">Privacystatement</a></li>
                    <li><a href="/">Cookiebeleid</a></li>
                    <li><a href="/">Copyright</a></li>
                </ul>
            </section>

            {/* Styles */}
            <style jsx>{`
                footer {
                    background-color: #f5f5f5;
                    padding: 100px;
                }

                footer img {
                    max-width: 200px;
                    max-height: 200px;
                    margin-bottom: 50px;
                }

                .footer-layout {
                    list-style-type: none;
                    padding: 0;
                    margin: 0 0 20px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }

                .footer-layout h3 {
                    padding: 0;
                    margin: 0;
                    margin-bottom: 10px;
                }

                .sub-list {
                    list-style: none;
                    padding-left: 20px;
                }

                .sub-list a {
                    text-decoration: none;
                    color: #333;
                }

                .sub-list li {
                    margin-left: -20px;
                }

                .kopjes {
                    margin-bottom: 20px;
                }

                .end-footer {
                    border-top: 1px solid #ccc;
                    display: flex;
                    margin-top: 75px;
                    justify-content: space-between;
                    align-items: center;
                }

                .end-footer-credits {
                    display: flex;
                    gap: 10px;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .end-footer-credits li {
                    margin: 0;
                }

                .end-footer-credits a {
                    text-decoration: none;
                    color: #333;
                }

                @media (min-width: 768px) and (max-width: 1024px) {
                    .footer-layout {
                        padding: 40px;
                    }

                    .end-footer-credits {
                        gap: 20px;
                    }
                }

                footer {
                    background-color: #f5f5f5;
                    padding: 50px 20px;
                }

                @media (min-width: 768px) {
                    footer {
                        padding: 70px 40px;
                    }
                }

                @media (min-width: 1025px) {
                    footer {
                        padding: 100px;
                    }
                }

                @media (max-width: 460px) {
                    footer {
                        padding: 10px;
                    }

                    .footer-layout {
                        flex-direction: column;
                        align-items: center;
                        gap: 15px;
                    }

                    .footer-layout h3 {
                        font-size: 16px;
                        margin-bottom: 5px;
                    }

                    footer img {
                        max-width: 100px;
                        max-height: 100px;
                        margin-bottom: 20px;
                    }

                    .end-footer {
                        flex-direction: column;
                        align-items: center;
                        gap: 10px;
                        margin-top: 20px;
                        padding-top: 10px;
                    }

                    .end-footer-credits {
                        flex-direction: column;
                        align-items: center;
                        gap: 5px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
