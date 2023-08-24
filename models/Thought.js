const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
    },    
    // Array of nested documents created with the reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Created a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

// create a new instance of the model/ Initialize our Thought Model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
