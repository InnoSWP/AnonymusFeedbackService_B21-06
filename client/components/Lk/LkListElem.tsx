import Link from "next/link";
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
            <h3>MVP and Deciding What to Build</h3>
            <span>05/30/2022</span>
          </div>
          <h4>[SUM 22] Software Project</h4>
        </div>
        <div className="RightSide">
          <button>View Details</button>
        </div>
      </a>
    </Link>
  );
};

export default LkListElem;
