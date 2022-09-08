export const onRequest = () => {
  return new Response(JSON.stringify({ time: new Date().toISOString()}))
}
