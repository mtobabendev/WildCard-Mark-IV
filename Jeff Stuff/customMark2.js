

const productDiv = document.querySelector("#custom");

    const products = [
        {
            name: "1",
            description: "Website",
            image: "assets/images/project-9.png",
            quantity: 1,
        },
        {
            name: "2",
            description: "Website",
            image: "assets/images/project-3.jpg",
            quantity: 1,
        },
        {
            name: "3",
            description: "Website",
            image: "assets/images/project-6.png",
            quantity: 1,
        },
        {
            name: "4",
            description: "App",
            image: "assets/images/project-4.png",
            quantity: 1,
        },
        {
            name: "5",
            description: "App",
            image: "assets/images/project-8.jpg",
            quantity: 1,
        },
        {
            name: "6",
            description: "App",
            image: "assets/images/project-2.png",
            quantity: 1,
        },
        {
            name: "7",
            description: "Logo",
            image: "assets/images/amazon_PNG24.png",
            quantity: 1,
        },
        {
            name: "8",
            description: "Logo",
            image: "assets/images/apple_logo_PNG19675.png",
            quantity: 1,
        },
        {
            name: "9",
            description: "Logo",
            image: "assets/images/playstore.png",
            quantity: 1,
        },
    ];



    //local story gets
    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    // add item to the checkout page and displays the items
    function addItem(e) {
        console.log(cart)
       if (cart.some((item) => item.name === e.name)) {
        const item = cart.find((element) => element.name == e.name);
        item.quantity++;
       } else {
       cart.push(e);
       };
       // for loop for displaying the cart elements immediately without having to refresh
       for (let i = 0; i < cart.length; i++) {
        //make a new div
        const newDiv = document.createElement("div");
        newDiv.style.width = "33%";
        //add the current cart information to that new div
        //(The current item in the loop is '1')
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = cart[i].name;
    
    
        const descriptionText = document.createElement("p");
        descriptionText.textContent = cart[i].description;
    
        
    
        const image = document.createElement("img");
        image.src = cart[i].image;
        image.classList.add("images");
        
    
        const quantity = document.createElement("p");
        quantity.textContent = `Quantity: ${cart[i].quantity}`;
        
        const addToCart = document.createElement("button");
        addToCart.addEventListener("click", () => addItem(cart[i]));
        addToCart.classList.add("buttonCart");
 
        
    
    
        addToCart.textContent = "Add to cart";
    
        // add an "add to cart" button to the current product
      
        //append that div to our cart div
        
        const removeFromCart = document.createElement("button");
        removeFromCart.addEventListener("click", () => removeItem(cart[i], newDiv));
        removeFromCart.classList.add("removeCart");
        removeFromCart.textContent = 'Remove';

        
        
        
        newDiv.append(nameHeading, descriptionText,  image, quantity, removeFromCart);
        cartDiv.append(newDiv);
       //e. target is the element that they clicked on.
       console.log(cart);

       //localstorage create. cart is the name of the local storage targetted .
       localStorage.setItem("cart", JSON.stringify(cart));
    }
}

// Products array but websites index

var productsSlice = products.slice(0, 3);
for (let i = 0; i < productsSlice.length; i++) {
        //make a new div
        const newDiv = document.createElement("div");
        newDiv.style.width = "100%";

        //add the current products information to that new div
        //(The current item in the loop is '1')
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = productsSlice[i].name;
        nameHeading.classList.add("header");

        const descriptionText = document.createElement("p");
        descriptionText.textContent = productsSlice[i].description;
        descriptionText.classList.add("description");

        const image = document.createElement("img");
        image.src = productsSlice[i].image;

        image.classList.add("images2");
        image.addEventListener("click", () => {
            addItem(productsSlice[i]);
            addToCart.textContent = "Double Click to Remove🛒";
        })

        image.addEventListener("dblclick", () => removeItem(productsSlice[i]));
        image.addEventListener('dblclick', () => {
          addToCart.textContent = "Removed";
          setTimeout(() => {
            addToCart.textContent = 'Add To Checkout🛒';
          }, 2000)  
        })

        const addToCart = document.createElement("button");
        addToCart.addEventListener("click", () => addItem(productsSlice[i]));
        addToCart.classList.add("buttonCart");
        addToCart.classList.add("addToCart");
        addToCart.addEventListener('click', () => {
            addToCart.textContent = "Double Click to Remove🛒";
        })

        
        addToCart.addEventListener("dblclick", () => removeItem(productsSlice[i]));
        addToCart.addEventListener('dblclick', () => {
          addToCart.textContent = "Removed";
          setTimeout(() => {
            addToCart.textContent = 'Add To Checkout🛒';
          }, 2000)  
        })
        
        addToCart.textContent = "Add To Checkout🛒";




        newDiv.append(nameHeading, descriptionText, image, addToCart );

        // add an "add to cart" button to the current product
      
        //append that div to our products div
        productDiv.append(newDiv);

    }
    
    
    
//products array but application index
const product2Div = document.querySelector("#custom2");
var productsApp = products.slice(3, 6);
for (let i = 0; i < productsApp.length; i++) {
        //make a new div
        const newDiv = document.createElement("div");
        newDiv.style.width = "100%";

        //add the current products information to that new div
        //(The current item in the loop is '1')
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = productsApp[i].name;
        nameHeading.classList.add("header");

        const descriptionText = document.createElement("p");
        descriptionText.textContent = productsApp[i].description;
        descriptionText.classList.add("description");

        const image = document.createElement("img");
        image.src = productsApp[i].image;
        image.classList.add("images2");
        image.addEventListener("click", () => {
            addItem(productsApp[i]);
            addToCart.textContent = "Double Click to Remove🛒";
        })
        
        image.addEventListener("dblclick", () => removeItem(productsApp[i]));
        image.addEventListener('dblclick', () => {
            addToCart.textContent = "Removed";
            setTimeout(() => {
              addToCart.textContent = 'Add To Checkout🛒';
            }, 2000)  
          })

        const addToCart = document.createElement("button");
        addToCart.addEventListener("click", () => addItem(productsApp[i]));
        addToCart.classList.add("buttonCart");
        addToCart.classList.add("addToCart2");
        addToCart.addEventListener('click', () => {
            addToCart.textContent = "Double Click To Remove🛒";
            
        })

        addToCart.addEventListener("dblclick", () => removeItem(productsApp[i]));
        addToCart.addEventListener('dblclick', () => {
            addToCart.textContent = "Removed";
            setTimeout(() => {
              addToCart.textContent = 'Add To Checkout🛒';
            }, 2000)  
          })
   



        addToCart.textContent = "Add To Checkout🛒";



        newDiv.append(nameHeading, descriptionText, image, addToCart );

        // add an "add to cart" button to the current product
      
        //append that div to our products div
        
        product2Div.append(newDiv);
    }

const product3Div = document.querySelector("#custom3");
var productslogo = products.slice(6, 9);
for (let i = 0; i < productslogo.length; i++) {
        //make a new div
        const newDiv = document.createElement("div");
        newDiv.style.width = "100%";

        //add the current products information to that new div
        //(The current item in the loop is '1')
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = productslogo[i].name;
        nameHeading.classList.add("header");

        const descriptionText = document.createElement("p");
        descriptionText.textContent = productslogo[i].description;
        descriptionText.classList.add("description");

        const image = document.createElement("img");
        image.src = productslogo[i].image;
        image.classList.add("images2");
        // image.addEventListener("click", () => {
        //   if(cart[i]){
        //     console.log(productslogo)
        //     removeItem(cart[i]);
        //     addToCart.textContent = "Removed";
        //     setTimeout(() => {
        //       addToCart.textContent = 'Add To Checkout🛒';
        //     }, 2000) 
        //   } else {
        //     addItem(productslogo[i]);
        //     addToCart.textContent = "Click to Remove🛒";
        //   }
        // })
        
        image.addEventListener("dblclick", () => removeItem(productslogo[i]));
        image.addEventListener('dblclick', () => {
            addToCart.textContent = "Removed";
            setTimeout(() => {
              addToCart.textContent = 'Add To Checkout🛒';
            }, 2000)  
          })





        const addToCart = document.createElement("button");
        addToCart.addEventListener("click", () => addItem(productslogo[i]));
        addToCart.classList.add("buttonCart");
        addToCart.classList.add("addToCart2");
        addToCart.addEventListener('click', () => {
            addToCart.textContent = "Double Click To Remove🛒";
            
        })

        addToCart.addEventListener("dblclick", () => removeItem(productslogo[i]));
        addToCart.addEventListener('dblclick', () => {
            addToCart.textContent = "Removed";
            setTimeout(() => {
              addToCart.textContent = 'Add To Checkout🛒';
            }, 2000)  
          })
   



        addToCart.textContent = "Add To Checkout🛒";



        newDiv.append(nameHeading, descriptionText, image, addToCart );

        // add an "add to cart" button to the current product
      
        //append that div to our products div
        
        product3Div.append(newDiv);
    }



    function fetchForm() {
        //get element by id selects the single input and .value gets the user entry 
        const nameForm = document.getElementById("name").value;
        console.log(nameForm);
      
        const emailForm = document.getElementById("email").value;
        console.log(emailForm);
      
        const phoneForm = document.getElementById("phone").value;
        console.log(phoneForm);
      
        const commentForm = document.getElementById("comment").value;
        console.log(commentForm);
      
        fetch('http://localhost:5000/form', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({ nameForm: nameForm, emailForm: emailForm, phoneForm: phoneForm, commentForm: commentForm  })
        })
        .then(response => response.json()) // Takes our response from the server and parses it as a json
        .then(data => console.log(data)) // Once it's parsed as a json, we just log it to the console
        .catch(error => console.error(error));
        location.reload();
        alert('Your form has been sent to the database for processing') // If there was an error, log that to the console
      }
      
      function fetchForms() {
        console.log('running')
        const name1 = document.getElementById("name1").value;
        console.log(name1);
        
        const email1 = document.getElementById("email1").value;
        console.log(email1);
        
        //get element by id selects the single input and .value gets the user entry 
        // [] are used because it is get elements instead of element and it trying to create and array 
        const nameHeading = Array.from(document.getElementsByClassName("header3"));
        console.log(nameHeading);
      
        const descriptionText = Array.from(document.getElementsByClassName("description3"));
        console.log(descriptionText);
      
        const image = Array.from(document.getElementsByClassName("images"));
        console.log(image);
      
        const quantity = Array.from(document.getElementsByClassName("quantity1"));
        console.log(quantity);
        // const cart data is looping through an array of the selected elements. [i] is looping through the index
        // text content and src is going to get the value of the individual element and send it to the post 
        const cartData = [];
        for (let i = 0; i < nameHeading.length; i++) {
            cartData.push({
                nameHeading: nameHeading[i].textContent,
                descriptionText: descriptionText[i].textContent,
                image: image[i].src,
                quantity: quantity[i].textContent
            });
        }

        console.log(cartData);
      
        fetch('http://localhost:5000/custom', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          // stringify cartdata 
          //curly  brackets because it is an object that we are stringifying
          body: JSON.stringify({name1, email1, cartData}),
        })
        .then(response => response.json()) // Takes our response from the server and parses it as a json
        .then(data => console.log(data)) // Once it's parsed as a json, we just log it to the console
        .catch(error => console.error(error));
        cartDiv.innerHTML=''; // If there was an error, log that to the console
      }
      // onClick for index checkout
      document.getElementById('checkout').addEventListener ('click', fetchForms)
      document.getElementById('checkout').addEventListener('click', () => {
        removeItem(cart)
    })



    
      function myFunction() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }

      function myfunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }





filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    console.log(x[i])
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Beginning of javascript carousel
const track = document.getElementById('track');
      const speed = .5;             // pixels per frame
      let pos = 0;
      // 1) Clone all items and append so we have two copies in a row
      const count = track.children.length;
      for (let i = 0; i < count; i++) {
        track.appendChild(track.children[i].cloneNode(true));
      }
      // 2) Animation loop
      function step() {
        pos -= speed;
        // Once we’ve scrolled through the first full set, reset
        if (Math.abs(pos) >= track.scrollWidth / 2) {
          pos = 0;
        }
        track.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(step);
      }
      // 3) Start animating
      requestAnimationFrame(step);





  

      

