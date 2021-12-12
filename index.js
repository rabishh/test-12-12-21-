function reslt(){
    url="https://meme-api.herokuapp.com/gimme"
fetch(url)
.then(function (response){
    return response.json();
})
.then(function(data){
   set_data(data)
})
.catch(function(error){
console.log("Error:" + error);
});
}
function set_data(data){
    document.getElementById('image').src=data["url"];
    
    document.getElementById('title').innerText=data["title"];
    document.getElementById('author').innerText= "author name = " + data["author"];
    document.getElementById('like').innerText=data["ups"];
    document.getElementById('posturl').href=data["postLink"];
}
