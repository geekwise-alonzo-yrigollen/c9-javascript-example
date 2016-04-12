var http_request = new XMLHttpRequest();
http_request.open('GET','https://api.github.com',false);
http_request.send(null);

var github_data = JSON.parse(http_request.response);

http_request = new XMLHttpRequest();
http_request.open('GET', github_data.emojis_url,false);
http_request.send(null);

var github_emojis = JSON.parse(http_request.response);

for( i in github_emojis){
    
    
    var image_container = document.createElement('img');
    image_container.setAttribute('src','github_emojis[i]');
    document.body.appendChild(image_container);
    
    
};