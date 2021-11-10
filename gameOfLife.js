//IIFE
(function()
{
  const wdth = 60, hght = 60, cllWdth = 10, elemID = "gameOfLife2021", fldClr = "white";
  const tail = "_gameOfLife2021_asdfasdfasdfasdfasdfasdfd";
  const idStart = "btnStart" + tail;
  const idStop = "btnStop" + tail;
  const idCellColor = "cellColor" + tail;
  const idClear = "btnClear" + tail;
  const idRandomFill = "btnRandomFill" + tail;
  const storageCellColor = "cellColor" + tail;
  const btnStartCaption = "Запустить процесс эволюции";
  const btnStopCaption = "Остановить процесс эволюции";
  const btnClearCaption = "Очистить игровое поле";
  const btnRandomFillCaption = "Заполнить игровое поле";
  const lblCellColourCaption = "Цвет «Живых» ячеек:";
  const msgClear = "Очистить игровое поле?";
  var mtrx, cnvs, cntxt, cllClr, isActive = false, isOnMouseMove = false;

  cllClr = window.localStorage.getItem(storageCellColor);
  cllClr = (cllClr == null ? "black" : cllClr);

  mtrx = init(wdth, hght);
  cnvs = initGameField(wdth, hght, cllWdth, cllClr);

  //ОБРАБОТКА ИЗМЕНЕНИЯ ЦВЕТА "ЖИВЫХ" ЯЧЕЕК
  document.getElementById(idCellColor).oninput = 
    function()
    {
      if (!isActive)
      {
        cllClr = this.value;
        c("cllClr = ", cllClr);
        drawGameField(mtrx, cnvs, cllWdth, cllClr);
        window.localStorage.setItem(storageCellColor, cllClr);
      }
    }

  //ОБРАБОТКА НАЖАТИЯ КНОПКИ "ЗАПОЛНИТЬ ИГРОВОЕ ПОЛЕ"
  document.getElementById(idRandomFill).onclick = 
    function()
    {
      if (!isActive)
      {
        randomFill(mtrx);
        drawGameField(mtrx, cnvs, cllWdth, cllClr);
      }
    }

  //ОБРАБОТКА НАЖАТИЯ КНОПКИ "ЗАПУСТИТЬ/ОСТАНОВИТЬ ЭВОЛЮЦИЮ"
  document.getElementById(idStart).onclick = 
    function(e)
    {
      if (!isActive)
      {
        startEvolution(cnvs, mtrx, cllWdth, cllClr);
        document.getElementById(idCellColor).setAttribute("disabled", "");
        document.getElementById(idRandomFill).setAttribute("disabled", "");
        this.innerHTML = btnStopCaption;
      }
      else
      {
        stopEvolution();
        document.getElementById(idCellColor).removeAttribute("disabled");
        document.getElementById(idRandomFill).removeAttribute("disabled");
        this.innerHTML = btnStartCaption;
      }
    };

   
  //ОБРАБОТКА НАЖАТИЯ КНОПКИ "ОЧИСТИТЬ ИГРОВОЕ ПОЛЕ"
  document.getElementById(idClear).onclick = 
    function(e)
    {
      if (window.confirm(msgClear))
      {
        if (isActive)
        {
          document.getElementById(idStop).onclick();
        }
        mtrx = init(wdth, hght);
        drawGameField(mtrx, cnvs, cllWdth, cllClr);
      }
    };

  //ОБРАБОТКА РИСОВАНИЯ ЛИНИИ ИЗ "ЖИВЫХ" ЯЧЕЕК
  cnvs.onmousedown = 
  function()
  {
    cnvs.onmousemove = 
      function(e)
      {
        if (!isActive)
        {
          isOnMouseMove = true;
          var x, y, cellWidth, matrix, cellX, cellY;
          cellWidth = cllWdth;
          matrix = mtrx;
          x = e.offsetX;
          y = e.offsetY;
          cellX = Math.floor(x / cellWidth);
          cellY = Math.floor(y / cellWidth);
          matrix[cellY][cellX] = 1; //(matrix[cellY][cellX] ? 0 : 1);
          drawCell(cellX, cellY, cellWidth, this, matrix[cellY][cellX], cllClr);
        }
      };
    cnvs.onmouseup = 
      function()
      {
        cnvs.onmousemove = null;
      }
  }


  //ОБРАБОТКА НАЖАТИЙ ЛЕВОЙ КНОПКИ МЫШИ НА ИГРОВОМ ПОЛЕ 
  cnvs.onclick = 
    function(e)
    {
      if (!isActive && !isOnMouseMove)
      {
        var x, y, cellWidth, matrix, cellX, cellY;
        cellWidth = cllWdth;
        matrix = mtrx;
        x = e.offsetX;
        y = e.offsetY;
        //c("x = ", x, "y = ", y);
        cellX = Math.floor(x / cellWidth);
        cellY = Math.floor(y / cellWidth);
        //c("cellX =", cellX, "cellY =", cellY, "matrix =", matrix, "matrix[cellX][cellY] =", matrix[cellX][cellY]);
        matrix[cellY][cellX] = (matrix[cellY][cellX] ? 0 : 1);
        drawCell(cellX, cellY, cellWidth, this, matrix[cellY][cellX], cllClr);
        //neighborsCount(matrix, cellX, cellY);
      }
      isOnMouseMove = false;
    };

  //ЗАПОЛНЕНИЕ ИГРОВОГО ПОЛЯ
  function randomFill(matrix)
  {
    for(var row of matrix)
    {
      //c("row =", row);
      for(var ind in row)
      {
        //c("ind =", ind, "value =", row[ind]);
        row[ind] = Math.floor(Math.random() * 2);
      }
    }
    return matrix;
  }

  //ЗАПУСК "ЭВОЛЮЦИИ"
  function startEvolution(canvas, matrix, cellWidth, cellColor)
  {
    isActive = true;
    nextState(matrix);
    drawGameField(matrix, canvas, cellWidth, cellColor);
    window.timer = setTimeout(startEvolution, 1000, canvas, matrix, cellWidth, cellColor);
  }

  //ОСТАНОВКА "ЭВОЛЮЦИИ"
  function stopEvolution()
  {
    isActive = false;
    clearTimeout(window.timer);
  }

  //ОТРИСОВКА ТЕКУЩЕГО СОСТОЯНИЯ
  function drawGameField(matrix, canvas, cellWidth, cellColor)
  {
    var height = matrix.length, width = matrix[0].length;
    for(var y = 0; y < height; y++)
    {
      for(var x = 0; x < width; x++)
      {
        drawCell(x, y, cellWidth, canvas, matrix[y][x], cellColor)
      }
    }
  }


  //ПОЛУЧЕНИЕ СЛЕДУЮЩЕГО ЭТАПА "ЭВОЛЮЦИИ"
  function nextState(matrix)
  {
    var value, valueNew, neighbors$
    var height = matrix.length, width = matrix[0].length;
    var matrixNew = new Array(height);
    
    for(var y = 0; y < height; y++)
    {
      matrixNew[y] = new Array(width);
      for(var x = 0; x < width; x++)
      {
        value = matrix[y][x];
        neighbors = neighborsCount(matrix, x, y);
        valueNew = value;
        if (!value && neighbors == 3)
        {
          valueNew = 1;
        }
        else if(value && (neighbors <= 1 || neighbors >= 4))
        {
          valueNew = 0;
        }
        matrixNew[y][x] = valueNew;
      }
    }
    
    for(var y = 0; y < height; y++)
    {
      for(var x = 0; x < width; x++)
      {
        matrix[y][x] = matrixNew[y][x];
      }
    }
    
    
    return matrix;
  }

  //ПОЛУЧЕНИЕ КОЛИЧЕСТВА СОСЕДЕЙ
  function neighborsCount(matrix, x, y)
  {
    var count, height = matrix.length, width = matrix[0].length;
    count = matrix[loop(y - 1, height)][loop(x, width)] 
            + matrix[loop(y - 1, height)][loop(x + 1, width)]  
            + matrix[loop(y, height)][loop(x + 1, width)]  
            + matrix[loop(y + 1, height)][loop(x + 1, width)]  
            + matrix[loop(y + 1, height)][loop(x, width)]  
            + matrix[loop(y + 1, height)][loop(x - 1, width)]  
            + matrix[loop(y, height)][loop(x - 1, width)]  
            + matrix[loop(y - 1, height)][loop(x - 1, width)];
    //c("count ", count);
    return count;
  }

  //КОРРЕКТИРОВКА КООРДИНАТЫ
  function loop(val, length)
  {
    if (val < 0)
    {
      val = length - 1;
    }
    else if(val == length)
    {
      val = 0;
    }
    return val;
  }

  //ОТРИСОВКА "ЖИВОЙ" ЯЧЕЙКИ
  function drawCell(x, y, cellWidth, canvas, value, cellColor)
  {
    var context, color;
    context = canvas.getContext("2d");
    color = (value ? cellColor : "white");
    //c("value = ", value, "color = ", color);
    context.fillStyle = color;
    context.fillRect(x * cellWidth + 1, y * cellWidth + 1, cellWidth - 2, cellWidth - 2);
    context.stroke(); 
  }


  //ОТРИСОВКА ПУСТОГО ИГРОВОГО ПОЛЯ
  function initGameField(width, height, cellWidth, cellColor) 
  {
    var fieldWidth = width * cellWidth, fieldHeight = height * cellWidth, canvas, context;
    document.getElementById(elemID).innerHTML = 
  `
    <canvas style='width:${fieldWidth}px; height:${fieldHeight}px; background-color:${fldClr}' id='cnvs' width='${fieldWidth}' height='${fieldHeight}'></canvas>
    <p>  
        <label for="${idCellColor}">${lblCellColourCaption}</label>
        <input type="color" value="${cellColor}" id="${idCellColor}"/>
    </p>
    <p>
      <button id='${idStart}'>${btnStartCaption}</button>
    </p>
    <p>
      <button id='${idRandomFill}'>${btnRandomFillCaption}</button>
    </p>
    <p>
      <button id='${idClear}'>${btnClearCaption}</button>
    </p>
  `;
    canvas = document.getElementById("cnvs");
    context = canvas.getContext("2d");
    for(var y = 0; y <= height; y++)
    {
      context.beginPath();
      context.moveTo(0, y * cellWidth);
      context.lineTo(fieldWidth, y * cellWidth);
      context.stroke();
      context.strokeStyle = "black";
      context.fill();
    }
    for(var x = 0; x <= width; x++)
    {
      context.beginPath();
      context.moveTo(x * cellWidth, 0);
      context.lineTo(x * cellWidth, fieldHeight);
      context.stroke();
      context.strokeStyle = "black";
      context.fill();
    }
    
    context.beginPath();
    context.moveTo(fieldWidth / 2, 0);
    context.lineTo(fieldWidth / 2, fieldHeight);
    context.stroke();
    context.strokeStyle = "black";
    context.fill();
    
    context.beginPath();
    context.moveTo(0, fieldHeight / 2);
    context.lineTo(fieldWidth, fieldHeight / 2);
    context.stroke();
    context.strokeStyle = "black";
    context.fill();
    
    
    return canvas;
  }

  //ПОЛУЧЕНИЕ НАЧАЛЬНОГО СОСТОЯНИЯ ИГРОВОГО ПОЛЯ
  function init(width, height)
  {
    return new Array(height).fill(undefined).map(() => new Array(width).fill(0));
    
    /*
    var m1 = new Array(height).fill(undefined);
    var m2 = m1.map(() => new Array(width).fill(0));
    c(m1, m2);
    return m2 ; //
    */
    //new Array(height).map(() => new Array(width).fill(0));
    /*
    var result = new Array();
    for(var y = 0; y < height; y++)
    {
      result[y] = [];
      for(var x = 0; x < width; x++)
      {
        result[y][x] = 0;
      }
    }
    return result;
    */
    
  }

  //ВЫВОД В КОНСОЛЬ
  function c(val, ...valList)
  {
    console.log(val, ...valList);
    return val;
  }
})();
