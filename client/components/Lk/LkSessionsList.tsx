import Link from "next/link";
import LkListElem from "./LkListElem";

export interface IListElem {
  id: number;
  TitleCourse: string;
  TitleSession: string;
  year: number;
  month: number;
  day: number;
}

const LkSessionsList = () => {
  const Sessions: IListElem[] = [
    {
      id: 1,
      TitleCourse: "MVP and Deciding What to Build",
      TitleSession: "[SUM 22] Software Project",
      year: 2020,
      month: 10,
      day: 31
    },
    {
      id: 1,
      TitleCourse: "MVP and Deciding What to Build",
      TitleSession: "[SUM 22] Software Project",
      year: 2020,
      month: 10,
      day: 31
    },
    {
      id: 1,
      TitleCourse: "MVP and Deciding What to Build",
      TitleSession: "[SUM 22] Software Project",
      year: 2020,
      month: 10,
      day: 31
    },
    {
      id: 1,
      TitleCourse: "MVP and Deciding What to Build",
      TitleSession: "[SUM 22] Software Project",
      year: 2020,
      month: 10,
      day: 31
    },
    {
      id: 1,
      TitleCourse: "MVP and Deciding What to Build",
      TitleSession: "[SUM 22] Software Project",
      year: 2020,
      month: 10,
      day: 31
    },
    {
      id: 1,
      TitleCourse: "MVP and Deciding What to Build",
      TitleSession: "[SUM 22] Software Project",
      year: 2020,
      month: 10,
      day: 31
    }
  ];

  return (
    <section className="LkSessionList">
      <div className="container">
        <h2>Active sessions:</h2>
        <ul>
          {Sessions.map((el, index) => (
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
