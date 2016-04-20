var input_box = document.createElement('input');
var word_list = ["ben", "tell", "old", "due"];
word_list.push("see","hey","get");
var random_number = Math.random()*word_list.length;


document.addEventListener('DOMContentLoaded',function(event){
    
   document.body.appendChild(input_box);


     input_box.addEventListener('keydown',function(event){
         console.log(event.code);
         console.log(event.code[3]);
         if(event.keyCode === 13){
             var element = document.createElement('p');
             element.textContent = this.value;
             //document.body.appendChild(element);
         this.parentNode.insertBefore(element, this.nextSibling);
             this.value = null;
             
        }
    });


    
   
for(var i=0; i < word_list.length; i++){
	
	
	
	var p_element = document.createElement('p');
	p_element.textContent = word_list[i];
	document.body.appendChild(p_element);
	
	
	p_element.addEventListener('click', function(event){
	    
	    this.style.backgroundColor = 'green';
	    console.log(this);
	    
	});

}

    
});

 