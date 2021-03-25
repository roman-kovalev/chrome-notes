;(function() {
    let nextBtn = document.querySelector("[data-control=move-forward]");

    setInterval(() => {
        executeItem();
    }, 1000); 

    function executeItem() {
        fillTextareas();
        moveForward();
    }

    function fillTextareas() {
        let textareas = document.querySelectorAll("#qti-content [data-qti-class=extendedTextInteraction] textarea");

        textareas.forEach(elm => {
            elm.innerHTML = getRandomText();
        });
    };

    function moveForward() {
        console.log("Go to next item"); 
        nextBtn.click();
    }

    function getRandomText() {
        return `Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, 
        egestas non nisi. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, 
        lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Cras ultricies ligula
         sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Donec rutrum congue leo 
         eget malesuada. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit 
         tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada.
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta.
         Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
           Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit,
             eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
             Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. 
             Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
         Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
         Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula 
         elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed
          magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
          Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, 
          egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
           Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, 
           ullamcorper sit amet ligula.
        Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, 
        convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. 
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. 
        Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. 
        Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, 
        pretium ut lacinia in, elementum id enim. Proin eget tortor risus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, 
        ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
        posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. 
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
         Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. 
         Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper 
         sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam 
         vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur 
         adipiscing elit. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.
           Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.`
    }

    

})();

