import React, { Dispatch, SetStateAction } from "react";
import { IFeedBack } from "../../pages/lk/session/[:id]";

interface ILkFeedBackElem {
  isChatOpen: boolean;
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
  name: string;
  messages?: string[];
  rate?: number;
}

const LkFeedBackElem = ({
  id,
  messages,
  name,
  rate,
  isChatOpen,
  setIsChatOpen
}: ILkFeedBackElem) => {
  return (
    <div>
      <div className="LeftSide">
        <div className="LeftSideWrapper">
          <h3>{name}</h3>
          <span>05/30/2022</span>
          <span>14:00</span>
        </div>
        <h4>
          {messages?.length
            ? `${messages[0].split("").slice(0, 40).join("")}...`
            : null}
        </h4>
      </div>
      <div className="RightSide">
        <button>Report</button>
        <button onClick={() => setIsChatOpen(true)}>View Details</button>
      </div>
    </div>
  );
};

export default LkFeedBackElem;
