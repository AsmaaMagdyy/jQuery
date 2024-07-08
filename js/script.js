// ===============Home section===============
$(".menu-btn").click(function () {
  let sideBarWidth = $(".side-bar").outerWidth(true);
  // console.log(sideBarWidth);
  let menuBtn = $(".menu-btn").offset().left;
  // console.log(menuBtn);
  if (menuBtn === 8) {
    $(".ss").css({ left: `0px`, transition: "all 0.5s" });
    $(".home-part").css({
      transform: `translateX(${sideBarWidth - 150}px)`,
      transition: "all 0.5s",
    });
    $(".menu-btn").css({
      transform: `translateX(150px)`,
      transition: "all 0.5s",
    });
    $("header").addClass("overflow-x-hidden");
  } else {
    $(".ss").css({ left: `-${sideBarWidth}px`, transition: "all 0.5s" });
    $(".home-part").css({ transform: `translateX(0)`, transition: "all 0.5s" });
    $(".menu-btn").css({
      transform: `translateX(0)`,
      transition: "all 0.5s",
    });
  }
});

$(".fa-xmark").click(function () {

  let sideBarWidth = $(".side-bar").outerWidth(true);
  $(".ss").css({ left: `-${sideBarWidth}px`, transition: "all 0.5s" });
  $(".home-part").css({ transform: `translateX(0)`, transition: "all 0.5s" });
  $(".menu-btn").css({
    transform: `translateX(0)`,
    transition: "all 0.5s",
  });

});

// ===============Home section End===============

// ===============Scroll Smoothing===============
$(".side-bar a").click(function () {
  let sectionId = $(this).attr("href");
  let sectionTop = $(sectionId).offset().top;
  $("html,body").animate(
    {
      scrollTop: sectionTop,
    },
    2000
  );
});
// ===============Scroll Smoothing End===============

// ================Duration Start===============
let h3 = document.querySelectorAll(".duration h3");
let pragraph = document.querySelectorAll(".duration .pr");

$(".pr").css({ display: "none" });
$(".pr").filter(".active").css({ display: "block" });

for (let i = 0; i < h3.length; i++) {
  // console.log(h3[i]);
  $(h3[i]).click(function () {
    $(pragraph[i]).slideToggle(1000);
    $(".pr").removeClass("active");
    $(pragraph[i]).addClass("active");
    $(".pr:not(.active)").slideUp(1000);
  });
}

//   ================Duration End===============

//   ================Details Start===============

// Converting string to required date format
let deadline = new Date("sep 5, 2024 15:37:25").getTime();

// To call defined fuction every second
let x = setInterval(function () {
  // Getting current time in required format
  let now = new Date().getTime();

  // Calculating the difference
  let t = deadline - now;

  // Getting value of days, hours, minutes, seconds
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  // Output the remaining time
  $(".d").html(`${days} D`);
  $(".h").html(`${hours} h`);
  $(".m").html(`${minutes} m`);
  $(".s").html(`${seconds} s`);

  // Output for over time
  if (t < 0) {
    clearInterval(x);
    $(".d").html("expired");
    $(".h").html("expired");
    $(".m").html("expired");
    $(".s").html("expired");
  }
}, 1000);

//   ================Details End===============

//   ================Contact Start===============
$('form').submit(function (e) {
  e.preventDefault();

});


// =+=+=+=+==  Character Reamining I solved it in two ways ==+=+=+=+=+=+=

// The first method //

let message = document.querySelector('#message')

let remainedChar = 100;
message.addEventListener('input', function (e) {

  if (message.value == '') {
    remainedChar = 100;
    $('.rem-char').html(remainedChar);
  } else if ((e.inputType == 'deleteContentBackward' || e.inputType == 'deleteContentForward') && message.value !== '') {
    remainedChar++;
    console.log(remainedChar);
    $('.rem-char').html(remainedChar);
  }
  else if (remainedChar > 0 && message.value !== '') {
    remainedChar--;
    $('.rem-char').html(remainedChar);
  }
  else if (remainedChar <= 0) {
    $('.rem-char').html(' your available character finished');

  }

});


/////////////////////////////////////

// The second method // 

// let numOfchar = 100;
// $("#message").keyup(function () {
//   let length = $("#message").val().length;
//   console.log(length);
//   let remainedChar = numOfchar - length;

//   if (remainedChar <= 0) {
//     $(".rem-char").text("your available character finished");
//   } else {
//     $(".rem-char").text(remainedChar);
//   }
// });


//   ================Contact End===============
