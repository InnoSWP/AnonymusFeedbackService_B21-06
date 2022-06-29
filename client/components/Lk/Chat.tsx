import { Dispatch, SetStateAction } from "react";
import Close from "../svg/Close";
import { AnimatePresence, motion } from "framer-motion";
import { FadeInMotionOpacity, ChatUp } from "../../motions/FadeMotion";

interface IChat {
  isChatOpen: boolean;
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
}

const Chat = ({ isChatOpen, setIsChatOpen }: IChat) => {
  const feedBackData = {
    id: 1,
    name: "Anonimus",
    messages: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores enim fuga labore libero nisi nulla possimus rem suscipit voluptas.",
      "test1"
    ],
    rate: 5
  };

  return (
    <AnimatePresence>
      {isChatOpen && (
        <motion.div
          variants={FadeInMotionOpacity()}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={0}
          className={"ChatPopup"}
        >
          <motion.div
            variants={ChatUp(0)}
            className={isChatOpen ? "ChatPopupInner active" : "ChatPopupInner"}
          >
            <Close onClick={setIsChatOpen} value={false} />
            <div className={"TopLineWrapper"}>
              <h3 className={"Name"}>{feedBackData.name}</h3>
              <span>23/07/2020</span>
              <span>14:00</span>
            </div>
            <div className="Stars">stars</div>

            <div className="MessageWindow">
              <div className="message">message sender</div>
              <div className="message professor">message professor</div>
              <div className="message">message sender</div>
              <div className="message professor">message professor</div>
              <div className="message">message sender</div>
              <div className="message professor">message professor</div>
              <div className="message">message sender</div>
              <div className="message professor">message professor</div>
              <div className="message">message sender</div>
              <div className="message professor">message professor</div>
              <div className="message">message sender</div>
              <div className="message professor">message professor</div>
            </div>

            <textarea
              placeholder="Type the answer..."
              className="MessageField"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chat;
