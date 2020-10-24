let Data = new Array();
function dismis(){
	//alert("se oculta");
	document.getElementById('exhibitionInfo').style.display="none";
  var nomber= Math.random(328762836386);
  console.log(nomber);
  readObjet();
}

function show(){
	//alert("se muestra");
	document.getElementById('exhibitionInfo').style.display="block";

  var ok=   document.getElementById('exhibitionInfo');
  ok.classList.add("sectionupAnimate");
  
}

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});


//const names =["Alfredo Arcos", "Martín Cuaya", "Lazaro Galicia", "Juan Palmerin (+)"," Mauricio Vega", "Ozcar Rivera", "David Duanny", "Alejandro Pérez Cruz", "Ismael Ponce", "Gustavo López", "CHEZ TREN 77", "Lupus", "Tacho(+)","Pablo Morán"];
var $obras = {"Alfredo Arcos" : [["obras/obra-1.jpg",
                                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                         "Titulo Obra","Año obra","Tecnica obra","medidas obra"],
                                ["obras/obra-2.jpg",
                                         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                         "Titulo Obra","Año obra","Tecnica obra","medidas obra"],
                                ["obras/obra-3.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit. totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                         "Titulo Obra","Año obra","Tecnica obra","medidas obra"] ]};

const artistNames       = document.getElementById("artistNamesList");
const artistWork        = document.getElementById("artistListWork");
const nameArtist        = document.getElementById("artistNameDetail");
const decriptionArtist  = document.getElementById("artistDescriptionDetail");
/*itemName =document.createElement("LI");
itemName.textContent="Alfredo Arcos";
itemName.classList.add("color");

artistNames.appendChild(itemName);*/
const listSlider    = document.getElementById("listSlider");
const containerSlider = document.getElementById("carrouselContainerSlides");

for(var i =0;i<5;i++)
{
var itemName = document.createElement("LI");
var slider  = document.createElement("DIV");

 itemName.setAttribute('data-target',"#carousel-with-lb");
 itemName.setAttribute('data-slide-to',i);


if (i==0){
  itemName.classList.add("active", "secondary-color");
  slider.classList.add("carousel-item", "active" ,"text-center");
}else{
   itemName.classList.add( "secondary-color");
   slider.classList.add("carousel-item","text-center");
}

for (var j = 0; j<3; j++) {
 var figure = document.createElement("FIGURE");
 figure.classList.add("col-md-3","d-md-inline-block");
 var image = document.createElement("img");
 if (i==0 && j==0) {

 image.setAttribute('src','data:image/jpeg;base64,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');
 }else{

 image.setAttribute('src','https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg');
}
 image.classList.add("img-fluid","animationGallery");
 figure.appendChild(image);
 slider.appendChild(figure);
}


containerSlider.appendChild(slider);
listSlider.appendChild(itemName);

}






function readObjet()
{
  console.log("dentro de la funcion");

  const xhttp = new XMLHttpRequest();

//http metod , ruta, asyncrono
  xhttp.open('GET','jsons/works.json',true);

  xhttp.send();

  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status==200)
     {
       //console.log(this.responseText);
       let datos = JSON.parse(this.responseText);
      /* for(let item of arrayinobjet){
        item.artista
       }*/
       $Data= datos.authors;

       showButtonsArtist(datos.authors);
       console.log(datos.authors);
       for(let artist of datos.authors){
        console.log(artist.author);
       }
       console.log(datos);
     }
  }
}

function showButtonsArtist(namesFromJson){

for (let artist of namesFromJson){

  var itemName = document.createElement("LI");
  var       a = document.createElement("button");
  var       il = document.createElement("i");
  var       span = document.createElement("span");


itemName.classList.add("color");
a.setAttribute('class', 'btn btn-lg btn-success animationNameArtist');
a.setAttribute('id',artist.id);

a.onclick = function(){
    showartistGalleryDetails(artist.author , artist.shortdescription);
};


span.textContent= artist.author;
il.classList.add("glyphicon","glyphicon-dashboard","pull-left");
a.appendChild(il);
a.appendChild(span);
itemName.appendChild(a);
artistNames.appendChild(itemName);
}

}
//var i =0;


/*$namesFromJson.forEach( function(elemento ,i,$namesFromJson ){

var itemName = document.createElement("LI");
var       a = document.createElement("button");
var       il = document.createElement("i");
var       span = document.createElement("span");


itemName.classList.add("color");
a.setAttribute('class', 'btn btn-lg btn-success animationNameArtist');
a.setAttribute('id',elemento+i);

a.onclick = function(){
    showartistGalleryDetails(elemento);
};


span.textContent= elemento;
il.classList.add("glyphicon","glyphicon-dashboard","pull-left");
a.appendChild(il);
a.appendChild(span);
itemName.appendChild(a);
artistNames.appendChild(itemName);

})*/

function showartistGalleryDetails(Artist , descripcion)
{
  
    nameArtist.textContent = Artist;
    nameArtist.classList.add("texcolorBlackbold","animationNameAuthor");

    decriptionArtist.textContent = descripcion;
    decriptionArtist.classList.add("texcolorBlackbold","simpleMargin");  
       var data = new Array();
           data = $obras["Alfredo Arcos"];

              
       for (var i = 0; i < data.length; i++) 
       {

               var oncontent = data[i];

              var work      =document.createElement("div");
                  work.classList.add("col-sm-6","col-md-4", "col-lg-3");

              var workCard = document.createElement("div");
                  workCard.classList.add("card", "mt-4","background_black");
              var image    = document.createElement("img");
                  image.classList.add("card-img-top", "img-thumbnail");

              var cardBlog = document.createElement("div");
                  cardBlog.classList.add("card-block","background_black");

              var title    = document.createElement("h4"); 
                  title.classList.add("card-title","mt-3");

              var fecha    = document.createElement("p");
                  fecha.classList.add("meta");    
              var tecnica    = document.createElement("p");
                  tecnica.classList.add("meta"); 
              var medidas    = document.createElement("p");
                  medidas.classList.add("meta"); 
              var decriptionWork = document.createElement("p");
                  decriptionWork.classList.add("card-text"); 

              var footerCard = document.createElement("div");
                  footerCard.classList.add("card-footer","background_black");     

              var seeWork    = document.createElement("small");  
              var buttonwork = document.createElement("a");  
               oncontent.forEach( function(elemento,j,oncontent)
               {
                if(j==0)
                {
                    image.setAttribute("src",elemento);
                    image.classList.add("animationWorks");
                }
                if (j==1) {decriptionWork.textContent = elemento;}
                if(j==2)
                {
                    title.textContent = elemento;
                }
                if(j==3){
                    fecha.textContent = elemento;
                }
                if(j==4){
                    tecnica.textContent = elemento;
                }
                if(j==5){
                    medidas.textContent = elemento;
                }    
                
                })
               cardBlog.appendChild(title);
          /* 
           cardBlog.appendChild(fecha);
           cardBlog.appendChild(tecnica);
           cardBlog.appendChild(medidas);  
           cardBlog.appendChild(decriptionWork);   */

           seeWork.textContent = "ver obra completa";
           footerCard.appendChild(seeWork);

           buttonwork.textContent = " Ver ";
           buttonwork.classList.add("btn", "btn-secondary" ,"float-right", "btn-sm");
           buttonwork.setAttribute("href","#");
           buttonwork.setAttribute("data-toggle","modal");
           buttonwork.setAttribute("data-target","#showDetailWork");
          /* 
           buttonwork.classList.add("btn", "btn-secondary" ,"float-right", "btn-sm");
           buttonwork.onclick = function(){
                    alert("se muestra");
                };*/


           footerCard.appendChild(buttonwork);

           workCard.appendChild(cardBlog);  
           workCard.appendChild(image);
           workCard.appendChild(footerCard);  
           work.appendChild(workCard);    
           artistWork.appendChild(work);
        }
     /*     data.forEach( function(elemento,j,data){

         
    }) */      

   
}

function showDetailGallery(Artist){

}

$(document).ready(function(){

    loadGallery(true, 'a.img-thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }
});

window.addEventListener('resize', () => { document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`); });
/*let a = document.createElement("a");
a.setAttribute('class', 'btn btn-lg');
//a.setAttribute('href', 'showSignature(xyz)');
let il = document.createElement("i");
il.classList.add("glyphicon glyphicon-link pull-left");
let span = document.createElement("span");
span.textContent = elemento;

a.appendChild(il);
a.appendChild(span);*/

$(function(){
 
    $(document).on( 'scroll', function(){
 
      if ($(window).scrollTop() > 300) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });
 
  $('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

  "use strict";
  //scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });