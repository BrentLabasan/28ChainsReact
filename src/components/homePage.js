"use strict";

var React = require('react');
var Firebase = require('firebase');
var Reactfire = require('reactfire');

var attemptStreak = React.createClass({

    mixins: [Reactfire.ReactFireMixin],


    // without ReactFire
/*    mixins: [ReactFireMixin],

    componentWillMount: function() {
        var ref = new Firebase("https://28chains.firebaseio.com/");
        this.bindAsArray(ref, "items");
    },

    handleSubmit: function(e) {
        e.preventDefault();
        this.firebaseRefs.items.push({
            text: this.state.text
        });
        this.setState({ text: "" });
    },*/

    // with ReactFire

    /*    componentWillMount: function() {
            this.firebaseRef = new Firebase("https://28chains.firebaseio.com/");
            this.firebaseRef.on("child_added", function(dataSnapshot) {
                this.items.push(dataSnapshot.val());
                this.setState({
                    items: this.items
                });
            }.bind(this));
        },

        handleSubmit: function(e) {
            e.preventDefault();
            this.firebaseRef.push({
                text: this.state.text
            });
            this.setState({text: ""});
        },*/

/*    componentWillUnmount: function() {
        this.firebaseRef.off();
    },*/

    render: function() {
        return (
            <div>
                attemptStreak
            </div>
        );
    }
});

module.exports = attemptStreak;