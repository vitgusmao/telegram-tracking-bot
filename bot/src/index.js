"use strict";

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

{
	var app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.post("new-message", (req, res) => {
		const { message } = req.body;

		if (!message || message.text.toLowerCase().indexOf("Olá") < 0) {
			return res.end();
		}

		axios
			.post(
				"https://api.telegram.org/1113085441:AAFWRgMy02OKppjFjVeC7X0OOt7RYR0j1hw/sendMessage",
				{
					chat_id: message.chat.id,
					text: "Olá, tudo bom?!!",
				}
			)
			.then((response) => {
				console.log("Message posted");
				res.end("ok");
			})
			.catch((err) => {
				console.log("Error :", err);
				res.end("Error :" + err);
			});
	});

	app.listen(3000, function () {
		console.log("Telegram app bot listening on port 3000!");
	});
}
