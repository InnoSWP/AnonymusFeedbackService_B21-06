import React, {useEffect, useState} from "react";
import Header from "../../../hoc/Header";
import Link from "next/link";
import BackSvg from "../../../components/svg/BackSvg";
import LkListElem from "../../../components/Lk/LkListElem";
import LkFeedBackElem from "../../../components/Lk/LkFeedBackElem";
import Chat from "../../../components/Lk/Chat";
import axios from "axios";
import {back_url} from "../../../vars";
import {IListElem} from "../../../components/Lk/LkSessionsList";
import {useRouter} from "next/router";

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

  const [session, setSession] = useState<IListElem>({} as IListElem)
  const [feedback, setFeedback] = useState<IFeedBack[]>([])

  const route = useRouter()

  async function fetchSessions() {
    try {
      const id = route.asPath.split('/')[3]
      const {data} = await axios.get(`${back_url}/session/${id}`)
      setSession(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchSessions();
  }, [])

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
            <span>{session.TitleSession}</span>
          </h2>
          <h2>
            <span>Course:</span>
            <span>{session.TitleCourse}</span>
          </h2>
          <div className="dateWrap">
            <p className="date">
              <span>Date:</span>
              <span>{session.day}</span>/<span>{session.month}</span>/
              <span>{session.year}</span>
            </p>
            <p className="time">
              <span>Time:</span>
              <span>{session.start}</span> - <span>{session.end}</span>
            </p>
          </div>
          <p className="status">
            <span>Status:</span>
            {session.status} the session
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
