Meteor.startup(function () {
    if (Posts.find().count() === 0) {
        [
            {name: "How to Make a Meteor App"},
            {name: "How to Learn jQuery"},
            {name: "Why I Love PHP"}
        ].forEach(function(arm){
                Posts.insert(arm);
            });
    }
});