/*  Description: Validate Home. Out Story, FAQs, Request a Demo Page for Fleet On street
*/
import { Selector, t } from 'testcafe';


var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0]
var Fakerator = require("fakerator");
var fakerator = Fakerator();

fixture `Fleet On Sreet Home Page`
.page `https://fleetonstreet.com/` 

test
  .before( async t => {
    data = config.getTestData(__dirname,__filename)
  })
(testfile+': Validate Basic end to end flow', async t =>{
  var email = fakerator.internet.email()
  await t.maximizeWindow();
  console.log("Navigated to Fleet On Street Home Page")
  //navigate to feature page
  await t.click(Selector('a').withText('Features'))
  //Validate Request Demo is present in feature page
  await t.expect(Selector('span').withText('Request a demo').exists).ok()
  //navigate to our story page
  await t.click(Selector('a').withText('Our Story'))
  //validate our story page loaded
  await t.expect(Selector('h3').withText('We are excited to share our story !').exists).ok()
  //navigate to FAQ
  await t.click(Selector('a').withText('FAQs'))
  //validate FAQ page loaded
  await t.expect(Selector('h3').withText('We are here to answer your questions!').exists).ok()
  //Request a Demo  
  await t.click(Selector('a').withText('Request a demo'))
  //validate Request Demo page loaded
  await t.expect(Selector('h3').withText('We are looking forward to your feedback!').exists).ok()
  //fill form
  await t.typeText(Selector('#form-field-name'),'Rehan')
  await t.typeText(Selector('#form-field-email'),'test@test.com')
  await t.typeText(Selector('#form-field-message'),'This is a test')


});



