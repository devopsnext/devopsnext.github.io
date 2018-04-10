$(document)
    .ready(
        function () {

            $(".navbar").on("show.bs.collapse", function (e) {
                console.log("open")
                $(".navbar").css("background", "black");
                $(".navbar-collapse").css("background", "black");
            });

            $(".navbar").on("hide.bs.collapse", function (e) {
                console.log("close")
                $(".navbar").css("background", "transparent");
                $(".navbar-collapse").css("background", "transparent");
            });
            
        });

