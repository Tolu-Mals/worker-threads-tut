const { Worker, isMainThread, parentPort } = require('worker_threads');

/**
 * We use this to check if we're already in a worker thread,
 * without this check, we would keep creating worker threads
 * in an infinite loop.
 */
if(isMainThread){
  const worker = new Worker(__filename);
  worker.on('message', msg => { console.log(msg) })
}

//Code that runs when we're in the worker thread
else {
  parentPort.postMessage("Hello World!");
}