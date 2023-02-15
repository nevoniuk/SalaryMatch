class Joboffer{
	title: string;
	constructor(title: string){
		this.title = title;
	}
}

export let joboffers: Joboffer[];
let testoffers: Joboffer[];
let j1 = new Joboffer("software engineer");
let j2 = new Joboffer("software developer");
let j3 = new Joboffer("software engineer1");
let j4 = new Joboffer("software developer1");
let j5 = new Joboffer("software engineer2");
let j6 = new Joboffer("software developer2");
let j7 = new Joboffer("software engineer3");
let j8 = new Joboffer("software developer3");
let j9 = new Joboffer("software engineer4");
let j10 = new Joboffer("software developer4");
joboffers = [j1, j2, j3, j4, j5, j6, j7, j8, j9, j10];
testoffers = [j6, j7, j8, j9, j10];

export function addOffers() {
	for (let i = 0; i < testoffers.length; i++) {
		joboffers[i].title = testoffers[i].title
	}
	return joboffers;
}
//addOffers();