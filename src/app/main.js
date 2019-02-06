import { Bideo } from "./vendor/bideo";

export function ready(whenReadyRun) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
		whenReadyRun();
	} else {
		document.addEventListener("DOMContentLoaded", whenReadyRun);
	}
}

export function bideo() {
	const BIDEO = new Bideo(window);

	BIDEO.init({
		videoEl: document.getElementById("video"),
		container: document.querySelector("body"),
		resize: true,
		isMobile: false && window.matchMedia("(max-width: 768px)").matches,
		src: [
			{
				src: "https://static.fluencyy.com/www.andrewbrey.com/coffee_1c7b7a98-3cd3-4fb5-8985-5c6a90acf681.mp4",
				type: "video/mp4"
			}
		],
		onLoad: () => {
			const VIDEO_COVER = document.querySelector(".video-cover");

			VIDEO_COVER.classList.add('visually-hidden');
			VIDEO_COVER.style.display = "none";
		}
	});
}
