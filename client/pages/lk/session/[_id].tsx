import React, { useState } from "react";
import Header from "../../../hoc/Header";
import Link from "next/link";
import BackSvg from "../../../components/svg/BackSvg";
import LkListElem from "../../../components/Lk/LkListElem";
import LkFeedBackElem from "../../../components/Lk/LkFeedBackElem";
import Chat from "../../../components/Lk/Chat";

export interface IFeedBack {
  id: number;
  name: string;
  messages?: string[];
  rate?: number;
}

const SessionPage = () => {
  const FeedBackData: IFeedBack[] = [
    {
      id: 1,
      name: "Anonimus",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores enim fuga labore libero nisi nulla possimus rem suscipit voluptas.",
        "test1"
      ],
      rate: 5
    },
    {
      id: 1,
      name: "Anonimus",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores enim fuga labore libero nisi nulla possimus rem suscipit voluptas.",
        "test1"
      ],
      rate: 5
    },
    {
      id: 1,
      name: "Anonimus",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores enim fuga labore libero nisi nulla possimus rem suscipit voluptas.",
        "test1"
      ],
      rate: 5
    },
    {
      id: 1,
      name: "Anonimus",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores enim fuga labore libero nisi nulla possimus rem suscipit voluptas.",
        "test1"
      ],
      rate: 5
    }
  ];

  const SessionData = {
    id: 1,
    TitleCourse: "MVP and Deciding What to Build",
    TitleSession: "[SUM 22] Software Project",
    year: 2020,
    month: 10,
    day: 31,
    start: "12:40",
    end: "16:40",
    status: "End"
  };

  const [isChatOpen, setIsChatOpen] = useState(false);

  const chatOpenHandler = () => {
    setIsChatOpen(true);
  };

  return (
    <Header>
      <section className="SessionPage">
        <div className="container">
          <Link href="/lk">
            <a className={"BackLink"}>
              Back
              <BackSvg />
            </a>
          </Link>
          <h2>
            <span>Session:</span>
            <span>{SessionData.TitleSession}</span>
          </h2>
          <h2>
            <span>Course:</span>
            <span>{SessionData.TitleCourse}</span>
          </h2>
          <div className="dateWrap">
            <p className="date">
              <span>Date:</span>
              <span>{SessionData.day}</span>/<span>{SessionData.month}</span>/
              <span>{SessionData.year}</span>
            </p>
            <p className="time">
              <span>Time:</span>
              <span>{SessionData.start}</span> - <span>{SessionData.end}</span>
            </p>
          </div>
          <p className="status">
            <span>Status:</span>
            {SessionData.status} the session
          </p>
          <h2 className="FeedbackTitle">Feedback List:</h2>
          <ul className="FeedbackListWrapper">
            {FeedBackData.map((feedbackElem, index) => (
              <li className={"LkSessionListElem"} key={"LkListElem" + index}>
                <LkFeedBackElem
                  id={feedbackElem.id}
                  name={feedbackElem.name}
                  messages={feedbackElem.messages}
                  rate={feedbackElem.rate}
                  setIsChatOpen={setIsChatOpen}
                  isChatOpen={isChatOpen}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Chat isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
    </Header>
  );
};

export default SessionPage;
