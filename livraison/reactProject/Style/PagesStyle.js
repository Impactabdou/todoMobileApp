import { StyleSheet } from "react-native-web";
import colors from "./Colors";

const styles = StyleSheet.create({
  /**
   * page styles
   */
  loginPage: {
    paddingTop: 20,
    backgroundColor: colors.background,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "felx-start",
  },
  todoListsPage: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  homePage: {
    paddingTop: 150,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.background,
  },
  signoutPage: {
    paddingTop: 200,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.background,
  },
  /*
   * input styles
   */
  inputStyle: {
    height: 45,
    width: 300,
    borderColor: colors.inputBorder,
    borderWidth: 2,
    margin: 10,
    padding: 8,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: colors.inputs,
    textAlign: "center",
    outlineStyle: "none",
    fontSize: 17,
  },
  /**
   * container styles
   */
  todoListsContainer: {
    textAlign: "center",
    height: "50%",
    width: "80%",
    fontWeight: "bold",
    color: colors.bodyText,
  },
  todosContainer: {
    height: 150,
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 5,
  },
  filterContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-envenly",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  /*
   * Other
   */
  styleView: {
    backgroundColor: colors.background,
    height: "100%",
    alignItems: "center",
    width: "100%",
  },

  shadow: {
    shadowColor: "#53b88e",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3.5,
    elevation: 5,
  },
  /*Image styles */
  sginInImage: {
    width: 200,
    height: 200,
    margin: 40,
  },
  IconStyle: {
    width: 24,
    height: 24,
    tintColor: colors.bodyText,
  },

  /*Text styles*/
  textSignIn: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    margin: "10px",
    textAlign: "center",
    fontWeight: 900,
  },
  defaultText: {
    color: colors.bodyText,
    fontSize: 18,
    fontWeight: 400,
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  feedbackText: {
    color: colors.bodyText,
    margin: "10px",
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
  },
  titleText: {
    fontSize: 35,
    fontWeight: 900,
  },

  /**
   * cards styles
   */
  todoListsCard: {
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "center",
    justifyItems: "center",
    backgroundColor: colors.listCard,
    marginBottom: 15,
    width: "80vw",
    height: "10vh",
    borderRadius: 10,
    opacity: "0.8",
  },
  todoFilterCard: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.listCard,
    marginBottom: 10,
    width: "50%",
    height: 40,
    borderRadius: 10,
    opacity: "0.8",
  },
  /**
   * progress bar style
   */
  ProgressBar: {
    width: "80%",
    height: 10,
  },
});

export default styles;
