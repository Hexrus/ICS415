/**
 * Created by Michael on 12/9/2015.
 */

Template.dropzone.events({
  'dropped #dropzone': function(e) {
    FS.Utility.eachFile(e, function(file) {
      var newFile = new FS.File(file);

      Images.insert(newFile, function(error, fileObj) {
        if(error) {
          toastr.error("Upload failed");
        }
        else {
          toastr.success('Upload yasss!');
        }
      });
    });
  }
});
