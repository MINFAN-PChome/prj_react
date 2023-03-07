const mapDispatchToProps = (dispatch) => {
  return {
    addButtonClick: () => dispatch({ type: 'ADD_BUTTON_CLICK' }),
  };
};
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
