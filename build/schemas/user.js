'use strict';

var Schema = require('mongoose').Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 40,
    trim: true
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
    validate: {
      validator: function validator(v) {
        return (/.+@.+/.test(v)
        );
      },

      message: 'Please enter a valid email address.'
    }
  },
  avatar: {
    provider: {
      type: String,
      maxlength: 100,
      trim: true
    },
    url: {
      type: String,
      maxlength: 500,
      trim: true
    }
  },
  website: {
    type: String,
    maxlength: 100,
    trim: true
  },
  bio: {
    type: String,
    maxlength: 500,
    trim: true
  }
});

userSchema.index({ email: 1 }, { unique: true });

module.exports = userSchema;