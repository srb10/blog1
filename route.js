Router.configure({
    //the default layout
    layoutTemplate: 'mainNav'  //this refers to navBar.html's <template>
                              //because it is called 'LAYOUT TEMPLATE,
                                //Meteor considers it a PAGE LAYOUT becuase of this block
});



Router.route(
    '/',
    function() {
        this.render('publicView');
        this.layout(Meteor.user() ? 'sideNav' : 'mainNav')
    });

Router.route(
    '/adminViewAllPosts',
    function() {
        this.render('adminViewAllPosts');
        this.layout(Meteor.user() ? 'sideNav':'mainNav')
        //this.layout('sideNav')
    });