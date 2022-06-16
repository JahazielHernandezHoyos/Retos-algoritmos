// Haga que la funcion rectangleAre(strArr) tome la matriz de cadenas almacenada en strArr, que solo contendra 4 elementos y tendra la forma (xy) donde x e y son numeros enteros, y devolvera el area del rectangulo formado por los 4 puntos en una rejilla cartesiana los 4 elementos estaran en orden arbitrario por ejemplo el strArr es ["(0 0)","(3 0)", "(0,2)", "(3,2)"] entonces su programa deberia devolver 6 porque el ancho del rectangulo es 3 y la altura es 2 y el area de un rectangulo es igual al ancho * alto

const strArr = ["(0 0)", "(1 0)", "(1 1)", "(0 1)"];
const strArr1 = ["(1 1)", "(1 3)", "(3 1)", "(3 3)"];

function rectangleArea(strArr) {
  let arr = strArr.map((e) =>
    e
      .replace(/[()]/g, "")
      .split(" ")
      .map((e) => parseInt(e))
  );

  console.log(arr);

  let ancho = arr[1][1] - arr[2][1];
  console.log("ancho", ancho);
  let alto = arr[0][0] - arr[3][1];
  console.log("alto", alto);

  ancho = Math.abs(ancho);
  alto = Math.abs(alto);
  return ancho * alto;
}

console.log(rectangleArea(strArr));
