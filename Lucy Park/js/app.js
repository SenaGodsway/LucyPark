const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
const slides =document.querySelectorAll('.slide');
const slideshowBtn =document.querySelector('#about button');
const about =document.querySelector('#about');
const controlBtns=document.querySelector('.control');
const auto = true;
const intervalTime= 2000;
let slideInterval;

console.log(controlBtns);
//Next slide
function nextSlide() {
	const current =document.querySelector('.active');
		current.classList.remove('active')
	if (current.nextElementSibling) {
		current.nextElementSibling.classList.add('active')

	}
	else{
		// current.nextElementSibling.classList.add('active');
		slides[0].classList.add('active');
	}

}

//previous slide
function prevSlide(){
	const current = document.querySelector('.active');
	current.classList.remove('active');
	if (current.previousElementSibling) {
		current.previousElementSibling.classList.add('active');
	}
	else{
		slides[slides.length-1].classList.add('active');
	}
}

next.addEventListener('click', ()=>{
	nextSlide();
});
prev.addEventListener('click', ()=>{
	prevSlide();
});

if (auto) {
	slideInterval=setInterval(nextSlide, intervalTime);
}
//Slideshow
function showSlide(){
	about.style.display="none";
	controlBtns.style.display="block";

}

slideshowBtn.addEventListener('click', ()=>{
	showSlide();
	console.log('works');
});
console.log(showSlide);
console.log(slideshowBtn);
console.log(about);

//Gallery
const btn=document.querySelectorAll('.category button');
console.log(btn);
const gallery =document.querySelectorAll('.gallery .list');

btn.forEach(item =>{
	item.addEventListener("click", function(){
		for(let i=0; i < btn.length; i++){
			btn[i].classList.remove("active");
		}
		item.classList.add("active");

		gallery.forEach(show =>{
			show.style.display="none";
			let imgs=item.textContent.toLowerCase();
			if (show.getAttribute("data-att") === imgs || imgs=== "all") {
				show.style.display="block";
			}
		});
	});
})


//Portfolio
const portfolioBtn =document.querySelector('.menu .portfolio');
const portfolio=document.querySelector('#portfolio');
function showPortfolio(){
	portfolio.style.display="block";

}

	portfolioBtn.addEventListener('click', function(){
		showPortfolio();
	});