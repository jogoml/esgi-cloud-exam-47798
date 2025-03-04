const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://esgi_cloud_exam_postgre_47798_user:FRfGiMlyBWwbllesZS0phUAeLAd3FTFE@dpg-cv3ao13tq21c73bi8ajg-a/esgi_cloud_exam_postgre_47798', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;