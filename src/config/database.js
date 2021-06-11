//exportar um obj de config da minha base
module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "123",
  database: "sqlnode",
  define: {
    timestamps: true,
    underscored: true,
  },
};
//created_at
//update_at
