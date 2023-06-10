// // Подключение необходимых зависимостей и настройка mock функций и объектов
// const fetch = require("node-fetch");
// const { sendLinkToBackend } = require("./your-module"); // Замените на путь к вашему модулю

// jest.mock("node-fetch"); // Имитация fetch функции

// // Тестирование функции sendLinkToBackend
// describe("sendLinkToBackend", () => {
//   beforeEach(() => {
//     jest.resetAllMocks(); // Сброс mock функций перед каждым тестом
//   });

//   test("вызывает alert при успешном запросе", async () => {
//     // Имитация успешного ответа от сервера
//     const mockResponse = {
//       ok: true,
//     };
//     fetch.mockResolvedValue(mockResponse);

//     // Имитация вывода alert
//     global.alert = jest.fn();

//     // Вызов функции sendLinkToBackend
//     await sendLinkToBackend("Test link");

//     // Проверка вызовов fetch и alert
//     expect(fetch).toHaveBeenCalledTimes(1);
//     expect(fetch).toHaveBeenCalledWith("http://localhost:3010/api/config", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ text: "Test link" }),
//     });
//     expect(global.alert).toHaveBeenCalledTimes(1);
//     expect(global.alert).toHaveBeenCalledWith("Конфигурационный репозиторий успешно скачан!");
//   });

//   test("вызывает console.error при неудачном запросе", async () => {
//     // Имитация неудачного ответа от сервера
//     const mockResponse = {
//       ok: false,
//     };
//     fetch.mockResolvedValue(mockResponse);

//     // Имитация вывода сообщения об ошибке
//     console.error = jest.fn();

//     // Вызов функции sendLinkToBackend
//     await sendLinkToBackend("Test link");

//     // Проверка вызовов fetch и console.error
//     expect(fetch).toHaveBeenCalledTimes(1);
//     expect(fetch).toHaveBeenCalledWith("http://localhost:3010/api/config", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ text: "Test link" }),
//     });
//     expect(console.error).toHaveBeenCalledTimes(1);
//     expect(console.error).toHaveBeenCalledWith("Ошибка при отправке ссылки на бэкенд.");
//   });
// })
