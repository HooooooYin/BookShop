export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      // ...错误处理
    }
};

export const loadState = () => {
    try{
      const serializedState = localStorage.getItem('state');
      if(serializedState === null){
        return undefined;
      }
      else{
        return JSON.parse(serializedState);
      }
    }catch(err){
      return undefined;
    }
  }
