//============zodiac project=================//
//											 //
//											 //
//			      Done by					 //
//			    Martin Silva	 			 //
//											 //
//											 //
//											 //
//===========================================//

let zodiacArr = [
	{
		sign: "Aries",
		desc: "The pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate, fight for our beliefs and fearlessly put ourselves out there.",
		date: "Mar 21st - Apr 19th",
		imgSrc: "img/aries.jpg"
	},
	{
		sign: 
		"Taurus",
		desc: "The persistent provider of the horoscope family, Taurus energy helps us seek security, enjoy earthly pleasures and get the job done.",
		date: "Apr 20th - May 20th",
		imgSrc: "img/taurus.jpg"
	},
	{
		sign: "Gemini",
		desc: "The most versatile and vibrant horoscope sign, Gemini energy helps us communicate, collaborate and fly our freak flags at full mast.",
		date: "May 21st - Jun -20th",
		imgSrc: "img/gemini.jpg"
	},
	{
		sign: "Cancer",
		desc: "The natural nurturer of the horoscope wheel, Cancer energy helps us connect with our feelings, plant deep roots and feather our family nests.",
		date: "Jun 21st - Jul 22nd",
		imgSrc: "img/cancer.jpg"
	},
	{
		sign: "Leo",
		desc: "The drama queen and regal ruler of the horoscope clan, Leo energy helps us shine, express ourselves boldly and wear our hearts on our sleeves.", 
		date: "Jul 23rd - Aug 22nd",
		imgSrc: "img/leo.jpg"
	},
	{
		sign: "Virgo",
		desc: "The masterful helper of the horoscope wheel, Virgo energy teaches us to serve, do impeccable work and prioritize wellbeing—of ourselves, our loved ones and the planet.",
		date: "Aug 23rd - Sep 22nd",
		imgSrc: "img/virgo.jpg"
	},
	{
		sign: "Libra",
		desc: "The balanced beautifier of the horoscope family, Libra energy inspires us to seek peace, harmony and cooperation—and to do it with style and grace.",
		date: "Sep 23rd - Oct 22nd",
		imgSrc: "img/libra.jpg"
	},
	{
		sign: "Scorpio",
		desc: "The most intense and focused of the horoscope signs, Scorpio energy helps us dive deep, merge our superpowers and form bonds that are built to last.",
		date: "Oct 23rd - Nov - 21st",
		imgSrc: "img/scorpio.jpg"
	},
	{
		sign: "Sagittarius",
		desc: "The worldly adventurer of the horoscope wheel, Sagittarius energy inspires us to dream big, chase the impossible and take fearless risks.",
		date: "Nov 22nd - Dec 21st",
		imgSrc: "img/sagittarius.jpg"
	},
	{
		sign: "Capricorn",
		desc: "The measured master planner of the horoscope family, Capricorn energy teaches us the power of structure and long-term goals.",
		date: "Dec 22nd - Jan 19th",
		imgSrc: "img/capricorn.jpg"
	},
	{
		sign: "Aquarious",
		desc: "The mad scientist and humanitarian of the horoscope wheel, futuristic Aquarius energy helps us innovate and unite for social justice.",
		date: "Jan 20th - Feb 18th",
		imgSrc: "img/aquarius.jpg"
	},
	{
		sign: "Pisces",
		desc: "The dreamer and healer of the horoscope family, Pisces energy awakens compassion, imagination and artistry, uniting us as one.",
		date: "Feb 19th - Mar 20th",
		imgSrc:"img/pisces.jpg"
	}
]

// function for zodiac //
function findZodiac(){
	let zodiacInput = document.getElementById("zodiac").value;
	let signs = document.getElementById("sign");
	let desc = document.getElementById("zodiacDesc");
	let dates = document.getElementById("dates");
	let zodiacPic = document.getElementById("zodiacPic");
	for(let i = 0; i < zodiacArr.length; i++){
		if(zodiacInput.toLowerCase() == zodiacArr[i].sign.toLowerCase()){
			zodiacPic.src = zodiacArr[i].imgSrc;
			sign.innerHTML = zodiacArr[i].sign;
			zodiacDesc.innerHTML = zodiacArr[i].desc;
			dates.innerHTML = zodiacArr[i].date;
			
		}
	}
}

// jquery effects//
$("img").each(function(index, image){
   $(image).removeAttr("alt");
});