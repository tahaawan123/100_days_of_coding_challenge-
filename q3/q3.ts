//  question 3:Name cases:store a person's name in a variable ,and then print that person's name in
// lowercase, uppercase, titlecase.
             // Lowercase 
    let personName : string = "Taha Awan";
    console.log("lowercase:", personName.toLowerCase());

                // UPPERCASE
      console.log("uppercase:", personName.toLocaleUpperCase());
      
                //  Titlecase
     console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

