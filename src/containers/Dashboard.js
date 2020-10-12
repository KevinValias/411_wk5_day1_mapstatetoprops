import { connect } from "react-redux";
import Dashboard from "../components/Dashboard.js";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cars: state.cars
  };
};

export default connect(mapStateToProps)(Dashboard); 