function DummyPromise() {}

DummyPromise.prototype.then = function () { return this }
DummyPromise.prototype.catch = () => {}


export default DummyPromise
