import { initGlobalState } from "qiankun";

const initialState = {
  operation: 'default',
  goPath: ''
};
const actions = initGlobalState(initialState);

export default actions;