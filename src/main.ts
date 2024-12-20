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

  // Hey, while you're in here, try doing a different
  // key pressed check like I did above and watch the autocomplete. :)
}