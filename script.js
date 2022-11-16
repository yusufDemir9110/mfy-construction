$(document).ready(function () {
  $(".carousel").carousel({
    interval: 5000,
  });
});
if ($(window).innerWidth() <= 850) {
  $(".form1").mouseenter(function () {
    $(".form1").removeClass("rotate2");
    $(".form1").addClass("rotate3");
  });
  $(".form1").mouseleave(function () {
    $(".form1").removeClass("rotate3");
    $(".form1").addClass("rotate2");
  });
}
const processImages = document.querySelectorAll(".processImgCont");
processImages.forEach((processImg, index) => {
  processImg.addEventListener("mouseenter", () => {
    $(`#altM${index + 1}1`).animate({ opacity: "1" }, 200);
  });
});
processImages.forEach((processImg, index) => {
  processImg.addEventListener("mouseleave", () => {
    $(`#altM${index + 1}1`).animate({ opacity: "0" }, 200);
  });
});

if ($(window).innerWidth() >= 520) {
  const homeProImages = Array.from(document.querySelectorAll(".csimg"));
  homeProImages.forEach((homeProImage, index) => {
    homeProImage.addEventListener("click", () => {
      $(".bigPictureCont").css("display", "flex");
      $(".bigPicture").css("display", "flex");
      $(".bigPicture").css(
        "backgroundImage",
        `url(./assets/projects/pp${index + 1}.jpg)`
      );
    });
  });
  $(".button2").click(function () {
    $(".bigPictureCont").css("display", "none");
    $(".bigPicture").css("display", "none");
  });
}
if ($(window).innerWidth() >= 520) {
  const homeProImages = Array.from(document.querySelectorAll(".csHomeImg"));
  homeProImages.forEach((homeProImage, index) => {
    homeProImage.addEventListener("click", () => {
      $(".bigPictureCont").css("display", "flex");
      $(".bigPicture").css("display", "flex");
      $(".bigPicture").css(
        "backgroundImage",
        `url(./assets/projects/ph${index + 1}.jpg)`
      );
    });
  });
  $(".button2").click(function () {
    $(".bigPictureCont").css("display", "none");
    $(".bigPicture").css("display", "none");
  });
}

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    $("#logo").css("background", "none");
    $(".a1").css("color", "black");

    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
    $(".a1").css("color", "white");
    $("#logo").css("background", "rgba(255,255,255,0.5)");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    if ($(window).innerWidth() <= 850) {
      $(".contact").addClass("rotate4");
    } else {
      $("#topLogo").css("height", "3rem");
      $(".contact").addClass("rotate");
    }

    $(".form1").addClass("rotate2");
    $(".form1").mouseenter(function () {
      $(".form1").removeClass("rotate2");
      $(".form1").addClass("rotate3");
    });
    $(".form1").mouseleave(function () {
      $(".form1").removeClass("rotate3");
      $(".form1").addClass("rotate2");
    });
  } else {
    $("#topLogo").css("height", "5rem");
    if ($(window).innerWidth() <= 850) {
      $(".form1").addClass("rotate2");
    } else {
      $(".contact").removeClass("rotate2");
    }
    $(".contact").removeClass("rotate");
    $(".form1").removeClass("rotate2");
  }
});

$("#contactUs").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
