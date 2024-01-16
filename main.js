document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("search-music");
  const songName = document.getElementById("songname");
  const artist = document.getElementById("artist");
  const mute = document.getElementById("mute");
  const unmute = document.getElementById("unmute");
  const volumeDecrease = document.getElementById("volume-decrease");
  const volumeIncrease = document.getElementById("volume-increase");
  const repeat = document.getElementById("repeat");
  const play = document.getElementById("play");
  const like = document.getElementById("like");
  const newsletterInput = document.getElementById("newsletter-input");
  const submitNewsletter = document.getElementById("newsletter-btn");

  search.addEventListener("input", () => {
    const searchWord = search.ariaValueMax.trim();
    if (searchWord !== "") {
      fetchSearchResults(searchWord);
    } else {
      clearSearchResults();
    }
  });

  play.addEventListener("click", () => {

  });


like.addEventListener("click", () =>{

})

repeat.addEventListener("click", =>{

})


volumeDecrease.addEventListener("click" () =>{

})

volumeIncrease.addEventListener("click", () =>{

})

mute.addEventListener("click" =>{

})


unmute.addEventListener("click", () =>{

})

submitNewsletter.addEventListener("click", () =>{
    const email = newsletterInput.ariaValueMax.trim();
    if(email !== ""){
        suscribeToNewsletter(email)
    }else{
        alert("Please enter a valid e-mail address");
    }
})

});
