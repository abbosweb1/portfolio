import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next'; // i18n
import "./navbar.css";
import background from "../assets/Rectangle 67.png";
import logo from "../assets/logo 1.png";
import icon from "../assets/separatorBlack 1.png";
import me from "../assets/Изображение PNG 17.png";
import klyuch from "../assets/136378-200 1.png";
import development from "../assets/maintenance--v3 1.png";
import maintenanace from "../assets/img_533288 1.png";
import html from "../assets/Group 12.svg";
import css from "../assets/Group 13.svg";
import js from "../assets/Group.svg";
import react from "../assets/Group 14.svg";
import git from "../assets/git.svg";
import topPortfolio from "../assets/image 12.png";
import big from "../assets/Projects.png";



function Navbar() {
    const [showContact, setShowContact] = useState(false);
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const { t, i18n } = useTranslation();

    const TELEGRAM_BOT_TOKEN = '7849113011:AAE74V4FYl5scAmSkMwvenYiChgHHs-vJG8';
    const CHAT_ID = '6181440042';
    const API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const handleContactClick = () => setShowContact(true);
    const handleClose = () => setShowContact(false);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const text = `
📩 ${t("newRequest")}:
👤 ${t("name")}: ${formData.name}
📧 ${t("email")}: ${formData.email}
📞 ${t("phone")}: ${formData.phone}
📝 ${t("message")}: ${formData.message}
        `;

        try {
            await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text }),
            });
            toast.success(t('successMessage'));
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            toast.error(t('errorMessage'));
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="navbarContainer">
                <div className="navbar">
                    <div className="navbarLeft">
                        <img src={logo} alt="Topilmadi" />
                    </div>
                    <div className="navbarRight">
                        <img id='backgroundImg' src={background} alt="" />
                        <button className="ShowHide" onClick={() => setMenuOpen(!menuOpen)}>≡</button>
                        <ul className={menuOpen ? 'menu show' : 'menu'}>
                            <li><a href="#about">{t('about')}</a></li>
                            <li><a href="#skills">{t('skills')}</a></li>
                            <li><a href="#portfolio">{t('portfolio')}</a></li>
                        </ul>

                        <button onClick={handleContactClick}>{t('contactMe')}</button>
                        <div className="lan">
                        <button onClick={() => changeLanguage("en")}>en</button>
                        <button onClick={() => changeLanguage("ru")}>ru</button>
                        <button onClick={() => changeLanguage("uz")}>uz</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homeWrapper">
                <div className="home">
                    <div className="homeLeft">
                        <h2>{t('hi')}</h2>
                        <h1>Mirabbos Abdusattorov</h1>
                        <p>{t('position')}</p>
                    </div>
                    <div className="homeRight">
                        <img src={me} alt="" />
                    </div>
                </div>

                <div className="readMore">
                    <h1>IT BERRIES</h1>
                    <p>{t('description')}</p>
                    <button>{t('readMore')}</button>
                </div>

                <div id='about' className="aboutPAge">
                    <button>{t('about')}</button>
                    <p>{t('description')}</p>
                    <button>{t('explore')}</button>
                    <img src={icon} alt="" />
                </div>

                <div className="designPage">
                    <div className="twoDesign">
                        <div className="design">
                            <img src={klyuch} alt="" />
                            <h1>{t('design')}</h1>
                            <p>{t('serviceText')}</p>
                        </div>
                        <div className="development">
                            <img src={development} alt="" />
                            <h1>{t('development')}</h1>
                            <p>{t('serviceText')}</p>
                        </div>
                    </div>
                    <div className="maintenanace">
                        <img src={maintenanace} alt="" />
                        <h1>{t('maintenance')}</h1>
                        <p>{t('serviceText')}</p>
                    </div>
                    <img src={icon} alt="" />
                </div>

                <div id='skills' className="skillsPage">
                    <button>{t('skills')}</button>
                    <div className="usingLanguage">
                        <h1>{t('usingNow')}</h1>
                        <div className="imagesSkill">
                            <div className="html"><img src={html} alt="" /><h1>HTML</h1></div>
                            <div className="css"><img src={css} alt="" /><h1>CSS</h1></div>
                            <div className="js"><img src={js} alt="" /><h1>JS</h1></div>
                            <div className="react"><img src={react} alt="" /><h1>REACT</h1></div>
                            <div className="git"><img src={git} alt="" /><h1>GIT</h1></div>
                        </div>
                    </div>
                </div>

                <div id='portfolio' className="portfoliosPage">
                    <div className="topPortfolio">
                        <img src={topPortfolio} alt="" />
                        <button>{t('portfolio')}</button>
                    </div>
                    <img id='bigImg' src={big} alt="" />

                    <div className="form-container">,
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder={t('enterName')}
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder={t('enterEmail')}
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder={t('phone')}
                                value={formData.phone}
                                onChange={handleFormChange}
                            />
                            <textarea
                                name="message"
                                placeholder={t('message')}
                                rows="4"
                                value={formData.message}
                                onChange={handleFormChange}
                                required
                            ></textarea>
                            <button type="submit">{t('submit')}</button>
                        </form>
                    </div>
                </div>
            </div>

            {showContact && (
                <div className="modalOverlay">
                    <form onSubmit={handleFormSubmit} className="formContainer">
                        <h2>{t('contactForm')}</h2>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={t('message')}
                            required
                        />
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder={t('phone')}
                            required
                        />
                        <button id='typeSubmit' type='submit'>{t('submit')}</button>
                        <button type="button" onClick={handleClose}>{t('close')}</button>
                    </form>
                </div>
            )}

            <footer className="footer">
                <div className="backToTop" onClick={scrollToTop}>
                    <span>↑</span>
                    <p>{t('backToTop')}</p>
                </div>
                <div className="socialIcons">
                    <p>[F]</p>
                    <p>[In]</p>
                    <p>[Ig]</p>
                    <p>[✉]</p>
                </div>
                <p className="copyright">
                    @2025 Mirabbos Abdusattorov {t('rights')}
                </p>
            </footer>
        </>
    );
}

export default Navbar;