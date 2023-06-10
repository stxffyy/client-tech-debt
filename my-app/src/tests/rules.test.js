// import { fetchRules } from "./services"
// // const {fetchRules} = require("../../services")

// describe("fetchRules", () => {
//   it("should fetch rules successfully", async () => {
//     const mockRules = [
//       { id: 1, name: "Rule 1" },
//       { id: 2, name: "Rule 2" }
//     ]

//     global.fetch = jest.fn().mockResolvedValueOnce({
//       json: jest.fn().mockResolvedValueOnce({ rules: mockRules })
//     })

//     const rules = await fetchRules()

//     expect(fetch).toHaveBeenCalledWith("http://localhost:3010/api/config")
//     expect(rules).toEqual(mockRules)
//   })

//   it("should throw an error when fetching rules fails", async () => {
//     const expectedError = new Error("Failed to fetch rules")

//     global.fetch = jest.fn().mockRejectedValueOnce(expectedError)

//     await expect(fetchRules()).rejects.toThrowError(expectedError)
//     expect(fetch).toHaveBeenCalledWith("http://localhost:3010/api/config")
//   })
// })
