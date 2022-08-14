/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl: "https://oneclassblog.com/wp-content/uploads/2018/05/hunter-college-4.jpg",
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl: "https://th.bing.com/th/id/R.58446b08d0303346723ee5c883b44dbd?rik=sKovcLDEMU5Dgg&riu=http%3a%2f%2fwww.bestpsychologydegrees.com%2fwp-content%2fuploads%2f2015%2f11%2fcuny-queens-college-ph-d-program-in-clinical-psychology-1024x680.jpg&ehk=BL5b3ZTswt0G9hYHeUJUHJZObyntfoDe36TSrW8JXdI%3d&risl=&pid=ImgRaw&r=0",
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl: "https://th.bing.com/th/id/OIP.ZhkNscytDlN4vIaaZ-pGpgHaGP?pid=ImgDet&rs=1",
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
        lastname: "Smith",
		email: "joe.smith@gmail.com",
		imageUrl: "https://th.bing.com/th/id/OIP.QBZjo4yOGxD-6Zb9TNiucwHaG5?pid=ImgDet&rs=1",
		gpa: 4.0
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
        lastname: "Johnson",
		email: "mary.john@gmail.com",
		imageUrl: "https://th.bing.com/th/id/OIP.ZhkNscytDlN4vIaaZ-pGpgHaGP?pid=ImgDet&rs=1",
		gpa: 3.8
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;