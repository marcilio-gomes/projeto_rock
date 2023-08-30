function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "../assets/Perfil Canva 3.png",
      'alt","Foto de Marcílio Gomes sorrindo, usando óculos preto e camisa branca, barba e fundo preto."'
    )
  } else {
    img.setAttribute("src", "../assets/Perfil Canva2.png")
  }
  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }
}
