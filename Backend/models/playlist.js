'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
  };
  return Playlist;
};