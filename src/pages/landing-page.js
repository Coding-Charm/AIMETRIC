import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./landing-page.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onComponent8ContainerClick = useCallback(() => {
    navigate("/budgettracker");
  }, [navigate]);

  const onComponent7ContainerClick = useCallback(() => {
    navigate("/calender");
  }, [navigate]);

  const onComponent6ContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="landing-page-child" />
      <img className="logo-icon3" alt="" src="/logo@2x.png" />
      <div className="navbar3">
        <img className="fi-rr-portrait-icon3" alt="" src="/firrportrait3.svg" />
        <a className="rectangle-a" />
        <b className="log-in3">LOG IN</b>
        <b className="calender5">CALENDER</b>
        <b className="about3">ABOUT</b>
        <b className="home3">HOME</b>
      </div>
      <div className="landing-page-item" />
      <div className="component-9">
        <img className="component-9-child" alt="" src="/ellipse-31.svg" />
        <a className="supportgmailcom" href="mailto:aditichauhan50@gmailcom">
          support@gmail.com
        </a>
        <img className="fi-rr-envelope-icon" alt="" src="/firrenvelope.svg" />
        <img
          className="untitled-design-2-2"
          alt=""
          src="/untitled-design-2-2@2x.png"
        />
        <a className="a" href="tel:7011583552">
          +91 8800119994
        </a>
        <img
          className="fi-rr-phone-call-icon"
          alt=""
          src="/firrphonecall.svg"
        />
      </div>
      <div className="footer">
        <b className="about-the-company-container">
          <span className="about-the-company-container1">
            <p className="about-the-company">ABOUT THE COMPANY</p>
          </span>
        </b>
        <b className="building-your-better">
          Building your better self by tracking habits Mindful tracking of your
          daily expenses.
        </b>
        <img className="image-198-icon" alt="" src="/image-198@2x.png" />
        <img className="image-199-icon" alt="" src="/image-199@2x.png" />
        <img className="image-200-icon" alt="" src="/image-200@2x.png" />
      </div>
      <b className="b">?</b>
      <div className="image-194-parent">
        <img className="image-194-icon1" alt="" src="/image-194@2x.png" />
        <div className="a-platform-dedicated">
          A platform dedicated to provide next generation of contributors and
          leaders, best way to lessen your energy consumption and manage your
          time.
        </div>
        <a
          className="how-it-works"
          href={`https://www.figma.com/file/2enALRutD6hUPyPEHZKBo7/AIMETRIC?node-id=1%3A9&t=hebTWZOFMM8K1WlG-1`}
          target="_blank"
        >
          HOW IT WORKS
        </a>
        <b className="what-is-aimetric">{`What is AIMETRIC `}{`?`}</b>
      </div>
      <div className="what-we-offer-parent">
        <b className="what-we-offer">What we OFFER ?</b>
        <div className="component-8" onClick={onComponent8ContainerClick}>
          <img className="image-197-icon" alt="" src="/image-197@2x.png" />
          <div className="component-8-child" />
          <a className="budget-tracker2" target="_blank" href="/budgettracker">
            BUDGET TRACKER
          </a>
        </div>
        <div className="component-7" onClick={onComponent7ContainerClick}>
          <img className="image-196-icon" alt="" src="/image-196@2x.png" />
          <div className="component-8-child" />
          <a className="budget-tracker2" target="_blank" href="/calender">
            CALENDER
          </a>
        </div>
        <div className="component-6" onClick={onComponent6ContainerClick}>
          <img className="image-195-icon" alt="" src="/image-195@2x.png" />
          <div className="component-8-child" />
          <a className="tasks1" target="_blank" href="/task">
            TASKS
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
