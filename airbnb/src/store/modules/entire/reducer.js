const initState = {
  count: 31,
}

export function reducer(state = initState, { type, data }) {
  switch (type) {
    default:
      return { ...state, data }
  }
}
