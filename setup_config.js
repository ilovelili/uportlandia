module.exports.config = {
	region: "us-east-1",
	serviceName: "smartkity",
	ssmParam: {
		issuers: "/uportlandia/${opt:stage}/issuers",
	},
	s3Bucket: {
		stage: "smartkity",
		prod: "smartkity",
	},
	domain: {
		stage: "smartkity.com",
		prod: "smartkity.com",
	},
	cors: true,
};

module.exports.ISSUER_PROFILES = [
	{
		id: "CITY_ID",
		name: "The City of uPortlandia",
		url: {
			stage: "https://smartkity.com/city",
			prod: "https://smartkity.com/city",
		},
		profileImage: "src/images/city-logo.png",
	},
	{
		id: "DIPLOMA",
		name: "The University of uPortlandia",
		url: {
			stage: "https://smartkity.com/university",
			prod: "https://smartkity.com/university",
		},
		profileImage: "src/images/university-logo.png",
	},
	{
		id: "COMPANY",
		name: "Dream Job LLC.",
		url: {
			stage: "https://smartkity.com/company",
			prod: "https://smartkity.com/company",
		},
		profileImage: "src/images/company-logo.png",
	},
	{
		id: "INSURANCE",
		name: "People Care LLC.",
		url: {
			stage: "https://smartkity.com/insurance",
			prod: "https://smartkity.com/insurance",
		},
		profileImage: "src/images/insurance-logo.png",
	},
	{
		id: "PHARMACY",
		name: "Your Health Medical Center",
		url: {
			stage: "https://smartkity.com/pharmacy",
			prod: "https://smartkity.com/pharmacy",
		},
		profileImage: "src/images/pharmacy-logo.png",
	},
	{
		id: "TRANSPORT",
		name: "uPortlandia City Transit",
		url: {
			stage: "https://smartkity.com/transport",
			prod: "https://smartkity.com/transport",
		},
		profileImage: "src/images/transport-logo.png",
	},
	{
		id: "MUSEUM",
		name: "uPortlandia Museum of Modern Art",
		url: {
			stage: "https://smartkity.com/museum",
			prod: "https://smartkity.com/museum",
		},
		profileImage: "src/images/museum-logo.png",
	},
];
