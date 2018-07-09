document.getElementById('my-file').onchange = function () {
  var x = this.value.split('\\');
  document.getElementById('file-info').innerText = x[x.length - 1];
};

function handleBrowseClick() {
  document.getElementById('my-file').click();
}
