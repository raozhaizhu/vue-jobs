import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    // 尝试从KV存储获取静态资产
    return await getAssetFromKV(event)
  } catch (e) {
    // 如果资源不存在，返回index.html（用于SPA路由）
    let pathname = new URL(event.request.url).pathname
    return await getAssetFromKV(event, {
      mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req)
    })
  }
}
