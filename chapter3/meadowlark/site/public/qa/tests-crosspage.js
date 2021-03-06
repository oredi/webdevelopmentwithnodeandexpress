/**
 * Created by dseet on 7/4/2014.
 */
var zombie = require('zombie'),
    assert = require('chai').assert;

var browser;

suite("Cross-Page Tests", function () {
    setup(function () {
        browser = new zombie();
    });

    test('requesting a group rate quote from the hood tour page should populate the referrer field', function (done) {
        var referrer = 'http://localhost:3000/tours/hood-river';
        browser.visit(referrer, function () {
            browser.click('.requestGroupRate', function () {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('requesting a group rate from the oregon coast tour page should populate the referrer field', function (done) {
        var referrer = 'http://localhost:3000/tours/oregon-coast';
        browser.visit(referrer, function () {
            browser.click('.requestGroupRate', function () {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test("visiting the 'request group rate' directly should result in an empty referrer field", function (done) {
        browser.visit('http://localhost:3000/tours/request-group-rate', function () {
            assert(browser.field('referrer').value === '');
            done();
        });
    });
});