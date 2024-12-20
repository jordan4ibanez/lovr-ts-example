lovr.load = () => {
  print("Hello!")
}

lovr.draw = (pass: Pass) => {
  pass.text("you can hit escape to close this. :D", 0, 1.7, -3, 0.3)
}

lovr.keypressed = (key: KeyCode) => {
  if (key == "escape") {
    lovr.event.quit()
  }
}