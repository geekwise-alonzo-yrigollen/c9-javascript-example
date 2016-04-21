var calculator = ['1','2','3','+','='];
var input_box = document.createElement(input)
document.addEventListener('DOMContentLoaded',function(event){




   for( var i = 0; i < calculator.length; i++){
   
      var p = document.createElement('p');
      p.setAttribute('id','p_' +i);
      p.textContent = calculator[i];
      
      document.body.appendChild(p);

      console.log( calculator[i]);
      
   };
   
}); 




