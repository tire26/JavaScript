var cnvs, cntxt, w, brshWdth = 7, brshClr = "white";
cnvs = document.getElementById("cnvs");
c(cnvs);
cntxt = cnvs.getContext("2d");
c(cntxt);

var blockList = new Array();
height = 50;
width = 80;

bufferX = Math.random() * 754;
bufferY = Math.random() * 524;
blockList.push([bufferX, bufferY, height, width]);

bufferX2 = Math.random() * 734;
isCheckDone = false;
do {
    bufferY1 = Math.random() * 534;
    if (!(bufferX < bufferX2 + width &&
        bufferX + width > bufferX2 &&
        bufferY < bufferY1 + height &&
        bufferY + height > bufferY1)) {
        blockList.push([bufferX, bufferY, height, width]);
        isCheckDone = true;
    }
} while (!isCheckDone);

c("blockList = ", blockList);
for (var i = 0; i < blockList.length; i++) {
    cntxt.fillStyle = "maroon";
    cntxt.rect(...blockList[i]);
    cntxt.stroke();
}

cnvs.onmousedown =
    function () {
        cnvs.onmousemove =
            function (event) {
                var x, y;
                x = event.offsetX;
                y = event.offsetY;
                cntxt.fillStyle = brshClr;
                cntxt.fillRect(x, y, brshWdth, brshWdth);

                for (var i = 0; i < blockList.length; i++) {
                    blckX = blockList[i][0];
                    blckY = blockList[i][1];
                    blckWdth = blockList[i][2];
                    blckHght = blockList[i][3];

                    if (x > (blckX - brshWdth) && x <= (blckX + blckWdth)
                        &&
                        y >= (blckY - brshWdth) && y <= (blckY + blckHght)) {
                        alert("Вы проиграли");
                    }
                }
            };
        cnvs.onmouseup =
            function () {
                cnvs.onmousemove = null;
            }
    }

document.getElementById("brushWidth").oninput =
    function () {
        brshWdth = this.value;
    }



document.getElementById("brushColor").oninput =
    function () {
        brshClr = this.value;
        c("brshClr = ", brshClr);
    }








