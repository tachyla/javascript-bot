const Bot = require('../index');

describe("Browser Operations", () => {
    it("bot status is inactive", () => {
        const testBot = new Bot();

        expect(testBot.status).toStrictEqual({status: "inactive"});
    });

    it("bot status is active", () => {
        const testBot = new Bot();
        testBot.updateStatus("active");

        expect(testBot.status).toStrictEqual({status: "active"});
    });
});