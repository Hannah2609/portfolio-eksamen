window.addEventListener("load", progressBar);

function progressBar () {
    console.log("progressBarAnimation");

    document.querySelector("#progress_html_sprite").classList.add("progress")

    document.querySelector("#progress_css_sprite").classList.add("progress");

    document.querySelector("#progress_js_sprite").classList.add("progress");
  
}