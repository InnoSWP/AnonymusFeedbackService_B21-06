import Link from "next/link";
import {fixNumbs} from "./../../services/DataGenerator"
import { IListElem } from "./LkSessionsList";

const LkListElem = ({
  TitleCourse,
  TitleSession,
  day,
  id,
  month,
  year
}: IListElem) => {
  return (
    <Link href={`/lk/session/${id}`}>
      <a>
        <div className="LeftSide">
          <div className="LeftSideWrapper">
            <h3>{TitleCourse}</h3>
            <span>{fixNumbs(month)}/{fixNumbs(day)}/{year}</span>
          </div>
          <h4>{TitleSession}</h4>
        </div>
        <div className="RightSide">
          <button>View Details</button>
        </div>
      </a>
    </Link>
  );
};

export default LkListElem;
