// Creates lots of objects to consume additional memory, and lost references to them, to speed up GC call
async function createLotsOfGarbageAndPause() {
    for (let i = 0; i < 1000; i++) {
      const a = new Array(100000);
    }
    await tick();
  }
  // Creates a separate Macro Task, so that it increases chances to have GC performed
  function tick() {
    return new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  }

console.log("FinalizationRegistry example started");
// Create a strong ref to the object
let strongRef = {
  field:
    "Once this object is garbage collected (finalized), we will see it in the console"
};

const weakRef = new WeakRef(strongRef);
const time = performance.now();
let collected = false;
// Create a FinalizationRegistry (observer);
const registry = new FinalizationRegistry((value) => {
  // weakRef.deref should be undefined here
  console.log(
    'The object with field: ' + value + ' was just finalized. TimeConsumed: ' + (
      performance.now() - time
    ).toFixed() + '. WeakRef: ' + weakRef.deref()
  );
  collected = true;
});

// Register our object
registry.register(strongRef, strongRef.field);

// remove all StrongRefs from the object
strongRef = null;

// Wait!
async function test(){
    while (collected !== true) {
        await createLotsOfGarbageAndPause();
    }
}

test()

console.log("FinalizationRegistry example completed");
// !!!!!! SETUP LATEST NODE VERSION before running the code snippet !!!!