$(document).ready(function () {
      $('#myTable').DataTable();
});

edits = document.getElementsByClassName('edit');

Array.from(edits).forEach((element) => {
      element.addEventListener("click", (e) => {
        console.log("edit ");
        tr = e.target.parentNode.parentNode;
        title = tr.getElementsByTagName("td")[0].innerText;
        description = tr.getElementsByTagName("td")[1].innerText;
        console.log(title, description);
        titleEdit.value = title;
        descriptionEdit.value = description;
        snoEdit.value = e.target.id;
        console.log(e.target.id)
        $('#editModal').modal('toggle');
      })
    })

deletes = document.getElementsByClassName('delete');

Array.from(deletes).forEach((element) => {
  element.addEventListener("click", (e) => {
        console.log("del ");
        console.log(e.target.id);
        sno = e.target.id.substr(1);

        if (confirm("Are you sure you want to delete this note!")) {
          console.log("yes");
          window.location = `/php/inote/index.php?delete=${sno}`;
        }
        else {
          console.log("no");
        }
      })
})