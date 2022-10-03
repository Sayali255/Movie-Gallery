let cl = console.log;


// ................DOM Selection.....................

	const showModalbtn = document.getElementById('showModal');
	const backDrop = document.getElementById('backDrop');
	const myModal = document.getElementById('myModal');
	const titleControl = document.getElementById('title');
	const imgUrlControl = document.getElementById('imgUrl');
	const ratingControl = document.getElementById('rating');
	const myclose = Array.from(document.querySelectorAll('.myclose')); 
	const movieInfo = document.getElementById('movieInfo');
	const moveForm = document.getElementById('moveForm');
	
	let movieArry =[];
	
	//////////////// callBack Function///////////////////////////////
	
	const showModalHandler = function(){
		backDrop.classList.remove('d-none');
		myModal.classList.remove('d-none');

	}
	
	const hideModalHandler = function(){
		backDrop.classList.add('d-none');
		myModal.classList.add('d-none');

	}
	
	const onMovieAddHandler = function(event){
		event.preventDefault();
		cl(this);
		hideModalHandler();
		let obj = {
			title: titleControl.value,
			imgUrl: imgUrlControl.value,
			rating: ratingControl.value
		}
		cl(obj);
		movieArry.push(obj);
		teamplating(movieArry);
		cl(movieArry);
		this.reset();
	}
	
	// ~~~~~~~~~~~~~~~~~~~~~~~~ Event Binding~~~~~~~~~~~~~~~~~~~~~~~~~
	
	
	showModalbtn.addEventListener('click', showModalHandler);
	backDrop.addEventListener('click', hideModalHandler);
	moveForm.addEventListener('submit', onMovieAddHandler);
	
	
	myclose.forEach(function(ele){
		ele.addEventListener('click', hideModalHandler)
	})
	
	
	function teamplating(arr){
		let result = '';
		arr.forEach(function(ele){
			result += `
			
			<div class="col-md-4">
				 <div class="card">
					<div class="card-body">
						<h3> ${ele.title} </h3>
						<figure>
							<img src="${ele.imgUrl}" alt="${ele.title}" title="${ele.title}" class="img-fluid movieImg">
						</figure>
						<figcaption>
							<p> ${ele.rating}/5 </p>
						</figcaption>
					</div>
				 </div>
				</div>
			
			
			`
		movieInfo.innerHTML = result;
		})
	}