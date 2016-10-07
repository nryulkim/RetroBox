export function shuffleArray(orgArray) {
  if(typeof orgArray === "undefined") { return undefined; }

  const array = Array.from(orgArray);
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

export function setDragAndDrop(id, callback){
  const $form = $(id);
  $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    $form.addClass('is-dragover');
  })
  .on('dragleave dragend drop', function() {
    $form.removeClass('is-dragover');
  })
  .on('drop', function(e) {
    callback(e.originalEvent.dataTransfer.files[0]);
  });
}
