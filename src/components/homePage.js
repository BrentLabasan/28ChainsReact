"use strict";

var React = require('react');

var attemptStreak = React.createClass({
    mixins: [ReactFireMixin],
    componentWillMount: function() {
        var ref = new Firebase("https://28chains.firebaseio.com/");
        this.bindAsArray(ref, "items");
    },
    render: function() {
        return (
            <div>
                attemptStreak
            </div>
        );
    }
});

module.exports = attemptStreak;