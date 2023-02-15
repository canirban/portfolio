import ReactGA4 from "react-ga4";

const analyticsEventTracker = (category, action = "on Click", label) => {
  ReactGA4.event({ category, action, label });
};
export default analyticsEventTracker;
