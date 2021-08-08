/**
 * Template Name: ComingSoon - v4.3.0
 * Author: BootstrapMade.com
 * Editor: The summer ronins
 */
(function () {
	"use strict";

	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return [...document.querySelectorAll(el)];
		} else {
			return document.querySelector(el);
		}
	};

	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all);
		if (selectEl) {
			if (all) {
				selectEl.forEach((e) => e.addEventListener(type, listener));
			} else {
				selectEl.addEventListener(type, listener);
			}
		}
	};

	/**
	 * Easy on scroll event listener
	 */
	const onscroll = (el, listener) => {
		el.addEventListener("scroll", listener);
	};

	/**
	 * Back to top button
	 */
	let backtotop = select(".back-to-top");
	if (backtotop) {
		const toggleBacktotop = () => {
			if (window.scrollY > 100) {
				backtotop.classList.add("active");
			} else {
				backtotop.classList.remove("active");
			}
		};
		window.addEventListener("load", toggleBacktotop);
		onscroll(document, toggleBacktotop);
	}

	/**
	 * Countdown timer
	 */
	// let countdown = select(".countdown");
	// const output = countdown.innerHTML;

	// const countDownDate = function () {
	// 	let timeleft =
	// 		new Date(countdown.getAttribute("data-count")).getTime() -
	// 		new Date().getTime();

	// 	let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	// 	let hours = Math.floor(
	// 		(timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	// 	);
	// 	let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	// 	let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

	// 	countdown.innerHTML = output
	// 		.replace("%d", days)
	// 		.replace("%h", hours)
	// 		.replace("%m", minutes)
	// 		.replace("%s", seconds);
	// };
	// countDownDate();
	// setInterval(countDownDate, 1000);

	// Subscribe form submit
	$("#submitButton").click(function (event) {
		event.preventDefault();

		//form validate
		if ($("#email").val() != "" || $("#email").val().length != 0) {
			$.ajax({
				url: "https://api.apispreadsheets.com/data/16658/",
				type: "post",
				data: $("#myForm").serializeArray(),
				beforeSend: function (xhr) {
					$(".loading").css("display", "block");
				},
				success: function () {
					$(".error-message").css("display", "none");
					$(".loading").css("display", "none");
					$(".sent-message").css("display", "block");
                    $('#myform')[0].reset()
				},
				error: function () {
					$(".error-message").css("display", "block");
					$(".error-message").text("Đã có lỗi xảy ra ở Server");
				},
			});
		} else {
			$(".error-message").css("display", "block");
			$(".error-message").text("Vui lòng hãy nhập email của bạn");
		}
	});
})();
