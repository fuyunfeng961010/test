import { initGlobalState } from "qiankun";

const initialState = {
  operation: 'default'
};
const actions = initGlobalState(initialState);

export default actions;