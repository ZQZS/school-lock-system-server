const express = require("express");
const cookieParser = require("cookie-parser");
const http = require("http");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressip = require("express-ip");
// session 中间件

const userRouter = require("./router/user.js");
const orderRouter = require("./router/order.js");

const app = express();
const json = express.json({ type: "*/json" });

app.use(json);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressip().getIpInfoMiddleware);
app.use(cookieParser());
app.use(
  session({
    secret: "qiuweiye", // secret  属性的值可以为任意字符串
    resave: false, // 固定写法
    saveUninitialized: true, // 固定写法
    cookie: { maxAge: 86400000 * 7 },
  })
);
app.use("/api/users", userRouter);
app.use("/api/order", orderRouter);
const port = 6000;

app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}
