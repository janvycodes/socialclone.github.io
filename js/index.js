document.addEventListener("DOMContentLoaded", funtion(){
	const navItems = document.querySelectorAll(".nav-item");

	navItems.forEach(item=>{
		item.addEventListener("click",function(){
			navItems.forEach(nav=>nav.classList.remove("active"));
			this.classList.add("active");
		});
	});
});


