const getMovieData = require("./src/api");
describe("check api", () => {
    test("returns the title of the first album", async () => {
        const movies = await getMovieData();
        expect(movies).toBeGreaterThan(0);
    });
});
