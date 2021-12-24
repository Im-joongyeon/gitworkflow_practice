function solution(participant,completion) {

  for (let i = 0; i < participant.length; i++) {
    let notComplet = true;

    for (let j = 0; j < completion.length; i++) {
      if (completion[j] === participant[i]) {
        notComplet === false;
        
      }
    }

    if (notComplet) {
      return participant[i];
    }

  }
}
participant = ["marina","josipa","nikola","vinko","filipa"];
completion = ["josipa","filipa","marina","nikola"];
solution(participant,completion);

/*function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

console.log(isPrime())
const rotatedArraySearch = function (rotated,target) {
  // TODO : 여기에 코드를 작성합니다.
  //배열ㅡ rotated //
  //정렬해라 - 반씩 나눠가며 가장 작은 수  또ㄴ 가장 큰  수ㄹ 찾ㅏ라
   //같은 숫자의 인덱스를 찾아라.
  let right = rotated.length-1;
  let left = 0;

  while(left <= right){
    let mid = parseInt((left + right) / 2)

    if(rotated[mid]===target) {
      return mid;
    }

    if(rotated[left] < rotated[mid]) { // 정배열
      //타겟이 미드 왼쪽이냐 미드 오른쪽이냐
      if(target < rotated[mid] && rotated[left] <= target) { //1234 5 6789
        right = mid - 1; //미드 왼쪽이면 1~5를 검색해야하기때문에 right를 땡겨서 left는 그대로, mid는 -1상태로만들어준다 [1~4] => [1~3]검색
      } else {
        left = mid + 1; // 미드 오른쪽이면 6~9를 검색해야되는데, left를 땡기면 right는그대로,mid는 +1로만들어줘서 [6~9] => [7~9] 이렇게
      }
    } else { //역배열  
      //타겟이 미드 오른쪽이냐 왼쪽이냐
      if(target > rotated[mid] && rotated[right] >= target) { // 4567 8 9123
        left = mid + 1; //  미드보다 크면 오른쪽에위치하므로 left를 줄여서 오른쪽구간 전구간을 검색하게한다. 
      }
      else { //미드보다 작으면 왼쪽에위치하므로 right 줄여서 왼쪽구간 전구간을 검색하게한다.
        right = mid - 1 
      }
    }


  }
   return -1
};
let output = rotatedArraySearch([4,5,6,0,1,2,3],2);
console.log(output); // --> 5



const insertionSort = function (arr,callback = (a,b) => {
  if (a > b) return -1
  else return 1
}) {
  // TODO: 여기에 코드를 작성합니다.
  let p = 0;

  while (1) {
    let notChange = true;

    for (let i = 0; i < arr.length; i++) {
      if(callback(arr[i],arr[i+1]) === -1) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        notChange = false
      }
    }

    if (p === arr.length) {
      p = 0;
    } else {
      p++
    }

    if (notChange) {
      break
    }
 }

  return arr
}

let output = insertionSort([5,4,3,2,1]);
console.log(output); // --> [1, 3, 21]

 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = [node];
  let result = [];

  // console.log(node.children)

  const baseCode = (child) => {
   //root는 객체
    for(let i=0; i<child.length; i++) {
    result.push(child[i].value);
    }

    if(child[0].children.length !==0) {
      return baseCode(child[0].children);
    }
  }
  baseCode(arr);
  return result;
};


let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
// console.log(output); // --> [1, 2, 3, 4, 5]

const binarySearch = function (arr,target) {
  // TODO : 여기에 코드를 작성합니다.
  if (target === undefined) {
    return -1
  }
  // 반접어서 업다운
 let left = 0;
 let right = arr.length-1

  while (left<=right) {
   let mid = parseInt(left+right);
    if (arr[mid] === target) {
      return mid;
    }
    
   if(arr[mid] < target){
    right = mid-1;
   }
   else if(arr[mid] > target) {
    left = mid+1;
   }
  
   return -1
};

let output = binarySearch([0,1,2,3,4,5,6,40,60,70,80,100],40);
console.log(output); // --> 2

function power(base,exponent) {
  // todo: 여기에 코드를 작성합니다.
  if (exponent === 0) return 1;
  const half = Math.floor(exponent/2);
  const temp = power(base,half);
  const result = (temp * temp) % 94906249;

  if (exponent % 2 === 1) return (result * base % 94906249);
  else return result;
}
let output = power(4,15);
console.log(output); // --> 19334827


const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  //true true true or true false false
  let plus = [];
  let minus = [];
  let max1 = 0;
  let max2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      plus.push(arr[i])
    }
    else {
      minus.push(arr[i]);
    }
  }
  plus.sort((a,b) => b - a);
  minus.sort((a,b) => a - b);
console.log(minus)
console.log(plus)
  max1 = plus[0] * plus[1] * plus[2]
  max2 = plus[0] * minus[0] * minus[1]
  
  if(minus.length>0 && plus.length>0){
    if(max1>max2) {
      return max1
    } else {
      return max2;
    }
  }
  else if(plus.length < 3 && plus.length > 0) {
    return max2;
  }
  else if(minus.length===arr.length){
    let max3 = minus[minus.length - 1] * minus[minus.length - 2] * minus[minus.length - 3]
    return max3
  }
  else {
    max1 = plus[0] * plus[1] * plus[2]
    return max1
  }
}
let output = largestProductOfThree([-50,-20,-30,-5,40]);
console.log(output); // --> 42 (= 2 * 3 * 7)




let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let [head,...tail] = node;
  let result=[];

  result.push(head.value);

  if(head.children) {
    return dfs([head.value,...tail]);
  }
  else {
    return dfs(tail);
  }

};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let left3 = leaf1.addChild(new Node(6));
// console.log(root.children[0].children[0].children)
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = [1,2,3];

  if (n < 4) { return n; }
  else {
    for (let i = 3; i < n; i++) {
      arr[i] = arr[i - 2] + arr[i - 1]
      console.log(arr[i]);
    }
  }
  return arr[arr.length-1]
};


console.log(tiling(9));
const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let temp;
  for (let i = arr.length; i > 0; i--) {

    for (j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {        //a-b >0 자리바꿈
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }

    }
  }
  return arr;
}
let output = bubbleSort([70,80,2,1,3,10,102,1]);
console.log(output); // --> [1, 2, 3]
function movingStuff(stuff,limit) {
  // TODO: 여기에 코드를 작성합니다.
  stuff.sort((a,b) => a - b);
  let left = 0;
  let right = stuff.length;
  let count = 0;
  console.log(stuff)
  while (left < right) {
    if (stuff[left] + stuff[right] > limit) {
      console.log(stuff[left])
      console.log(stuff[right])
      right--
      count++
    }
    else if (stuff[left] + stuff[right] <= limit){
      left++;
      right--;
      count++;
    }
  }
  return count;
}
let output = movingStuff([96,176,104,210,112,118,153,121,127,132,139,142,124,155,168,178,189,193,209],220);
console.log(output); // 3
///////////////////////////////////////////////////////////
const isSubsetOf = function (base,sample) {
  // TODO: 여기에 코드를 작성합니다.
  base.sort((a,b) => a - b)
  sample.sort((a,b) => a - b)
  //정렬 후
  let result = false
  p1 = 0;
  for (let i = 0; i < base.length; i++) {
    if (sample[p1] === base[i]) {
      result = true;
      p1++;
      console.log(sample[p1], base[i])
    }
  
    else if(p1>sample.length ) {
    return result;
  }
    else if(sample[p1] < base[i]){
      result = false;
    }
  }
u

  return result
}
let base = [1,2,3,4,5];
base = [10,99,123,7];
// let sample = [1,3];
// let output = isSubsetOf(base,sample);
// console.log(output);

output = isSubsetOf(base,sample);
console.log(output); // --> false
*/