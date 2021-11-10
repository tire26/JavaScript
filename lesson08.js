const wdth = 60, hght = 60, cllWdth = 10;
var mtrx, cnvs, cntxt, cllClr = "#000000", isActive = false;



mtrx = init(wdth, hght);
//c("mtrx =", mtrx);

init(wdth, hght);
cnvs = initGameField(wdth, hght, cllWdth, cllClr);

document.getElementById("cellColor").oninput = 
  function()
  {
    cllClr = this.value;
    c("cllClr = ", cllClr);
  }

document.getElementById("btnStart").onclick = 
  function(e)
  {
    startEvolution(cnvs, mtrx, cllWdth, cllClr);
  };

document.getElementById("btnStop").onclick = 
  function(e)
  {
    stopEvolution();
  };

cnvs.onclick = 
  function(e)
  {
    if (!isActive)
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
  };

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
  document.getElementsByTagName("body")[0].innerHTML = 
`
  <canvas style='width:${fieldWidth}px; height:${fieldHeight}px;' id='cnvs' width='${fieldWidth}' height='${fieldHeight}'></canvas>
  <p>  
      <label for="cellColor">Цвет "живых" ячеек: </label>
      <input type="color" value="${cellColor}" id="cellColor"/>
  </p>
  <p>
    <button id='btnStart'>Запустить процесс эволюции</button>
  </p>
  <p>
    <button id='btnStop'>Остановить процесс эволюции</button>
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
    context.fillStyle = "black";
    context.fill();
  }
  for(var x = 0; x <= width; x++)
  {
    context.beginPath();
    context.moveTo(x * cellWidth, 0);
    context.lineTo(x * cellWidth, fieldHeight);
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }
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

