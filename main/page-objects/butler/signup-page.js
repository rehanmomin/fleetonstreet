import { Selector } from 'testcafe';
import { t } from 'testcafe';

class RegisterInfoPage{
	constructor(){
		//Signup Page
		this.signup = Selector('button[class="ui large button"]')

		//
		this.header = Selector('h2')
		this.apply = Selector('button')

		//Step One Page
		this.stepOneHeader = Selector('form > h3')
		this.address = Selector(' div.searchInput > input')
		this.preferredName = Selector('input[name = "firstName"]')
		this.lastName = Selector('input[name = "lastName"]')
		this.gender = Selector('div[name = "gender"]')
		this.phoneNumber = Selector('input[name = "phoneNumber"]')
		this.email = Selector('input[name = "email"]')
		this.password = Selector('input[name = "password"]')
		this.continueStepOne = Selector('button')

		//Step Two Page
		this.experience = Selector('i.dropdown.icon')
		this.cleaningExperienceAtAnotherHomeCleaningCompany = Selector('input[name="cleaningExperienceAtAnotherHomeCleaningCompany"]')
		this.canDoCleaning = Selector('input[name="canDoCleaning"]')
		this.howWouldTheButlerTidyARoom = Selector('textarea[name="howWouldTheButlerTidyARoom"]')
		this.continueStepTwo = Selector('button[class="ui teal large fluid button"]')

		//Step Three - Background
		this.tellUsAboutYourselfNotes = Selector('textarea[name="tellUsAboutYourselfNotes"]')
		this.curriculumPlainText = Selector('textarea[name="curriculumPlainText"]')
		this.butlerRefereePhoneNumber = Selector('input[name="butlerRefereePhoneNumber"]')
		this.languageProf = Selector('div[name="languageProf"]')
		this.nativeEnglishSpeaker = Selector('input[name="nativeEnglishSpeaker"]')
		this.hasWorkingRightsInAustralia = Selector('input[name="hasWorkingRightsInAustralia"]')
		this.expectedLivingInAustraliaPeriod = Selector('div[name="expectedLivingInAustraliaPeriod"]')
		this.hasPoliceCheckOrWillGetOneWhenStartingWithUs = Selector('input[name="hasPoliceCheckOrWillGetOneWhenStartingWithUs"]')
		this.abnNumber = Selector('input[name="abnNumber"]')
		this.continueStepThree = Selector('button[class="ui teal large fluid button"]')

		//Step four 
		this.hasCar = Selector('input[name="hasCar"]')
		this.canCommitToWorkSameDaysEachWeek = Selector('div[name="canCommitToWorkSameDaysEachWeek"]')
		this.bankAccountName = Selector('input[name="bankAccountName"]')
		this.bankBsbNumber = Selector('input[name="bankBsbNumber"]')
		this.bankAccountNumber = Selector('input[name="bankAccountNumber"]')
		this.whereDidButlerHearAboutUs = Selector('input[name="whereDidButlerHearAboutUs"]')
		this.isStayAtHomeMum = Selector('input[name="isStayAtHomeMum"]')
		this.workingHoursPerWeekIdeally = Selector('div[name="workingHoursPerWeekIdeally"]')
		this.howLongWouldButlerWorkWithUs = Selector('div[name="howLongWouldButlerWorkWithUs"]')
		this.reasonsButlerMayLeaveInComingMonths = Selector('div[name="reasonsButlerMayLeaveInComingMonths"]')
		this.hasWorkedwithAnyOtherPlatforms = Selector('form > div:nth-child(26) > div:nth-child(9) > div > input')
		this.answersGivenThruthfully = Selector('input[name="answersGivenThruthfully"]')
		this.sendApplication = Selector('button[class="ui teal large fluid button"]')
	}

	async validateSignupAndApply(){
		await t
			.click(this.signup)
			.expect(this.header.exists).ok()
			.click(this.apply)
			console.log("Applied for signup")
	}

	async validateAndCompleteStepOne(SignupData, email){
		await t
			.expect(this.stepOneHeader.exists).ok()
			.typeText(this.address, SignupData.address, { replace: true} , { paste: true },{speed: 0.5})
			.pressKey('down tab',{speed : 0.5})
			.typeText(this.preferredName, SignupData.firstname)
			.typeText(this.lastName, SignupData.lastname)
			.click(this.gender)
			.pressKey('down tab',{speed : 0.5})
			.typeText(this.phoneNumber, SignupData.phone)
			.typeText(this.email, email)
			.typeText(this.password, SignupData.password)
			.click(this.continueStepOne)
	}

	async validateAndCompleteStepTwo(){
		await t
			.click(this.experience)
			.pressKey('down tab',{speed : 0.5})
			.click(this.cleaningExperienceAtAnotherHomeCleaningCompany)
			.click(this.canDoCleaning)
			.typeText(this.howWouldTheButlerTidyARoom,"Test Test Test")
			.click(this.continueStepTwo)
	}

	async validateAndCompleteStepThree(){
		await t
			.typeText(this.tellUsAboutYourselfNotes,"Test Test Test")
			.typeText(this.curriculumPlainText,"Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test")
			.typeText(this.butlerRefereePhoneNumber,"123456789")
			.click(this.languageProf)
			.click(this.nativeEnglishSpeaker)
			.click(this.hasWorkingRightsInAustralia)
			.click(this.expectedLivingInAustraliaPeriod)
			.pressKey('down tab',{speed : 0.5})
			.click(this.hasPoliceCheckOrWillGetOneWhenStartingWithUs)
			.typeText(this.abnNumber,"12323454345")
			.click(this.continueStepThree)
	}

	

	async validateAndCompleteStepFour(){
		await t
			.click(this.canCommitToWorkSameDaysEachWeek)
			.pressKey('down tab',{speed : 0.5})
			.typeText(this.bankAccountName, "Test Bank")
			.typeText(this.bankBsbNumber, "012345")
			.typeText(this.bankAccountNumber, "123456791")
			.typeText(this.whereDidButlerHearAboutUs, "Test")
			.click(this.isStayAtHomeMum)
			.click(this.workingHoursPerWeekIdeally)
			.pressKey('down down down tab',{speed : 0.5})
			.click(this.howLongWouldButlerWorkWithUs)
			.pressKey('down down down tab',{speed : 0.5})
			.click(this.reasonsButlerMayLeaveInComingMonths)
			.pressKey('down tab',{speed : 0.5})
			.click(this.hasWorkedwithAnyOtherPlatforms)
			.click(this.answersGivenThruthfully)
			.click(this.sendApplication)
	}

}
export default new RegisterInfoPage();
