type SummaryItemProps = {
  category: string;
  score: number;
  icon: string;
};

export default function SummaryItem({
  category,
  score,
  icon,
}: SummaryItemProps) {
  return (
    <li className="summary-item">
      <span className="icon-wrapper">
        <img src={icon} alt={`icon of ${category}`} />
        <span className="text-category">{category}</span>
      </span>
      <span className="text">
        <span>
          <strong className="strong">{score}</strong>/ 100
        </span>
      </span>
    </li>
  );
}
