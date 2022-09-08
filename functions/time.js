export const onRequest = () => {
  return new Response({ time: new Date().toISOString()})
}
