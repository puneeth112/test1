let homepage=function(){
   let firstnumber_input= element(by.model('first'));
   let secondnumber_input=element(by.model('second'));        //locators
   let gobutton= element(by.css('[ng-click="doAddition()"]'));

   this.get=function(url){
      browser.get(url);
   }
   this.enterFirstnumber=function(firstNo){
firstnumber_input.sendKeys(firstNo);
   };

   this.enterSecondnumber=function(secondNo){               //actions
       secondnumber_input.sendKeys(secondNo);    
   };

   this.clickGobutton=function(){
       gobutton.click();
   };

   this.verifyResult=function(result){
       let output=element(by.cssContainingText('.ng-binding',result))
       expect(output.getText()).toEqual(result);
   }
}

module.exports=new homepage;