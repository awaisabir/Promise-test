/**
// non-promise example
function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
};

getTempCallback('Philidelphia', function(err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

// promise example
function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Philidelphia').then(function(temp) {
  console.log('promise success', temp);
}, function(err) {
  console.log('promise error', err);
});
**/

// Promise sums

function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number')
      resolve(a+b);
    else {
      reject('A and/or B are not numbers');
    }
  });
};


addPromise(2,3).then(function(sum) {
  console.log('Success : ' + sum);
}, function(err) {
    console.log('Failure', err);
});

addPromise('awais',3).then(function(sum) {
  console.log('Success : ' + sum);
}, function(err) {
    console.log('Failure', err);
})
