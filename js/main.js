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
 image.setAttribute('src','https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg');
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
       console.log("haaastalama"+$Data);
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
    showartistGalleryDetails(artist.author);
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

function showartistGalleryDetails(Artist)
{
  
    nameArtist.textContent = Artist;
    nameArtist.classList.add("texcolorBlackbold","animationNameAuthor");

    decriptionArtist.textContent ="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
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