export const loadState = async () => JSON.parse(localStorage.getItem('boardsCollection'));

export const saveState = (boards) => {
  try {
    const serializedActive = JSON.stringify(boards);
    localStorage.setItem('boardsCollection', serializedActive);
  } catch (err) {
    throw new Error(err);
  }
};
