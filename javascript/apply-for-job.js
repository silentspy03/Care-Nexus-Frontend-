let subMenu = document.getElementById('subMenu')

function toggleMenu()  {
    subMenu.classList.toggle("open-menu");
}

function checkFileSize() {
    var fileInput = document.getElementById('cvFile');
    if(fileInput.files.length > 0) {
        var fileSize = fileInput.files[0].size; // in bytes
        var maxSize = 2 * 1024 * 1024; // 2 MB
        if(fileSize > maxSize) {
            alert('File size exceeds 2 MB. Please upload a smaller file.');
            return false;
        }
    }
    return true;
}