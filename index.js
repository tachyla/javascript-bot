const puppeteer = require('puppeteer');

module.exports = class Bot {

    constructor(status){
        this.status = { status: null}
    }

    updateStatus(status){
        return this.status = {status: "active"}
    }
} 

