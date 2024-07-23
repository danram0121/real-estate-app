import "./list.scss";
import Card from "../card/Card";
import { listData } from "../../lib/testdata";

const List = () => {
  return (
    <>
      <div className="list">
        {listData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default List;
