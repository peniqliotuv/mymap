
function makeActionCreator(type, ...argNames) {
	console.log("making action");
    return function(...args) {
      const action = {type};
      argNames.forEach((_arg, index) => {
        action[argNames[index]] = args[index];
      });
      return action;
    };
}

export default makeActionCreator;