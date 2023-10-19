async function copyUrl() {
  // Get the text field
  const copyText = document.getElementById("short-url");

  // Select the text field
  copyText.focus()
  copyText.select()
  copyText.setSelectionRange(0, 99999); // For mobile devices

  try {
    await navigator.clipboard.writeText(copyText.value)
    console.log('click')
    console.log(copyText.value)
    // Alert the copied text
    alert("Copied the URL: " + copyText.value)
  } catch (err) {
    console.error('Unable to copy: ', err)
  }
}
