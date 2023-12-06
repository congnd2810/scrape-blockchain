/**
 * Welcome to Cloudflare Workers!
 *
 * This is a template for a Scheduled Worker: a Worker that can run on a
 * configurable interval:
 * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import * as cheerio from 'cheerio';

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
	//
	// Example binding to a D1 Database. Learn more at https://developers.cloudflare.com/workers/platform/bindings/#d1-database-bindings
	// DB: D1Database
}

export default {
	// The scheduled handler is invoked at the interval set in our wrangler.toml's
	// [[triggers]] configuration.
	async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
		// A Cron Trigger can make requests to other endpoints on the Internet,
		// publish to a Queue, query a D1 Database, and much more.
		//
		// We'll keep it simple and make an API call to a Cloudflare API:

		//KIẾM TIỀN - Airdrop & Retroactive
		let arUrl = 'https://marginatm.com/menu/airdrop-&-retroactive'
		//KIẾM TIỀN - GameFi
		let gameFiUrl = 'https://marginatm.com/menu/gamefi'

		//TIN TỨC CRYPTO - Tin Tức Bitcoin
		let tintucBitcoinUrl = 'https://marginatm.com/menu/tin-tuc-bitcoin'
		//TIN TỨC CRYPTO - Tin Tức Thị Trường
		let tintucthitruongUrl = 'https://marginatm.com/menu/tin-tuc-thi-truong'
		//TIN TỨC CRYPTO - Tin Tức Altcoin
		let tintucAltcoin = 'https://marginatm.com/menu/tin-tuc-altcoin'

		//ATM ANALYTICS - Phân Tích Bitcoin
		let phantichBtcUrl = 'https://marginatm.com/menu/phan-tich-bitcoin'
		//ATM ANALYTICS - Phân Tích ETH
		let phantichEthUrl = 'https://marginatm.com/menu/phan-tich-eth'
		//ATM ANALYTICS - Phân Tích AltCoin
		let phantichAltcoinUrl = 'https://marginatm.com/menu/phan-tich-altcoin'
		//ATM ANALYTICS - Market
		let marketUrl = 'https://marginatm.com/menu/market'

		//KIẾN THỨC CRYPTO - Thuật Ngữ Cơ Bản
		let thuatngucobanUrl = 'https://marginatm.com/menu/thuat-ngu-co-ban'
		//KIẾN THỨC CRYPTO - Kiến Thức Tổng Hợp
		let kienthuctonghopUrl = 'https://marginatm.com/menu/kien-thuc-tong-hop'
		//KIẾN THỨC CRYPTO - Kinh Nghiệm Đầu Tư
		let kinhnghiemdautuUrl = 'https://marginatm.com/menu/kinh-nghiem-dau-tu'
		//KIẾN THỨC CRYPTO - Sàn Giao Dịch
		let sangiaodichUrl = 'https://marginatm.com/menu/san-giao-dich'
		//KIẾN THỨC CRYPTO - Công Cụ Đầu Tư
		let congcudautuUrl = 'https://marginatm.com/menu/cong-cu-dau-tu'
		//KIẾN THỨC CRYPTO - Coin & Token
		let coinandtokenUrl = 'https://marginatm.com/menu/coin-&-token'

		//HỌC PTKT - Phân Tích Cơ Bản
		let phantichcobanUrl = 'https://marginatm.com/menu/phan-tich-co-ban'
		//HỌC PTKT - Chỉ Báo Kỹ Thuật
		let chibaokythuatUrl = 'https://marginatm.com/menu/chi-bao-ky-thuat'
		//HỌC PTKT - Nến & PriceAction
		let priceAction = 'https://marginatm.com/menu/nen-&-price-action'
		//HỌC PTKT - Mô Hình Giá
		let mohinhgiaUrl = 'https://marginatm.com/menu/mo-hinh-gia'

		let resp = await fetch('https://marginatm.com/menu/kiem-tien');
		let content = await resp.text()
		let wasSuccessful = resp.ok ? 'success' : 'fail';
		const $ = cheerio.load(content)
		const pageTitle = $('title').text();
		// You could store this result in KV, write to a D1 Database, or publish to a Queue.
		// In this template, we'll just log the result:
		if (wasSuccessful) console.log(pageTitle);
	},
};
