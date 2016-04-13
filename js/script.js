var github_emojis;
var http_request = new XMLHttpRequest();
http_request.open('GET','https://api.github.com/emojis',false);
http_request.onreadystatechange = function(){
  
if(this.readyState === this.Done && this.status === 200){
  
  github_emojis = JSON.parse(http_request.response);
  
};  
var get_randome_number = function(){
  
  var total_number = Math.round(Math.random()*total_number_of_emojis);
  var emoji_name = Object.keys(github_emojis)[random_number];
  
  emoji_name = emoji_name.toString();
  var emoji_url = github_emojis [emoji_name];
};

var git_emoji_urls=function(amount_of_urls){
  
  var total_amount_of_emojis = Object.keys(github_emojis).length;
};
for(var i=0;i<amount_of_urls; i++){
  var emoji_name = Object.keys(github_emojis)[i];
  emoji_name = emoji_name.toString();
  var emoji_url = github_emojis[emoji_name];
  
  
  
  var image = document.createElement('img');
  image.setAttribute('src', emoji_url);
  document.body.appendChild(image);
  
  var count = 0;
};
// for(var keys in github_emojis){
//   if(github_emojis.hasOwnProperty(keys)++count);
// };


// };
document.addEventListener('DOMContentLoaded',function(event){
  
  http_request.send(null);
  get_emoji_urls(10);
});






