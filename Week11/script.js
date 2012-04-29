var Fun = {
    init : function(e){
        var fileChooser = document.getElementById("file_chooser");
        fileChooser.addEventListener("change", Fun.chooser.change, false);

        var fileChooser2 = document.getElementById("file_chooser2");
        fileChooser2.addEventListener("change", Fun.chooser.change, false);
        
        
        var theForm = document.getElementById("the_form");
        theForm.addEventListener("submit", Fun.form.submit, false);
       
        
        var dropZone1 = document.getElementById("drop_zone1");
        dropZone1.addEventListener("dragenter", Fun.drop.enter, false);
        dropZone1.addEventListener("dragover", Fun.drop.over, false);
        dropZone1.addEventListener("drop", Fun.drop.drop, false);
       
        var dropZone2 = document.getElementById("drop_zone2");
        dropZone2.addEventListener("dragenter", Fun.drop.enter, false);
        dropZone2.addEventListener("dragover", Fun.drop.over, false);
        dropZone2.addEventListener("drop", Fun.drop.drop, false);
        
        
        
    },
    
    chooser : {
        files : null,
        change : function(e){
            Fun.chooser.files = this.files;
            var file = Fun.chooser.files[0];
            var fr = new FileReader();
            fr.addEventListener("load", Fun.fileReader.load, false);
            fr.readAsDataURL(file);
        }
    },
    
    form : {
        submit : function(e){
            var file = Fun.chooser.files[0];
            if (file.fileSize > 100000000){
                alert("Your filesize is too big");
            } 
            Fun.fileUpload.upload(file);
            e.preventDefault();
            return false;
        }
    },
    
    fileReader : {
        load : function(e){
            var dataUrl = this.result;
            var theImage = document.getElementById("the_image1");
            theImage.src = dataUrl;
            var dropText1 = document.getElementById("droptext1");
            droptext1.parentNode.removeChild(dropText1);         

            var dropZone1 = document.getElementById("drop_zone1");
           dropZone1.classList.add("over");

           var dropZone2 = document.getElementById("drop_zone2");
           dropZone2.classList.add("over");
           
        }
        
    },
    
    fileUpload : {
        showProgressDiv : null,
        upload : function(file){
            console.log(file);
            Fun.fileUpload.showProgressDiv = document.getElementById("show_progress1");
            var xhr = new XMLHttpRequest();
            xhr.upload.addEventListener("progress", Fun.fileUpload.progress, false);
            xhr.addEventListener("readystatechange", Fun.fileUpload.readyStateChange, false);
            xhr.open("post", "uploader.php", true);
            xhr.send(file);
        },
        progress : function(e){
            var percentage = e.loaded / e.total * 100;
            console.log("progress", percentage);
            Fun.fileUpload.showProgressDiv.innerHTML = Math.floor(percentage) + "%";
        },
        readyStateChange : function(e){
            if (this.readyState == 4 && this.status == 200){
                Fun.fileUpload.showProgressDiv.innerHTML = "The file was uploaded!";
            }
        }
    },
    drop : {
        start : function(e){
            console.log('start');
            e.stopPropagation();
            e.preventDefault();
            return false;
        },
        enter : function(e){
            console.log('enter');
            e.stopPropagation();
            e.preventDefault();
            return false;
        },
        over : function(e){
            console.log('over');
            e.stopPropagation();
            e.preventDefault();
            this.classList.add("over");
            return false;
        },
        drop : function(e){
            console.log('drop');
            e.stopPropagation();
            e.preventDefault();
            console.log(e, e.dataTransfer.files);
            var file = e.dataTransfer.files[0];
            var fr = new FileReader();
            fr.addEventListener("load", Fun.fileReader.load, false);
            fr.readAsDataURL(file);
            return false;
        }
    }
};


window.addEventListener("load", Fun.init, false);