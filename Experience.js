//Colour Buttons
    //Variables
        const html = document.getElementById("html");
        const colourButtonOne = document.getElementById("colourButtonOne");
        const colourButtonTwo = document.getElementById("colourButtonTwo");
        const colourButtonThree = document.getElementById("colourButtonThree");
    //Listners
        //Light Mode
            colourButtonOne.addEventListener("click", function validate(event){
                //general
                    document.getElementById("html").style.backgroundColor = "white";
                    document.getElementById("html").style.color = "black";
                //borders
                    document.getElementById("Navigation").style.borderColor = "purple";
                    document.getElementById("image").style.borderColor = "purple";
                    document.getElementById("bodyText").style.borderColor = "purple";
                    document.getElementById("footer").style.borderColor = "purple";
                //links
                    document.getElementById("index").style.color = "black";
                    document.getElementById("experience").style.color = "black";
                    document.getElementById("education").style.color = "black";
                //Footers
                    document.getElementById("emailLabel").style.color = "black";
                    document.getElementById("phoneLabel").style.color = "black";
                    document.getElementById("contactNameLabel").style.color = "black";
                    document.getElementById("companyLabel").style.color = "black";
                    document.getElementById("infoLabel").style.color = "black";
            });
        //Dark
            colourButtonTwo.addEventListener("click", function validate(event){
                //general
                    document.getElementById("html").style.backgroundColor = "gray";
                    document.getElementById("html").style.color = "black";
                //borders
                    document.getElementById("Navigation").style.borderColor = "black";
                    document.getElementById("image").style.borderColor = "black";
                    document.getElementById("bodyText").style.borderColor = "black";
                    document.getElementById("footer").style.borderColor = "black";
                //links
                    document.getElementById("index").style.color = "black";
                    document.getElementById("experience").style.color = "black";
                    document.getElementById("education").style.color = "black";
                //Footers
                    document.getElementById("emailLabel").style.color = "black";
                    document.getElementById("phoneLabel").style.color = "black";
                    document.getElementById("contactNameLabel").style.color = "black";
                    document.getElementById("companyLabel").style.color = "black";
                    document.getElementById("infoLabel").style.color = "black";
            });
        //SuperDark
            colourButtonThree.addEventListener("click", function validate(event){
                //general
                    document.getElementById("html").style.backgroundColor = "black";
                    document.getElementById("html").style.color = "white";
                //borders
                    document.getElementById("Navigation").style.borderColor = "lightblue";
                    document.getElementById("image").style.borderColor = "lightblue";
                    document.getElementById("bodyText").style.borderColor = "lightblue";
                    document.getElementById("footer").style.borderColor = "lightblue";
                //links
                    document.getElementById("index").style.color = "lightblue";
                    document.getElementById("experience").style.color = "lightblue";
                    document.getElementById("education").style.color = "lightblue";
                //Footers
                    document.getElementById("emailLabel").style.color = "lightblue";
                    document.getElementById("phoneLabel").style.color = "lightblue";
                    document.getElementById("contactNameLabel").style.color = "lightblue";
                    document.getElementById("companyLabel").style.color = "lightblue";
                    document.getElementById("infoLabel").style.color = "lightblue";
            });

//Form
    const isCorrect = document.getElementById("isCorrect");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function validate(event){
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const name = document.getElementById("contactName").value;
        const company = document.getElementById("company").value;
        const info = document.getElementById("info").value;
        
        if (!email || !phone || !name || !company || !info){
            event.preventDefault();
            isCorrect.innerHTML = "All fields must be included";
            isCorrect.style.backgroundColor = "red";
        }
        else if (!email.endsWith("@dal.ca")){
            event.preventDefault();
            isCorrect.innerHTML = "Email must end with @dal.ca";
            isCorrect.style.backgroundColor = "red";
        }
        //https://www.abstractapi.com/guides/validate-phone-number-javascript
        else if (!(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone))){
            event.preventDefault();
            isCorrect.innerHTML = "Must be in the format (XXX) XXX-XXXX";
            isCorrect.style.backgroundColor = "red";
        }
        else{
            if (!confirm("Ok to submit the form.\nCancel to cancel the sumbmission")){
                event.preventDefault();
            }
        }
    });