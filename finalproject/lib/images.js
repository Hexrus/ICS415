/**
 * Created by Michael on 12/9/2015.
 */
if(Meteor.isServer) {
  var imageStore = new FS.Store.S3("images", {
    accessKeyId: Meteor.settings.private.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.private.AWSSecretAccessKey,
    bucket: Meteor.settings.private.AWSBucket
  });

  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      }
    }
  });
}

if(Meteor.isClient) {
  var imageStore = new FS.Store.S3("images");
  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      },
      onInvalid: function(message) {
        toastr.error(message);
      }
    }
  });
}

Images.allow({
  insert: function() {return true;},
  update: function() {return true;},
  download: function() {return true;}
});