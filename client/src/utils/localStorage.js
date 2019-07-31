export const set = (name, value) => {
  localStorage.setItem(name, value)
}

export const retrieve = (name) => {
  localStorage.getItem(name)
}

export const removeItem = (name) => {
  localStorage.removeItem(name)
}