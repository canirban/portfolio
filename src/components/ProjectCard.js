import { Col } from "react-bootstrap";
import analyticsEventTracker from "../utils/Analytics";

export const ProjectCard = ({ title, description, imgUrl, appUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        onClick={() => {
          analyticsEventTracker(
            `${title} project seen`,
            "OnClickProject",
            `${title} project seen`
          );
        }}
        target="_blank"
        rel="noreferrer"
        style={{ color: "white" }}
        href={appUrl}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
