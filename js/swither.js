
    function switchPage(pageNumber) {
        // Hide all pages
        var pages = document.getElementsByClassName("page");
        for (var i = 0; i < pages.length; i++) {
            pages[i].classList.remove("active");
        }

        // Show the selected page
        var selectedPage = document.getElementById("page" + pageNumber);
        if (selectedPage) {
            selectedPage.classList.add("active");
        }
    }
