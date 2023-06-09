<script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>

function newItem(){

  //1. Adding a new item to the list of items(JQUERY CODE): 

     let li = $('<li></li>');
     let inputValue = $('#input').val();
     li.appendChild(inputValue);
  
     if (inputValue === '') {
       alert("You must write something!");
     } else {
     $('#list').append(li);
     }
  
   //2. Crossing out an item from the list of items(JQUERY CODE):

     function crossOut() {
       li.toggleClass("strike");
     }
  
     li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
    });

   //3(i). Adding the delete button "X" (JQUERY CODE): 

     let crossOutButton = $('<crossOutButton></crossOutButton>');
     crossOutButton.append(document.createTextNode('X'));
     li.append(crossOutButton);
  

   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css (JQUERY CODE):

       crossOutButton.on("click", deleteListItem);
       function deleteListItem(){
       li.classList.add("delete")
     }

   // 4. Reordering the items(JQUERY CODE): 

     $('#list').sortable();
  
    }
  



  