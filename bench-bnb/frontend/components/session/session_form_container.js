import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions"
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
  return {
      logged_in: (state.session.currentUser !== null),
      errors: state.session.errors,
      formType: (ownProps.location.pathname.includes("login")) ? "login" : "signup"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user, formType) => {
      if (formType === "login") {
        return dispatch(login(user));
      } else {
        return dispatch(signup(user));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
