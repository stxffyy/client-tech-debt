export async function fetchMistakes () {
  try {
    const response = await fetch("http://localhost:3010/api/mistake")
    const data = await response.json()
    const { mistakes } = data
    // console.log(mistakes)
    return mistakes
  } catch (error) {
    console.error("Ошибка при получении массива ошибок:", error)
    throw error
  }
}

export async function fetchRules () {
  try {
    const response = await fetch("http://localhost:3010/api/config")
    const data = await response.json()
    const rules = data.rules || []
    // console.log(rules)
    return rules
  } catch (error) {
    console.error("Ошибка при получении массива правил:", error)
    throw error
  }
}

export async function fetchRepositories () {
  try {
    const response = await fetch("http://localhost:3010/api/config")
    const data = await response.json()
    const repositories = data.repositories || []
    // console.log(repositories)
    return repositories
  } catch (error) {
    console.error("Ошибка при получении массива репозиториев:", error)
    throw error
  }
}
