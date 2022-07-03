import React, {useEffect, useState} from "react";
import Header from "../../../hoc/Header";
import Link from "next/link";
import BackSvg from "../../../components/svg/BackSvg";
import LkListElem from "../../../components/Lk/LkListElem";
import LkFeedBackElem from "../../../components/Lk/LkFeedBackElem";
import Chat from "../../../components/Lk/Chat";
import axios from "axios";
import io from 'socket.io-client';
import {back_url} from "../../../vars";
import {IListElem} from "../../../components/Lk/LkSessionsList";
import {useRouter} from "next/router";
import AnonimForm from "../../../components/Lk/AnonimForm";
import useTypedSelector from "../../../hooks/useTypedSelector";

export interface IFeedBack {
  id: number;
  name: string;
  value?: string;
  rate?: number;
  anonimName?: string;
  anonim?: number;
}

const SessionPage = () => {
  const [session, setSession] = useState<IListElem>({} as IListElem)
  const [feedback, setFeedback] = useState<IFeedBack[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const userId = useTypedSelector(state => state.user.user.id)

  const route = useRouter()

  console.log(feedback)

  async function fetchSessions() {
    try {
      if (route.isReady) {
        const id = route.asPath.split('/')[3]
        const {data} = await axios.get(`${back_url}/session/${id}`)
        const feedbackResponse = await axios.get(`${back_url}/message/${id}`)
        setFeedback(feedbackResponse.data)
        setSession(data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchSessions();
  }, [route.isReady])

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [whatMessageOpen, setWhatMessageOpen] = useState<number>(0);

  const chatOpenHandler = () => {
    setIsChatOpen(true);
  };

  const socket = io('http://localhost:5000', { transports: ['websocket'] })

  useEffect(() => {
    socket.on('message', ({data}) => {
      console.log(data)
      setFeedback(prevState => [...prevState, data])
    })
  }, [])


  return (
    <Header>
      {userId == session.userId
        ? <>
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
                {feedback.map((feedbackElem, index) => (
                  <li className={"LkSessionListElem"} key={"LkListElem" + index}>
                    <LkFeedBackElem
                      id={feedbackElem.id}
                      name={feedbackElem.name}
                      messages={feedbackElem.value}
                      anonimId={feedbackElem.anonim || 100}
                      rate={feedbackElem.rate}
                      setIsChatOpen={setIsChatOpen}
                      isChatOpen={isChatOpen}
                      setWhatMessageOpen={setWhatMessageOpen}
                    />
                  </li>
                ))}
              </ul>
              {/*<h3>Send feedback</h3>*/}
              {/*<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"/>*/}
              {/*<button onClick={sendMessageHandler}>Send</button>*/}
            </div>
          </section>
          <Chat anonimId={whatMessageOpen} session={session} socket={socket} isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
        </>
        : <AnonimForm  socket={socket} session={session} />}

    </Header>
  );
};

export default SessionPage;
