//the following snippet came from 'postbox2.js, in the 'tests' folder of project: devsoft
Template.postsTemplate2.events({
    //for the check box. surely we will need this for something.
    'click .toggle-checked': function() {
        Posts.update(this._id, {$set: {checked: !this.checked}}); //so the checkbox shows up "not checked"
    },
    //to delete "this" post
    'click .delete': function() {
        Posts.remove(this._id);
    }
});