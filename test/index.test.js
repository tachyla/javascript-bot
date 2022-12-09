const Bot = require('../index');

describe("Browser Operations", () => {
    it("bot status is null", () => {
        const indexInstance = new Bot();
        expect(indexInstance.status).toStrictEqual({status: null});
    });
});