// import createTask from "../pages/Home/Home"
// const fetch = require("node-fetch")

// jest.mock("node-fetch") // Имитация fetch функции

// // Тестирование функции createTask
// describe("createTask", () => {
//   beforeEach(() => {
//     jest.resetAllMocks() // Сброс mock функций перед каждым тестом
//   })

//   test("создает задачу и открывает новую страницу при успешном запросе", async () => {
//     // Имитация успешного ответа от сервера
//     const mockResponse = {
//       ok: true,
//       json: () => Promise.resolve({ taskUrl: "http://jira.com/task" })
//     }
//     fetch.mockResolvedValue(mockResponse)

//     // Имитация глобального объекта window
//     global.window = {
//       open: jest.fn()
//     }

//     // Вызов функции createTask
//     await createTask("Test description", "Test summary")

//     // Проверка вызовов fetch и window.open
//     expect(fetch).toHaveBeenCalledTimes(1)
//     expect(fetch).toHaveBeenCalledWith("http://localhost:3010/api/task", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         description: "Test description",
//         summaryName: "Test summary"
//       })
//     })
//     expect(global.window.open).toHaveBeenCalledTimes(1)
//     expect(global.window.open).toHaveBeenCalledWith("http://jira.com/task", "_blank")
//   })

//   test("вызывает ошибку и выводит сообщение об ошибке при неудачном запросе", async () => {
//     // Имитация неудачного ответа от сервера
//     const mockResponse = {
//       ok: false
//     }
//     fetch.mockResolvedValue(mockResponse)

//     // Имитация вывода сообщения об ошибке
//     console.error = jest.fn()
//     global.alert = jest.fn()

//     // Вызов функции createTask
//     await createTask("Test description", "Test summary")

//     // Проверка вызовов fetch, console.error и alert
//     expect(fetch).toHaveBeenCalledTimes(1)
//     expect(fetch).toHaveBeenCalledWith("http://localhost:3010/api/task", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         description: "Test description",
//         summaryName: "Test summary"
//       })
//     })
//     expect(console.error).toHaveBeenCalledTimes(1)
//     expect(console.error).toHaveBeenCalledWith("Ошибка при создании задачи")
//     expect(alert).toHaveBeenCalledTimes(1)
//     expect(alert).toHaveBeenCalledWith(
//       "Ссылка на задачу не получена. Пожалуйста, попробуйте еще раз или свяжитесь с администратором."
//     )
//   })
// })
