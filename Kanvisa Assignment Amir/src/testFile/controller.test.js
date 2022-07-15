const app = require("../index")
const supertest = require("supertest")

describe("GET /getTrendingRepo", () => {

    test("Status code 200", async () => {
        const response = await supertest(app).get("/getTrendingRepo")
        expect(response.status).toBe(200)
    })


    test("application.json", async () => {
        const response = await supertest(app).get("/getTrendingRepo")
        expect(response.type).toBe('application/json')
    })

    
    test("data should not be empty", async () => {
        const response = await supertest(app).get("/getTrendingRepo")
        expect(response.body.data.length).not.toBe(0)
    })
})