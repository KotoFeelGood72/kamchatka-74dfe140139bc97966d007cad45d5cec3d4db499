export default {
  head() {
			return {
					title: this.seo ? this.seo.title : "",
					meta: [
							{
								hid: "description",
								name: "description",
								content: this.seo ? this.seo.description : "",},
							{
								hid: "image",
								name: "image",
								content: this.seo && this.seo.img ? this.seo.img.src : "",},
							{
								hid: "og:title",
								name: "og:title",
								content: this.seo ? this.seo.title : "",},
							{
								hid: "og:description",
								name: "og:description",
								content: this.seo ? this.seo.description : "",},
							{
								hid: "og:image",
								name: "og:image",
								content: this.seo && this.seo.img ? this.seo.img.src : "",},
							{
								hid: "cmsmagazine",
								name: "cmsmagazine",
								content: "9dece2e20769e5fefc2f5dec3eee83ae",},
							{
								hid: "yandex-verification",
								name: "yandex-verification",
								content: "81bc8d9d86628e2b"},
					],
			};
	},
};
