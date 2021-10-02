function is_valid_state(state, n) {
  /**
   * state represents a complete solution.
   * each solutions is an array of n-elements, representing n-positions (indexes) of a queen on the n x n board
   */
  return state.length === n;
}

function get_candidates(state, n) {
  /**
   * each candidate represents a possibly valid state outside the attacking zone of the queen
   *
   */
}

function search(state, solutions, n) {
  if (is_valid_state(state, n)) {
    solutions.push(state);
    return;
  }

  // else, find next candidates
  for (let candidate of get_candidates(state, n)) {
    state.push(candidate);
    search(state, solutions, n);
    state.pop();
  }
}

function nqueens2(n) {
  let state = [];
  let solutions = [];
  search(state, solutions, n);
  return solutions;
}

nqueens2(4);
