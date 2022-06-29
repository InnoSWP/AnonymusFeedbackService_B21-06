import { useState } from "react";
import VkSvg from "../components/svg/VkSvg";
import LoginForm from "../components/Entering/LoginForm";
import RegistrationForm from "../components/Entering/RegistrationForm";
import ForgotForm from "../components/Entering/ForgotForm";

export type tabs = 0 | 1 | 2;

const EnterSection = () => {
  const [activeTab, setActiveTab] = useState<tabs>(0);
  const tabs = {
    0: <LoginForm activeTab={activeTab} setActiveTab={setActiveTab} />,
    1: <RegistrationForm activeTab={activeTab} setActiveTab={setActiveTab} />,
    2: (
      <ForgotForm
      // activeTab={activeTab} setActiveTab={setActiveTab}
      />
    )
  };

  return (
    <section className="EnteringSection">
      <div className="EnteringSectionWrapper">
        <VkSvg />
        {tabs[activeTab]}
      </div>
    </section>
  );
};

export default EnterSection;
