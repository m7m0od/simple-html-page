$('.img-contentt img').click(function(){
    var src = $(this).attr("src");
    var par = $(this).parent().find('p').text();
    $('.img-content img').attr("src",src);
    $('.par-content p').text(par);
});

var arrayProject;
if(localStorage.getItem("ourProject") == null)
{
    arrayProject = [];
}else
{
    arrayProject =JSON.parse(localStorage.getItem("ourProject"));
    displayProduct();
}
var inps = document.getElementsByClassName("form-control");

function addProduct()
{
   var title = document.getElementById("title").value ;
   var desc = document.getElementById("desc").value ;
   
   var product = 
   {
       titleOne:title,
       descTwo:desc
   };

   arrayProject.push(product);
   localStorage.setItem("ourProject",JSON.stringify(arrayProject));
   displayProduct();
   reuse();
   
}

function displayProduct()
{
    var temp = "";
    for(var i = 0 ; i < arrayProject.length ; i++)
    {
        temp +=`<div class="col-md-4">
        <div class="content text-center">
            <h3>`+arrayProject[i].titleOne+`</h3>
            <i class="fa fa-edit"></i>
            <div class="clr"></div>
            <p class="lead my-3">`+arrayProject[i].descTwo+`<a  href="#" class="btn" onclick="deleteProduct(`+i+`)">Delete</a></p>
        </div>
    </div>`;
    }
    document.getElementById("productsRow").innerHTML = temp ;
}

function reuse()
{
    for(var i = 0 ; i < inps.length ; i++)
    {
        inps[i].value="";
    }

}

function deleteProduct(ind)
{
    for(var i = 0; i < arrayProject.length; i++)
    {
        var deleted = arrayProject.splice(ind,1);
        localStorage.setItem("ourProject",JSON.stringify(arrayProject));
        displayProduct();
    }
}

function updateProduct(ind)
{
    var title = document.getElementById("title").value ;
    var desc = document.getElementById("desc").value ;

    var index = getObjectIndex(arrayProject, title);

    if(index !== false) {
        // Update the quantity in the same element
        arrayProject[index].desc = desc;
    } else {
        // Add the element in the array
        arrayProject.push({
            titleOne:title,
            descTwo:desc
        });
    }


}
