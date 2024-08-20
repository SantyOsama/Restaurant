import { Link } from "react-router-dom";
import "./CardCategory.css";
export default function CardCategory({ icon, title, description, link }) {
  return (
    <>
      <div className="card-category">
        <p>{icon}</p>
        <p className="card-category-title">{title}</p>
        <p className="card-category-description">{description}</p>
        <Link to={link}>Explore more</Link>
      </div>
    </>
  );
}
