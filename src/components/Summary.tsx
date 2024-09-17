import { data } from "../../data/data";
import SummaryItem from "./SummaryItem";
function Summary() {
  return (
    <section className="summary">
      <div>
        <h2>Summary</h2>
      </div>
      <ul className="summary-list">
        {data.map(item => (
          <SummaryItem key={item.category} {...item} />
        ))}
      </ul>
      <button className="btn">Continue</button>
    </section>
  );
}

export default Summary;
