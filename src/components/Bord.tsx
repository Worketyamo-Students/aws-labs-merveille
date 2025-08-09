import { useLocation } from "react-router-dom";
import logo3 from "../assets/public/1.ai 1.svg";
import Person from "../assets/public/Person.svg";
import mail from "../assets/public/mail-01-stroke-rounded 1.png";
import person22 from "../assets/public/add-team-stroke-rounded 1.png";
import fusee from "../assets/public/rocket-stroke-rounded 1.svg";
import fleche from "../assets/public/fleche.svg";

interface Step {
  icon: string;
  title: string;
  subtitle: string;
  path: string;
}

function Bord() {
  const location = useLocation();

  const steps: Step[] = [
    {
      icon: Person,
      title: "Inscription",
      subtitle: "Entrez vos informations personnelles.",
      path: "/account",
    },
    {
      icon: mail,
      title: "Validation OTP",
      subtitle: "Confirmez votre adresse e-mail.",
      path: "/authentification",
    },
    {
      icon: person22,
      title: "Invitez vos amis",
      subtitle: "Envoyez des invitations à vos amis.",
      path: "/finalisation",
    },
    {
      icon: fusee,
      title: "Bienvenu à worketyamo",
      subtitle: "Votre inscription est terminée.",
      path: "/bienvenue",
    },
  ];

  
  const currentStepIndex = steps.findIndex((step) => step.path === location.pathname);

  return (
    <section className="bg-[#00539C0A] hidden md:block">
      <img src={logo3} alt="#" className="w-16 h-16 md:ml-16 lg:ml-24 -pt-8" />

      <div className="p-4">
        {steps.map((step, index) => {
          const isActive = index <= currentStepIndex;
          const borderColor = isActive ? "#000000" : "#8080808C";
          const textColor = isActive ? "#000000" : "#8080808C";

          return (
            <div key={step.title}>
              <div className="flex gap-2">
                <div
                  className="flex justify-center items-center rounded-[15px] w-[59px] h-[50px] border"
                  style={{ borderColor }}
                >
                  <img src={step.icon} alt="#" className="w-[25px] h-[25px]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 style={{ color: textColor }}>{step.title}</h1>
                  <h4 style={{ color: textColor }}>{step.subtitle}</h4>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className="h-20 ml-7 w-0.5 border"
                  style={{ borderColor }}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 p-4 mt-64">
        <img src={fleche} alt="#" className="w-[25px] h-[25px]" />
        <div className="flex w-full justify-between">
          <h1 className="text-[#00539C]">Vos details</h1>
          <h1 className="text-[#00539C]">SignIn</h1>
        </div>
      </div>
    </section>
  );
}

export default Bord;
