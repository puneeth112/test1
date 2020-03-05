let homepage=require('../pages/homepage');
describe('demo caculator tests',function(){

    it('additional test',function(){
     //browser.get('http://juliemr.github.io/protractor-demo/');                                   //we can have multiplt it blocks
     homepage.get('http://juliemr.github.io/protractor-demo/');

    //  element(by.model('first')).sendKeys('2');
    homepage.enterFirstnumber('4');

    //  element(by.model('second')).sendKeys('2');
    homepage.enterSecondnumber('2');

    // element(by.css('[ng-click="doAddition()"]')).click();
    homepage.clickGobutton();

//    let result=element(by.cssContainingText('.ng-binding','4'))
//    expect(result.getText()).toEqual('4');
    homepage.verifyResult('6');
   
     browser.sleep(2000);
    });

    // it('substraction tests',function(){

    // });
});