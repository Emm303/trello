
       // JavaScript code to handle button click and add an image
        document.getElementById("addImageBtn").addEventListener("click", function () {
            // Create an image element
            var img = document.createElement("img");
            
            // Set the image source
            img.src = "https://www.pbs.org/wnet/nature/files/2014/10/GrayWolf-Main-e1415205081524-1280x600.jpg"; // Replace with the actual image URL
            
            // Append the image to the image container
            document.getElementById("imageContainer").appendChild(img);
        });
  