let handleError = null
function callWithErrorHandling(fn) {
  try { 
    fn && fn()
  } catch(e) {
    handleError && handleError(e)
  }
}
export default {
  foo(fn){
    callWithErrorHandling(fn)
  },
  bar(fn){
    callWithErrorHandling(fn)
  },
  registerErrorHandling(fn) {
    handleError = fn
  }
}