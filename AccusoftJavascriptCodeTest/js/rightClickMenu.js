    $(document).bind("contextmenu", function (event) {
        // Prevent the default COntext Menu from showing
        event.preventDefault();
        // Show contextmenu to the lower right of the mouse
        var positionOfMenuRelativeToClickPoint = {
            top: event.pageY + "px",
            left: event.pageX + "px"
        }
        $(".custom-menu").finish().toggle(100).css(positionOfMenuRelativeToClickPoint);
    });

    // If the document is clicked somewhere
    $(document).bind("mousedown", function (e) {
        // If the clicked element is not the menu
        if (!$(e.target).parents(".custom-menu").length > 0) {
            // Hide the context Menu
            $(".custom-menu").hide(100);
        }
    });
    // If the menu element is clicked
    $(document).ready(function() {
        $('.custom-menu li').click(function (e) {
            // This is the triggered action name
            switch ($(this).attr("data-action")) {
                // A case for each function. Your actions here
                case "fill": 
                    fillBackground();
                    break;
                case "clear":
                    clearBackground();
                    break;
            }
            // Hide it AFTER the action was triggered
            $(".custom-menu").hide(100);
        });
    });
    //right-click option to fill background of the canvas
    fillBackground = function(cx) {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.rect(0,0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    //right-click option to clear all drawings, text and images from the canvas
    clearBackground = function(cx) {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    }