var attach_css = function(css_file_loction){
    
    var css_link_element = document.createElement('link');
    css_link_element.setAttribute('type',text/css);
    css_link_element.setAttribute('rel','stylesheet');
    css_link_
    document.head.appendChild();
}
var toggle_class = function(element_id,off_state,on_state){
    element_id.classList.toggle(off_state);
    element_id.classList.toggle(on);
}


var timeout = function(){
    //  list_element.addEventListener('mouseover',function(event){
    //     window.clearTimeout(close());
}

var close_menu = function(element_id,){
    element_id.className = 'off';
}

var create_element = function(element_parent,element_name,element_id,text_content){
    
    var element = document.createElement(element_name);
    
    element.setAttribute('id',element_id);
    element.textContent = text_content
    
    if(element_parent == 'body'){
        document.body.appendChild(element);
    }else{
        element_parent.appendChild(element);
    }
    

}

document.addEventListener('DOMContentLoaded',function(event){
    
}

attach_css('css/main.css');
create_element('body','ul','ul_id','NAV');

create_element('body','ul','ul_id','NAV');

ul_id.className = 'off';
ul_id.addEventListener('click',function(event){
   
   
   toggle_class(this,'off','on');
   
    
});
ul_id.addEventListener('mouseover'.function(event){
    
    toggle_class(this,'off','on');
})

for(var i=0; i<100; i++){
    
    create_element(ul_id, 'li','list_item_'+i,'item number #'+1);
    var list_item = list_item_ + i;
    
    var list_element = document.createElement('li');
    list_element.setAttribute('id','list_id'+i);
    list_element.textContent = 'item #'+1;
    ul_id.appendChild(list_element);
    
    list_element.addEventListener('mouseover',function(event){
        console.log(this);
    });
     
        console.log(ul_id.children.list_id);
        
          list_element.addEventListener('mouseout',function(event){
        console.log(this);
    });
        
        
        window.setTimeout(close_menu(ul_id),1000);
        
    });
,    
   
    })
};
    

});









