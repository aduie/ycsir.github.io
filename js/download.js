const downloadFile = () => {
    const fileUrl = "https://gitee.com/api/v5/repos/adieuyc/ycmusic/contents/download/%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B%E5%AF%BC%E8%AE%BA.zip";
    console.log("download________________________________________________________________");
   


    if(window.location.href == "http://adieuyc.gitee.io/download/"){
        document.getElementsByTagName("h6")[0].addEventListener("click", function () {
            var xhr = new XMLHttpRequest();
            xhr.responseType = "json";
            // console.log("你点了a，我进XMLHttpRequest了");
    
            xhr.onload = function () {
                // console.log("紧接着，我进onload了");
                
                // 直接使用 xhr.response，因为它已经是解析后的 JSON 对象
                var downloadUrl = xhr.response.download_url || fileUrl;
    
                var a = document.createElement("a");
                a.style.display = "none";
                document.body.appendChild(a);
    
                a.href = downloadUrl;
                a.download = "filename.zip";
    
                a.click();
                document.body.removeChild(a);
            };
    
            xhr.open("GET", fileUrl);
            xhr.send();
            // console.log("成功");
        });
    }
};

export default downloadFile;
