// An API endpoint is a specific URL where an API can be accessed by a client application. 
// Here’s a brief explanation:
// Definition: An API endpoint is a point at which an API (Application Programming 
// Interface) interacts with a software application. It is typically a URL that corresponds
// to a specific function or resource in the API.
// Structure: An endpoint usually consists of the base URL of the API and a path that 
// specifies the resource or action. For example, https://api.example.com/users might be 
// an endpoint to access user data.
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let key = "ema_live_GiQkpjSNtInIjUbpz4kEL92M10VkU0p53OUaQLIE";
    let email = document.querySelector('#email').value;
    // console.log(key,email);
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let str = '';
    resultContainer.innerHTML = `<img src="./img/loading.svg" alt="Loading Image">`
    fetch(url)
        .then(response => response.json())
        // The .json() method in the Fetch API is used to read the body of a response and convert it from a JSON string into a JavaScript object.
        .then(data => {
            console.log(data);
            const result = data;
            for(const key of Object.keys(result)){
            // console.log(key);
                if(result[key] !== "" && result[key] !== " "){
                    str += `<div>${key} : ${result[key]}</div>`;
                }
            }
            console.log(str);
            resultContainer.innerHTML = str; 
        })
        .catch(error => {
            console.log('Error: ',error);
        })  
});
// fetch() method in JavaScript:
// The fetch() method in JavaScript is a modern and powerful way to retrieve resources from a server. It returns a Promise that resolves to a Response object, encapsulating the server’s response to your request.
// When you use the Fetch API, it returns a Promise. A Promise is like a placeholder for a value that will be available later.