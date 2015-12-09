/**
 * Created by Michael on 12/6/2015.
 */
classes = "Classes";

Classes = new Mongo.Collection(classes);
updateCal = function(id, name) {
  Classes.update(id, {$set: {title:name}});
  return true;
};