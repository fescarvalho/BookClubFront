export const saveItem = async (key, data) => {
  try {
    localStorage.setItem(key, data)
    return
  } catch (e) {
    return e
  }
}

export const restoreItem = async (key) => {
  try {
    const data = localStorage.setItem(key)
    return data
  } catch (e) {
    return e
  }
}
