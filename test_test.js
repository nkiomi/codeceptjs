Feature('test');

Scenario('test something', ({ I }) => {
    I.amOnPage('http://www.google.com');
    I.click('I agree');
});
