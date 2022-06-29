import Header from "../../hoc/Header";
import LkCreateSession from "../../components/Lk/LkCreateSession";
import LkSessionsList from "../../components/Lk/LkSessionsList";

const Lk = () => {
  return (
    <Header>
      <div className="LkMainPage">
        <LkCreateSession />
        <LkSessionsList />
      </div>
    </Header>
  );
};

export default Lk;
