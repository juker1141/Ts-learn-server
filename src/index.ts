import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

// 透過 middleware 把參數寫在 req.body 裡面
app.use(bodyParser.urlencoded({ extended: true }));
// 建立一個 req.session
app.use(cookieSession({ keys: ["dsidasld"] }));

app.use(router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});