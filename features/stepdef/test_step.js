const {Given , When , Then}=require("@cucumber/cucumber");

const assert = require("assert");

Given('i have a number {int}', function (int) {
    this.num = int;
    console.log("Starting with Number : "+int);
    

    });

When('i add number {int}', function (int) {
        this.total = this.num +int;
        console.log("Adding Number : "+int);
            console.log("Total : "+this.total);
        }); 
    
Then('i get total is {int}', function (int) {

    assert.strictEqual(this.total, int, "Expected : "
         + int + " But Got " + this.total);

            });   