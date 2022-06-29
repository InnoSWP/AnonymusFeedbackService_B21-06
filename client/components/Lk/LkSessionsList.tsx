import Link from "next/link";
import LkListElem from "./LkListElem";
import {useEffect, useState} from "react";
import axios from "axios";
import {back_url} from "../../vars";
import useTypedSelector from "../../hooks/useTypedSelector";
import {setIsFetch} from "./../../redux/slices/AppSlice"
import {useDispatch} from "react-redux";

export interface IListElem {
  id: number;
  TitleCourse: string;
  TitleSession: string;
  year: number;
  month: number;
  day: number;
}

const LkSessionsList = () => {
  const [sessions, setSessions] = useState<IListElem[]>([])
  const isFetch = useTypedSelector(state => state.app.isFetch)
  const dispatch = useDispatch()

  async function fetchSessions() {
    try {
      const {data} = await axios.get(`${back_url}/session/`)
      setSessions(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchSessions();
  }, [])

  useEffect(() => {
    if (isFetch) {
      fetchSessions().then(() => {
        dispatch(setIsFetch(false))
      })
    }
  }, [isFetch])

  return (
    <section className="LkSessionList">
      <div className="container">
        <h2>All sessions:</h2>
        <ul>
          {sessions.length == 0
            ? <span>No Active sessions yet</span>
            : sessions?.sort(function(row1, row2) {
              const firstDate = new Date(row1.year, row1.month, row1.day)
              const secondDate = new Date(row2.year, row2.month, row2.day)
              // @ts-ignore
              return firstDate - secondDate;
            }).map((el, index) => (
            <li className={"LkSessionListElem"} key={"LkListElem" + index}>
              <LkListElem
                id={el.id}
                TitleCourse={el.TitleCourse}
                TitleSession={el.TitleSession}
                year={el.year}
                month={el.month}
                day={el.day}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LkSessionsList;
