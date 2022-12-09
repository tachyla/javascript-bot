const Bot = require('../index');

describe("Browser Operations", () => {
    it("bot status is null", () => {
        const testBot = new Bot();

        expect(testBot.status).toStrictEqual({status: null});
    });

    it("bot status is active", () => {
        const testBot = new Bot();
        testBot.updateStatus("active");

        expect(testBot.status).toStrictEqual({status: "active"});
    });
});