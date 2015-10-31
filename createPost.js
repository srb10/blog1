//users = new Mongo.Collection('users');
Posts = new Mongo.Collection('posts');

if (Meteor.isClient) {

    Template.body.helpers({
        posts: function () {
           if(Posts.find()){
               return Posts.find();}
            else{
               alert("Nothing in DB yet, m.y friend");
           }
        }
    });
    //////////////////////////
    Template.body.events({
        'submit .new-resolution': function (event) {//event contains all the data about the event with the class .new-resolution
            var title = event.target.title.value;
            var thebody = event.target.thebody.value;
            alert(title);
            Posts.insert({
                title: title,
                theBody: thebody,
                createdAt: new Date()
            });
            //clear the form now...
            event.target.title.value = "";
            return false;
        }
    });



/*    Template.createPost2.events({
        'click button' : function(event, template){
            $('body').css('background-color', 'red');
        }
    });*/
    Template.createPost2.events({
        'click button': function () {
            // increment the counter when button is clicked
            //Session.set("counter", Session.get("counter") + 1);
            $('body').css('background-color', 'red');
            alert('Hey');
        }
    });

}