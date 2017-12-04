export const loadState = () => {
  try {
    return JSON.parse(localStorage.getItem('boardsCollection'));
  } catch (err) {
    return undefined;
  }
};

export const saveState = (boards) => {
  try {
    const serializedActive = JSON.stringify(boards);
    localStorage.setItem('boardsCollection', serializedActive);
  } catch (err) {
    throw new Error(err);
  }
};
