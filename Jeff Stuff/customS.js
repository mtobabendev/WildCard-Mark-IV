

const productDiv = document.querySelector("#custom2");

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
            image: "assets/images/project-8.jpg",
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
            image: "assets/images/project-3.jpg",
            quantity: 1,
        },
        {
            name: "6",
            description: "App",
            image: "assets/images/project-2.png",
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
var productsSlice = products.slice(0, 6);
for (let i = 0; i < productsSlice.length; i++) {
        //make a new div
        const newDiv = document.createElement("div");
        newDiv.style.width = "33%";

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
            
        })
        
        addToCart.textContent = "Add To Checkout🛒";


        newDiv.append(nameHeading, descriptionText, image, addToCart );

        // add an "add to cart" button to the current product
      
        //append that div to our products div
        productDiv.append(newDiv);

    }
    
    
    
//products array but application index
// const product2Div = document.querySelector("#custom2");
// var productsApp = products.slice(3, 6);
// for (let i = 0; i < productsApp.length; i++) {
//         //make a new div
//         const newDiv = document.createElement("div");
//         newDiv.style.width = "33%";

//         //add the current products information to that new div
//         //(The current item in the loop is '1')
//         const nameHeading = document.createElement("h3");
//         nameHeading.textContent = productsApp[i].name;
//         nameHeading.classList.add("header2");

//         const descriptionText = document.createElement("p");
//         descriptionText.textContent = productsApp[i].description;
//         descriptionText.classList.add("description2");

//         const image = document.createElement("img");
//         image.src = productsApp[i].image;
//         image.classList.add("images2");
//         image.addEventListener("click", () => {
//             addItem(productsApp[i]);
//             addToCart.textContent = "Double Click to Remove🛒";
//         })
        
//         image.addEventListener("dblclick", () => removeItem(productsApp[i]));
//         image.addEventListener('dblclick', () => {
//             addToCart.textContent = "Removed";
            
//         })

//         const addToCart = document.createElement("button");
//         addToCart.addEventListener("click", () => addItem(productsApp[i]));
//         addToCart.classList.add("buttonCart");
//         addToCart.classList.add("addToCart2");
//         addToCart.addEventListener('click', () => {
//             addToCart.textContent = "Double Click To Remove🛒";
            
//         })

//         addToCart.addEventListener("dblclick", () => removeItem(productsApp[i]));
//         addToCart.addEventListener('dblclick', () => {
//             addToCart.textContent = "Removed";
            
//         })
   



//         addToCart.textContent = "Add To Checkout🛒";



//         newDiv.append(nameHeading, descriptionText, image, addToCart );

//         // add an "add to cart" button to the current product
      
//         //append that div to our products div
        
//         product2Div.append(newDiv);
//     }

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
          body: JSON.stringify(cartData)
        })
        .then(response => response.json()) // Takes our response from the server and parses it as a json
        .then(data => console.log(data)) // Once it's parsed as a json, we just log it to the console
        .catch(error => console.error(error));
        alert('Your creation has been sent to the database for processing')
        cartDiv.innerHTML=''; // If there was an error, log that to the console
      }
      // onClick for index checkout
      document.getElementById('checkout').addEventListener ('click', fetchForms)


      var radius = 240; // how big of the radius
      var autoRotate = true; // auto rotate or not
      var rotateSpeed = -60; // unit: seconds/360 degrees
      var imgWidth = 120; // width of images (unit: px)
      var imgHeight = 170; // height of images (unit: px)

      // Link of background music - set 'null' if you dont want to play background music
      var bgMusicURL =
        "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
      var bgMusicControls = true; // Show UI music control

      /*
     NOTE:
       + imgWidth, imgHeight will work for video
       + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
       + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
       + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
*/

      // ===================== start =======================
      setTimeout(init, 100);

      var odrag = document.getElementById("drag-container");
      var ospin = document.getElementById("spin-container");
      var aImg = ospin.getElementsByTagName("img");
      var aVid = ospin.getElementsByTagName("video");
      var aEle = [...aImg, ...aVid]; // combine 2 arrays

      // Size of images
      ospin.style.width = imgWidth + "px";
      ospin.style.height = imgHeight + "px";

      // Size of ground - depend on radius
      var ground = document.getElementById("ground");
      ground.style.width = radius * 3 + "px";
      ground.style.height = radius * 3 + "px";

      function init(delayTime) {
        for (var i = 0; i < aEle.length; i++) {
          aEle[i].style.transform =
            "rotateY(" +
            i * (360 / aEle.length) +
            "deg) translateZ(" +
            radius +
            "px)";
          aEle[i].style.transition = "transform 1s";
          aEle[i].style.transitionDelay =
            delayTime || (aEle.length - i) / 4 + "s";
        }
      }

      function applyTranform(obj) {
        // Constrain the angle of camera (between 0 and 180)
        if (tY > 180) tY = 180;
        if (tY < 0) tY = 0;

        // Apply the angle
        obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
      }

      function playSpin(yes) {
        ospin.style.animationPlayState = yes ? "running" : "paused";
      }

      var sX,
        sY,
        nX,
        nY,
        desX = 0,
        desY = 0,
        tX = 0,
        tY = 10;

      // auto spin
      if (autoRotate) {
        var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
        ospin.style.animation = `${animationName} ${Math.abs(
          rotateSpeed
        )}s infinite linear`;
      }

      // add background music
      if (bgMusicURL) {
        document.getElementById("music-container").innerHTML += `
<audio src="${bgMusicURL}" ${
          bgMusicControls ? "controls" : ""
        } autoplay loop>    
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
      }

      // setup events
      document.onpointerdown = function(e) {
        clearInterval(odrag.timer);
        e = e || window.event;
        var sX = e.clientX,
          sY = e.clientY;

        this.onpointermove = function(e) {
          e = e || window.event;
          var nX = e.clientX,
            nY = e.clientY;
          desX = nX - sX;
          desY = nY - sY;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          sX = nX;
          sY = nY;
        };

        this.onpointerup = function(e) {
          odrag.timer = setInterval(function() {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTranform(odrag);
            playSpin(false);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
              clearInterval(odrag.timer);
              playSpin(true);
            }
          }, 17);
          this.onpointermove = this.onpointerup = null;
        };

        return false;
      };

      document.onmousewheel = function(e) {
        e = e || window.event;
        var d = e.wheelDelta / 20 || -e.detail;
        radius += d;
        init(1);
      };