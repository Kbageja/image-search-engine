
const  searchbox = document.getElementById("searchbox");
const  submit2  =  document.getElementById("submit");
const more2 =  document.getElementById("more2");
const  showimg = document.getElementById("showimg");
const  input = document.getElementById("input");



 let keyword = "";
 let page = 1;

 async function searchimages(){
    keyword  = searchbox.value;
    const url  = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;
    const response  = await fetch(url);
    const data = await response.json();
    console.log(data);
    const results  = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src  = result.urls.small;
        const link = document.createElement("a")
        link.href =  result.links.html;
        link.target = "_blank";
        link.appendChild(image);
        showimg.appendChild(link);
    })
    more2.style.display ="block";



 }
 input.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchimages();
 });
 more2.addEventListener("click",()=>{
    page++;
    searchimages();

 })
 
