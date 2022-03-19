
var q_no = 0;

// alert("📝 Complete Code Gaps\n\n 🔖Languages:\n ⚡Python\n ⚡C\n\nNo Time Limit 🙂\n\nJust for Practice 👨‍💻");
var C_questions = [`
<h1 class="code-name">Number Swapping</h1>
<div class="code-ground">
<div class="code-line">#include&lt;stdio.h&gt;</div>
<div class="code-line">int main()</div>
<div class="code-line">{</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int a = 10, b = 20, temp;</div>
<br>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp = <input type="text" class="code-input" id="q1-i1">;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = <input type="text" class="code-input" id="q1-i2">;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" id="q1-i3"> = <input type="text" class="code-input" id="q1-i4">;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0;</div>
<div class="code-line">}</div>
</div>`, 

`<h1 class="code-name">Fibonacci Function</h1>
<div class="code-ground">
    <div class="code-line">int fib(int n)</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(n<=2)</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" id="q2-i1">;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return fib(<input type="text" class="code-input" id="q2-i2">) + fib(<input type="text" class="code-input" id="q2-i3">);</div>
    <div class="code-line">}</div>
</div>`,

`<h1 class="code-name">Factorial Function</h1>

<div class="code-ground">
    <div class="code-line">int fact(int n)</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(n<=1)</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" id="q3-i1">;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" id="q3-i2"> * fact(<input type="text" class="code-input" id="q3-i3">)</div>
    <div class="code-line">}</div>
</div>`,

`<h1 class="code-name">Prime Number</h1>
<div class="code-ground">
    <div class="code-line">int isPrime(int n)</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int i;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(i=2;i<=n/2; i++)</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(n%i <input type="text" class="code-input" style="width: 70px;" id="q4-i1"> 0)</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 50px;" id="q4-i2">;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 50px;" id="q4-i3">;</div>
    <div class="code-line">}</div>
</div>`,


`<h1 class="code-name">Linear Search</h1>
<div class="code-ground">
    <div class="code-line">int linearSearch(int* a, int n, int key)</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int i=0; i&lt;n ; i++) </div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(*(a + <input type="text" class="code-input" style="width: 60px;" id="q5-i1">) == <input type="text" class="code-input" style="width: 60px;" id="q5-i2">)</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 60px;" id="q5-i3"> ;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 60px;" id="q5-i4"v> ;</div>
    <div class="code-line">}</div>
</div>`,

`<h1 class="code-name">Binary Search</h1>
<div class="code-ground">
    <div class="code-line">int binarySearch(int* a, int n, int key)</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int start = 0;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int end = <input type="text" class="code-input" style="width: 70px;" id="q6-i1">, mid;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while(start <input type="text" class="code-input" style="width: 60px;" id="q6-i2"> end) {</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mid = (start + end)/2</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(num <input type="text" class="code-input" style="width: 60px;" id="q6-i3"> a[mid])</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start = mid + 1;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else if(num <input type="text" class="code-input" style="width: 60px;" id="q6-i4"> a[mid])</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end = mid - 1;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 70px;" id="q6-i5"></div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 60px;" id="q6-i6"> ;</div>
    <div class="code-line">}</div>
</div>`,

`
<h1 class="code-name">Leap Year</h1>
<div class="code-ground">
    <div class="code-line">#include&lt;stdio.h&gt;</div>
    <div class="code-line">int main()</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int y = 1999;</div>
    <br>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (y%4 == 0) { </div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if(y%<input type="text" class="code-input" id="q7-i1"> == 0) { </div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if(y%<input type="text" class="code-input" id="q7-i2"> == 0)</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; printf("Leap Year");</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; else</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; printf("Not Leap Year");</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; else</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; printf("Leap Year");</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" id="q7-i3">("Not a Leap Year")</div>
        
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0;</div>
    <div class="code-line">}</div>
</div>`,

` <h1 class="code-name">Largest Element</h1>
<div class="code-ground">
    <div class="code-line">int largestElement(int* a, int n)</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int max = a[0];</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int i=1 ; i&lt;n ; i++) {</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(a[i] <input type="text" class="code-input" style="width: 60px;" id="q8-i1"> <input type="text" class="code-input" style="width: 80px;" id="q8-i2"> )</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max = <input type="text" class="code-input" style="width: 60px;" id="q8-i3"> ;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 70px;" id="q8-i4"> ;</div>
    <div class="code-line">}</div>
</div>`,

`<h1 class="code-name">Sum of Digit</h1>
<div class="code-ground">
    <div class="code-line">int sumOfDigit(int n)</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int sum = <input type="text" class="code-input" style="width: 50px;" id="q9-i1">;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int digit;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while(n > 0) {</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digit = n <input type="text" class="code-input" style="width: 50px;" id="q9-i2"> 10;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 70px;" id="q9-i3"> += digit</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n = n / <input type="text" class="code-input" style="width: 70px;" id="q9-i4"></div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return sum;</div>
    <div class="code-line">}</div>
</div>`,


`<h1 class="code-name">Number Palindrome</h1>

<div class="code-ground">
    <div class="code-line">int isPalindrome(int num)</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int temp = num; rem, rev_num = 0</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while(num > 0)</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rem  = <input type="text" class="code-input" style="width: 80px;" id="q10-i1"> % 10;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rev_num = rev_num * <input type="text" class="code-input" style="width: 70px;" id="q10-i2"> + <input type="text" class="code-input" style="width: 70px;" id="q10-i3">;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp = temp / <input type="text" class="code-input" style="width: 70px;" id="q10-i4"></div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(rev_num == <input type="text" class="code-input" style="width: 70px;" id="q10-i5">)</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0;</div>
    <div class="code-line">}</div>
</div>`];

var C_answers = {
    1 : [4, 'a', 'b', 'b', 'temp'],
    2 : [3, '1', 'n-1', 'n-2'],
    3 : [3, '1', 'n', 'n-1'],
    4 : [3, '==', '1', '0'],
    5 : [4, 'i', 'key', 'i', '-1'],
    6 : [6, 'n-1', '<=', '>', '<', 'mid', '-1'],
    7 : [3, '100', '400', 'printf'],
    8 : [4, '>', 'max', 'a[i]', 'max'],
    9 : [4, '0', '%', 'sum', '10'],
    10 : [5, 'num', '10', 'rem', '10', 'num']
};

var Python_questions = [
    `<h1 class="code-name">Reverse A Number</h1>
    <div class="code-ground">
        <div class="code-line">def num_reverse(num):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;rev = 0</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;while(num != <input type="text" class="code-input" style="width: 50px;" id="q1-i1"> ):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rev = rev * <input type="text" class="code-input" style="width: 50px;" id="q1-i2"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rev = <input type="text" class="code-input" style="width: 50px;" id="q1-i3"> + num % <input type="text" class="code-input" width="50px" id="q1-i4"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num = num // 10</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return rev</div>
    </div>`,

    `<h1 class="code-name">Fibonacci Series</h1>
    <div class="code-ground">
        <div class="code-line">n = int(input())</div>
        <div class="code-line">f1, f2 = <input type="text" class="code-input" style="width: 50px;" id="q2-i1"> <input type="text" class="code-input" style="width: 50px;" id="q2-i2"></div>
        <div class="code-line">f3 = f1 + f2</div>
        <div class="code-line">print(f1)</div>
        <div class="code-line">print(f2)</div>
        <div class="code-line">for i in range(<input type="text" class="code-input" style="width: 50px;" id="q2-i3">, n+1):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;print(f3)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;f1 = <input type="text" class="code-input" style="width: 50px;" id="q2-i4"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 50px;" id="q2-i5"> = f3</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;f3 = f1  + <input type="text" class="code-input" style="width: 50px;" id="q2-i6"></div>
    </div>`,

    `<h1 class="code-name">Factorial</h1>
    <div class="code-ground">
        <div class="code-line">a = int(input())</div>
        <div class="code-line">fact =  1</div>
        <div class="code-line">for i in range(<input type="text" class="code-input" style="width: 50px;" id="q3-i1">, a+1):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;fact = <input type="text" class="code-input" style="width: 100px;" id="q3-i2"> * i</div>
        <div class="code-line">print(fact)</div>
    </div>`,

    `    <h1 class="code-name">Decimal To Binary</h1>
    <div class="code-ground">
        <div class="code-line">def binary(n):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if(n>=1):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;binary(n <input type="text" class="code-input" style="width: 50px;"  id="q4-i1"> 2)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(n%<input type="text" class="code-input" style="width: 50px;" id="q4-i2">, end=" ")</div>
    </div>`,

    `
    <h1 class="code-name">Binary Search</h1>
    <div class="code-ground">
        <div class="code-line">def binary_search(a, key):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;n = len(a)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;start = 0</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;end = <input type="text" class="code-input" style="width: 70px;"  id="q5-i1"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;while start &lt;= end:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mid = (start + end)<input type="text" class="code-input" style="width: 50px;"  id="q5-i2">2</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if a[mid] > key:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 80px;" id="q5-i3"> = <input type="text" class="code-input" style="width: 80px;" id="q5-i4"> - 1</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if a[mid] &lt; key:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 80px;" id="q5-i5"> = <input type="text" class="code-input" style="width: 80px;" id="q5-i6"> + 1</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return mid;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return -1</div>
    </div>`,

    `<h1 class="code-name">GCD of Two Number</h1>
    <div class="code-ground">
        <div class="code-line">def gcd(a, b):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for i in range(1, min( <input type="text" class="code-input" style="width: 50px;"  id="q6-i1">, <input type="text" class="code-input" style="width: 50px;"  id="q6-i2"> )+1):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if a%i==0 <input type="text" class="code-input" style="width: 80px;"  id="q6-i3"> b%i==0:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gcd = i</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return gcd;</div>
    </div>`,

    `    <h1 class="code-name">LCM of Two Number</h1>
    <div class="code-ground">
        <div class="code-line">def lcm(x, y):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if x > y : z = x</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;else : z = y</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;while True:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if <input type="text" class="code-input" style="width: 50px;"  id="q7-i1">%x==0 and z%<input type="text" class="code-input" style="width: 50px;"  id="q7-i2"> == 0:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lcm = z</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 100px;"  id="q7-i3"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z = z + 1</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 70px;"  id="q7-i4"></div>
    </div>`,

    `<h1 class="code-name">String functions</h1>
    <div class="code-ground">
        <div class="code-line">s = input()</div>
        <div class="code-line"><em>#To Upper</em></div>
        <div class="code-line">print(a.<input type="text" class="code-input" style="width: 120px;"  id="q8-i1">)</div>
        <div class="code-line"><em>#To Lower</em></div>
        <div class="code-line">print(a.<input type="text" class="code-input" style="width: 120px;"  id="q8-i2">)</div>
        <div class="code-line"><em>#To Swapcase</em></div>
        <div class="code-line">print(a.<input type="text" class="code-input" style="width: 140px;"  id="q8-i3">)</div>
        <div class="code-line"><em>#To Title</em></div>
        <div class="code-line">print(a.<input type="text" class="code-input" style="width: 120px;"  id="q8-i4">)</div>
        <div class="code-line"><em>#To Capitalize</em></div>
        <div class="code-line">print(a.<input type="text" class="code-input" style="width: 140px;"  id="q8-i5">)</div>
    </div>`,

    `<h1 class="code-name">Remove Duplicates</h1>
    <div class="code-ground">
        <div class="code-line">def rem_duplicate(lst):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;unique = []</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for x in lst:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if x <input type="text" class="code-input" style="width: 70px;"  id="q9-i1"> in <input type="text" class="code-input" style="width: 100px;"  id="q9-i2">:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unique.<input type="text" class="code-input" style="width: 120px;"  id="q9-i3">(x)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return unique</div>
    </div>`,

    `<h1 class="code-name">Factors of a Number</h1>
    <div class="code-ground">
        <div class="code-line">def factors(a):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for i in range(1, <input type="text" class="code-input" style="width: 70px;"  id="q10-i1">):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if a <input type="text" class="code-input" style="width: 50px;"  id="q10-i2"> i == 0:</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(i)</div>
    </div>`
];

var Python_answers = {
    1 : [4, '0', '10', 'rev', '10'],
    2 : [6, '0', '1', '3', 'f2', 'f2', 'f2'],
    3 : [2, '1', 'fact'],
    4 : [2, '//', '2'],
    5 : [6, 'n-1', '//', 'end', 'mid', 'start', 'mid'],
    6 : [3, 'a', 'b', 'and'],
    7 : [4, 'z', 'y', 'break', 'lcm'],
    8 : [5, 'upper()', 'lower()', 'swapcase()', 'title()', 'capitalize()'],
    9 : [3, 'not', 'unique', 'append'],
   10 : [2, 'a+1', '%'] 
}

var Java_questions = [
    //JAVA_Question: 01
    `<h1 class="code-name">Number is Prime or Not</h1>
    <div class="code-ground">
        <div class="code-line">public stactic String primeOrNot(int num) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if(num <input type="text" class="code-input" style="width: 60px;"  id="q1-i1"> 0)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "not valid"</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if(num == 0 || num == <input type="text" class="code-input" style="width: 60px;"  id="q1-i2">)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "not Prime"</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if(num == 2 || num == <input type="text" class="code-input" style="width: 60px;"  id="q1-i3">)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Prime Number"</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if((num * num - <input type="text" class="code-input" style="width: 60px;"  id="q1-i4">) % 24) == 0</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Prime Number"</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return "not prime"</div>
    </div>`,

    //JAVA_Question: 02
    `<h1 class="code-name">Integer Palindrome</h1>
    <div class="code-ground">
        <div class="code-line">public static boolean isPalindrome(int num) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int pal = <input type="text" class="code-input" style="width: 80px;"  id="q2-i1"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int rev = 0</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;while(pal != <input type="text" class="code-input" style="width: 80px;"  id="q2-i2">) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int rem = pal % <input type="text" class="code-input" style="width: 80px;"  id="q2-i3">;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rev = rev * 10 + <input type="text" class="code-input" style="width: 80px;"  id="q2-i4">;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pal = pal/10;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if (num == <input type="text" class="code-input" style="width: 80px;"  id="q2-i5">)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return false;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    </div>`,

    //JAVA_Question: 03
    `<h1 class="code-name">Average Value</h1>
    <div class="code-ground">
        <div class="code-line">public static double average(int [] arr) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int sum = 0</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for( int i=0 ; i&lt;arr.<input type="text" class="code-input" style="width: 80px;"  id="q3-i1"> ; i++)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum += arr[<input type="text" class="code-input" style="width: 100px;"  id="q3-i2">];</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 80px;"  id="q3-i3"> avg = (double)sum / <input type="text" class="code-input" style="width: 80px;"  id="q3-i4">.length</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return avg;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    </div>`,

    //JAVA_Question: 04
    `<h1 class="code-name">Find common elements</h1>
    <div class="code-ground">
        <div class="code-line">public class Main {</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;public <input type="text" class="code-input" style="width: 90px;"  id="q4-i1"> void main(String[] args) {</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int[] a1 = {1, 2, 5, 5};</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int[] a2 = {1, 0, 2, 15};</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i &lt; a1.length; i++)</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int j = <input type="text" class="code-input" style="width: 60px;"  id="q4-i2">; j &lt; a2.length; j++)</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(a1[i] == (a2[j]))</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.<input type="text" class="code-input" style="width: 80px;"  id="q4-i3">.print((a1[i]) + " ");</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div class="code-line">}</div>                  
    </div>`,

    //JAVA_Question: 05
    `<h1 class="code-name">Concatenate Two Strings</h1>
    <div class="code-ground">
        <div class="code-line">public class Main {</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;public static void main(<input type="text" class="code-input" style="width: 100px;"  id="q5-i1">[] args) {</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String str1 = "Java";</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String str2 = " Questions";</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String str3 = str1.<input type="text" class="code-input" style="width: 100px;"  id="q5-i2">(str2);</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(str3);</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div class="code-line">}</div>                           
    </div>`,

    //JAVA_Question: 06
    `<h1 class="code-name">Reverse A String</h1>
    <div class="code-ground">
        <div class="code-line">void reverseString(String str1) {</div>
        <div class="code-line">&nbsp;&nbsp;if ((str1 == null) || (str1.<input type="text" class="code-input" style="width: 100px;"  id="q6-i1">() &lt;= 1))</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;System.out.println(str1);</div>
        <div class="code-line">&nbsp;&nbsp;else {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;System.out.print(str1.<input type="text" class="code-input" style="width: 90px;"  id="q6-i2">(str1.length() - 1));</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;reverseString(str1.substring(0, str1.length() - 1));</div>
        <div class="code-line">&nbsp;&nbsp;}</div>
        <div class="code-line"><input type="text" class="code-input" style="width: 50px;"  id="q6-i3"></div>
    </div>`,

    //JAVA_Question: 07
    `<h1 class="code-name">Number Palindrome</h1>
    <div class="code-ground">
        <div class="code-line">public <input type="text" class="code-input" style="width: 80px;"  id="q7-i1"> Main</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;public static void <input type="text" class="code-input" style="width: 90px;"  id="q7-i2"> (String[] args) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int n = 101, sum = 0;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int r, temp = n;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;while (n > 0) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;	r = <input type="text" class="code-input" style="width: 50px;"  id="q7-i3"> % 10;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;	sum = (sum * 10) + r;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;	n = n / 10;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if (temp == <input type="text" class="code-input" style="width: 50px;"  id="q7-i4">)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println ("Palindrome");</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;else</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println ("Not a palindrome");</div>
        <div class="code-line">&nbsp;&nbsp;}</div>
        <div class="code-line">}</div>
    </div>`,

    //JAVA_Question: 08
    `<h1 class="code-name">Bubble Sort</h1>
    <div class="code-ground">
        <div class="code-line"><input type="text" class="code-input" style="width: 90px;"  id="q8-i1"> bubbleSort(int nums[])</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int n = nums.length;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i &lt; n-1; i++)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 70px;"  id="q8-i2"> (int j = 0; j &lt; n-i-1; j++)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (nums[j] > nums[j+1]) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int temp = nums[j];</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[j] = nums[j+1];</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[<input type="text" class="code-input" style="width: 70px;"  id="q8-i3">] = temp;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div class="code-line">}</div>
    </div>`,

    //JAVA_Question: 09
    `<h1 class="code-name">Linear Search</h1>
    <div class="code-ground">
        <div class="code-line">public static int L_search(int [] nums,int key)</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for(int i=0;i &lt; nums.length;i++) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(nums[<input type="text" class="code-input" style="width: 50px;"  id="q9-i1">]==key)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 100px;"  id="q9-i2"> i;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return -1;</div>
        <div class="code-line">}</div>
    </div>`,

    //JAVA_Question: 10
    `<h1 class="code-name">Remove 'White'</h1>
    <div class="code-ground">
        <div class="code-line">import java.<input type="text" class="code-input" style="width: 80px;"  id="q10-i1">.*;</div>
        <div class="code-line">&nbsp;&nbsp;public class Test {</div>
        <div class="code-line">&nbsp;&nbsp;public static void main(String[] args) {</div>
        <div class="code-line">&nbsp;&nbsp;List<String> colors = <input type="text" class="code-input" style="width: 90px;"  id="q10-i2"> ArrayList<String>();</div>
        <div class="code-line">&nbsp;&nbsp;colors.add("Red");</div>
        <div class="code-line">&nbsp;&nbsp;colors.add("White");</div>
        <div class="code-line">&nbsp;&nbsp;colors.add("Black");</div>
        <div class="code-line">&nbsp;&nbsp;list_Strings.<input type="text" class="code-input" style="width: 110px;"  id="q10-i3">(<input type="text" class="code-input" style="width: 50px;"  id="q10-i4">);</div>
        <div class="code-line">&nbsp;&nbsp;System.out.println(colors);</div>
        <div class="code-line">&nbsp;}</div>
        <div class="code-line">}</div>
    </div>`
];

var Java_answers = {
    1: [4, '<', '1', '3', '1'],
    2: [5, 'num', '0', '10', 'rem', 'rev'],
    3: [4, 'length', 'i', 'double', 'arr'],
    4: [3, 'static', '0', 'out'],
    5: [2, 'String', 'concat'],
    6: [3, 'length', 'charAt', '}'],
    7: [4, 'class', 'main', 'n', 'sum'],
    8: [3, 'void', 'for', 'j+1'],
    9: [2, 'i', 'return'],
   10: [4, 'util', 'new', 'remove', '1']
};


var Cpp_questions = [
    //Cpp_Question: 01
    `<h1 class="code-name">Exchange First and Last char</h1>
    <div class="code-ground">
        <div class="code-line">string exchange(string str)</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;string a = str.substr(str.length() - 1);</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;string b = str.<input type="text" class="code-input" style="width: 100px;" id="q1-i1">(1, str.length() - 2);</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;string c = str.substr(<input type="text" class="code-input" style="width: 50px;" id="q1-i2">, 1);</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if (str.length() > 1)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return  a<input type="text" class="code-input" style="width: 50px;" id="q1-i3">b+c;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;else</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return str;</div>
        <div class="code-line">}</div>
    </div>`,

    //Cpp_Question: 02
    `<h1 class="code-name">Largest Among three Numbers</h1>
    <div class="code-ground">
        <div class="code-line">int maxNum(int x, int y, int z)</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int result = max(<input type="text" class="code-input" style="width: 50px;" id="q2-i1">, <input type="text" class="code-input" style="width: 100px;" id="q2-i2">(y, z));</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return result;</div>
        <div class="code-line">}</div>
    </div>`,

    //Cpp_Questinos: 03
    `<h1 class="code-name">Same Last Digit</h1>
    <div class="code-ground">
        <div class="code-line">bool islastDigitSame(int x, int y)</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 90px;" id="q3-i1">(x % <input type="text" class="code-input" style="width: 50px;" id="q3-i2">) == abs(y % <input type="text" class="code-input" style="width: 50px;" id="q3-i3">);</div>
        <div class="code-line">}</div>
    </div>`,

    //Cpp_Questions: 04
    `<h1 class="code-name">Reverse Array</h1>
    <div class="code-ground">
        <div class="code-line">void rvereseArray(int arr[], int n)</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int temp;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int start = 0, end = n-1;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;while (start &lt; <input type="text" class="code-input" style="width: 80px;" id="q4-i1">)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp = arr[start];  </div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[<input type="text" class="code-input" style="width: 100px;" id="q4-i2">] = arr[end];</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[end] = <input type="text" class="code-input" style="width: 100px;" id="q4-i3">;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start++;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end--;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}  </div>
        <div class="code-line">} </div>
    </div>`,

    //Cpp_Question: 05
    `<h1 class="code-name">Last Prime before NUM</h1>
<div class="code-ground">
    <div class="code-line">int lastPrime(int num) </div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int ctr = 0;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for (int n = num - 1; n >= <input type="text" class="code-input" style="width: 50px;" id="q5-i1">; n--)  {</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int m = <input type="text" class="code-input" style="width: 50px;" id="q5-i2">; m &lt; n; m++) {</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (n % m == 0)</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctr++;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (ctr == 0) {</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (n == <input type="text" class="code-input" style="width: 50px;" id="q5-i3">) {</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return NULL;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 50px;" id="q5-i4">;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctr = 0;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">}</div>
</div>`,

    //Cpp_Question: 06
    `<h1 class="code-name">Product of Digits</h1>
    <div class="code-ground">
        <div class="code-line">int digitProduct(int num)</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int prod = 1, i, r;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for(i=<input type="text" class="code-input" style="width: 100px;" id="q6-i1">; i>0 ; i=i/<input type="text" class="code-input" style="width: 70px;" id="q6-i2">) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;r = i % 10;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prod = prod*<input type="text" class="code-input" style="width: 60px;" id="q6-i3">;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return prod;</div>
        <div class="code-line">}</div>
    </div>`,

    //Cpp_Question: 07
    `<h1 class="code-name">Factors of a Number</h1>
    <div class="code-ground">
        <div class="code-line">#include &lt;iostream></div>
            <div class="code-line">using <input type="text" class="code-input" style="width: 140px;" id="q7-i1"> std;</div>
            <div class="code-line">int main()</div>
            <div class="code-line">{</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int num, i;</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 100px;" id="q7-i2"> >> num;</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for (i = 1; i &lt;= num; i++) {</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (num % <input type="text" class="code-input" style="width: 50px;" id="q7-i3"> == 0) </div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; " ";</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return 0;</div>
            <div class="code-line"><input type="text" class="code-input" style="width: 50px;" id="q7-i4"></div>            
    </div>`,

    //Cpp_Question: 08
    `<h1 class="code-name">Missing Number</h1>
    <div class="code-ground">
        <div class="code-line"><input type="text" class="code-input" style="width: 80px;" id="q8-i1"> missingNum(int a[], int n)</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int sum = (n*(n-1))/2;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;int Asum = 0;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for(int i=0 ; i &lt; n-1 ; i++) </div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 100px;" id="q8-i2"> += a[i];</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return (sum <input type="text" class="code-input" style="width: 50px;" id="q8-i3"> Asum);</div>
        <div class="code-line">}</div>      
    </div>`,

    //Cpp_Question: 09
    `<h1 class="code-name">Bubble Sort</h1>
    <div class="code-ground">
        <div class="code-line">void bubbleSort(int arr[], int n)</div>
        <div class="code-line">{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;int i, j;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;for (i = 0; i &lt;<input type="text" class="code-input" style="width: 100px;" id="q9-i1"> ; i++)        </div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (j = 0; j &lt; n-i-1; j++) </div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (arr[j] > arr[<input type="text" class="code-input" style="width: 100px;" id="q9-i2">]) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int temp = arr[j];</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j] = arr[j+1];</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[<input type="text" class="code-input" style="width: 100px;" id="q9-i3">] = temp;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div class="code-line">}</div>       
    </div>`,

    //Cpp_Question: 10
    `<h1 class="code-name">SwapCase String</h1>
    <div class="code-ground">
        <div class="code-line">string SwapCase(string text) {</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for (int x = 0; x < text.<input type="text" class="code-input" style="width: 120px;" id="q10-i1">(); x++){</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (isupper(<input type="text" class="code-input" style="width: 100px;" id="q10-i2">[x]))</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text[x] = tolower(text[x]);</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text[x] = <input type="text" class="code-input" style="width: 130px;" id="q10-i3">(text[x]); </div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return text;</div>
            <div class="code-line">}</div>
    </div>`
];

var Cpp_answers = {
    1: [3, 'substr', '0', '+'],
    2: [2, 'x', 'max'],
    3: [3, 'abs', 'x', '10'],
    4: [3, 'end', 'start', 'temp'],
    5: [4, '1', 'n', '1', 'n'],
    6: [3, 'num', '10', 'r'],
    7: [4, 'namespace', 'cin', 'i', '}'],
    8: [3, 'int', 'Asum', '-'],
    9: [3, 'n-1', 'j+1', 'j+1'],
   10: [3, 'length', 'text', 'toupper']
}

var JS_questions = [
    //JS_Question: 01
    `<h1 class="code-name">Get Extension</h1>
    <div class="code-ground">
        <div class="code-line">filename = "system.php"</div>
        <div class="code-line"><input type="text" class="code-input" style="width: 120px;" id="q1-i1">.log(filename.split('.').<input type="text" class="code-input" style="width: 80px;" id="q1-i2">());</div>
        <div class="code-line">filename = "abc.js"</div>
        <div class="code-line">console.log(filename.<input type="text" class="code-input" style="width: 100px;" id="q1-i3">('.').pop());</div>
    </div>`,

    //JS_Question : 02
    `<h1 class="code-name">Longest String from array</h1>
    <div class="code-ground">
    <div class="code-line">function longest_str_in_array(arra)</div>
    <div class="code-line">{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;var max_str = arra[0].<input type="text" class="code-input" style="width: 100px;" id="q2-i1">;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;var ans = arra[0];</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;for (var i = 1; i &lt; arra.length; i++) {</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var maxi = arra[i].length;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (maxi > <input type="text" class="code-input" style="width: 120px;" id="q2-i2">) {</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ans = arra[i];</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max_str = <input type="text" class="code-input" style="width: 90px;" id="q2-i3">;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return ans;</div>
    <div class="code-line">}</div>
    </div>`,

    //JS_Question: 03
    `<h1 class="code-name">Get Current Date</h1>
    <div class="code-ground">
        <div class="code-line">var today = <input type="text" class="code-input" style="width: 80px;" id="q3-i1"> Date();</div>
        <div class="code-line">var dd = today.getDate();</div>
        <div class="code-line">var mm = today.<input type="text" class="code-input" style="width: 100px;" id="q3-i2">()+1; </div>
        <div class="code-line">var yyyy = <input type="text" class="code-input" style="width: 100px;" id="q3-i3">.getFullYear();</div>
        <div class="code-line">if(dd<10) </div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;dd='0'+dd;</div>
        <div class="code-line">if(mm<10) </div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;mm='0'+mm;</div>
        <div class="code-line">today = mm+'/'+dd+'/'+yyyy;</div>
        <div class="code-line"><input type="text" class="code-input" style="width: 120px;" id="q3-i4">.log(today);</div>
        <div class="code-line"></div>
        <div class="code-line"></div>      
    </div>`,

    //JS_Question: 04
    `<h1 class="code-name">Hexadecimal Color Code</h1>
    <div class="code-ground">
        <div class="code-line"><input type="text" class="code-input" style="width: 100px;" id="q4-i1"> random_hex_color_code = () => {</div>
        <div class="code-line">&nbsp;&nbsp;let n = (<input type="text" class="code-input" style="width: 100px;" id="q4-i2">.random() * 0xfffff * 1000000);</div>
        <div class="code-line">&nbsp;&nbsp;n = n.toString(16);</div>
        <div class="code-line">&nbsp;&nbsp;return '#' <input type="text" class="code-input" style="width: 50px;" id="q4-i3"> n.slice(0, 6);</div>
        <div class="code-line">};</div>
        <div class="code-line">console.log(random_hex_color_code())</div>                
    </div>`,

    //JS_Question: 05
    `<h1 class="code-name">Generate a Random Integer</h1>
    <div class="code-ground">
        <div class="code-line">function Random(min, max) {</div>
        <div class="code-line">&nbsp;&nbsp;if (min==null <input type="text" class="code-input" style="width: 70px;" id="q5-i1"> max==null)</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return 0;    </div>
        <div class="code-line">&nbsp;&nbsp;if (max == null) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 100px;" id="q5-i2"> = min;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min = 0;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;let x = Math.random() * (max - min + 1);</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;let y = Math.floor(x);</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text" class="code-input" style="width: 100px;" id="q5-i3"> + y;</div>
        <div class="code-line">};</div>          
    </div>`,

    //Question: 06
    `<h1 class="code-name">Remove Duplicates</h1>
    <div class="code-ground">
        <div class="code-line">function removeDuplicates(num) {</div>
            <div class="code-line">&nbsp;&nbsp;var x,</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;len=num.length,</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;out=[],</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj={};</div>
            <div class="code-line">&nbsp;&nbsp;for (x=0; x &lt; len; x++)</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;obj[<input type="text" class="code-input" style="width: 90px;" id="q6-i1">[x]]=0;</div>
            <div class="code-line">&nbsp;&nbsp;for (x in obj) </div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;out.<input type="text" class="code-input" style="width: 100px;" id="q6-i2">(x);</div>
            <div class="code-line">&nbsp;&nbsp;return out;</div>
            <div class="code-line">}</div>              
    </div>`,

    //JS_Question: 07
    `<h1 class="code-name">Remove kth element</h1>
    <div class="code-ground">
        <div class="code-line">function remove_array_element(array, k) {</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;var index = array.indexOf(<input type="text" class="code-input" style="width: 70px;" id="q7-i1">);</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;if (index > -1) {</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array.splice(<input type="text" class="code-input" style="width: 100px;" id="q7-i2">, 1);</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;}</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;return array;</div>
            <div class="code-line">}</div>                                
    </div>`,

    //JS_Question: 08
    `        <h1 class="code-name">Popup Boxes</h1>
    <div class="code-ground">
        <div class="code-line"><input type="text" class="code-input" style="width: 100px;" id="q8-i1">("I'm an alert Box");</div>
        <div class="code-line">if(confirm("Press a Button!")) {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;txt = "You pressed OK!"</div>
        <div class="code-line">} <input type="text" class="code-input" style="width: 90px;" id="q8-i2"> {</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;txt = "You pressed cancel!"; </div>
        <div class="code-line">}</div>
        <div class="code-line">let p = <input type="text" class="code-input" style="width: 110px;" id="q8-i3">("Enter your name", "");</div>
        <div class="code-line">let text;</div>
        <div class="code-line">if (p == null || p == "") {</div>
        <div class="code-line">&nbsp;&nbsp;text = "User cancelled the prompt.";</div>
        <div class="code-line">} else {</div>
        <div class="code-line">&nbsp;&nbsp;text = "Hello " + p+"!";</div>
        <div class="code-line">}</div>                    
    </div>`,
    
    //JS_Question: 09
    `<h1 class="code-name">Set background color of Paragraph</h1>
    <div class="code-ground">
        <div class="code-line">function set_background() {</div>
            <div class="code-line">&nbsp;&nbsp;docBody = document.getElementsByTagName("body")[0];</div>
            <div class="code-line">&nbsp;&nbsp;myBodyElements = <input type="text" class="code-input" style="width: 120px;" id="q9-i1">.getElementsByTagName("<input type="text" class="code-input" style="width: 50px;" id="q9-i2">");</div>
            <div class="code-line">&nbsp;&nbsp;myp1 = myBodyElements[0];</div>
            <div class="code-line">&nbsp;&nbsp;myp1.style.background = "<input type="text" class="code-input" style="width: 90px;" id="q9-i3">(255,0,0)";</div>
            <div class="code-line">&nbsp;&nbsp;myp2 = myBodyElements[1];</div>
            <div class="code-line">&nbsp;&nbsp;myp2.style.background = "rgb(255,255,0)";</div>
            <div class="code-line">}</div>
            <div class="code-line"></div>                              
    </div>`,

    //JS_Question: 10
    `<h1 class="code-name">Binary Search</h1>
    <div class="code-ground">
        <div class="code-line">const binarySearch = (arr, item) <input type="text" class="code-input" style="width: 70px;" id="q10-i1"> {</div>
            <div class="code-line">&nbsp;&nbsp;let l = 0,</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;r = arr.length - 1;</div>
            <div class="code-line">&nbsp;&nbsp;while (l &lt;= r) {</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;const mid = Math.floor((l + r) / 2);</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;const guess = arr[mid];</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if (<input type="text" class="code-input" style="width: 90px;" id="q10-i2"> === item) return mid;</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;if (guess > item) r = mid - 1;</div>
            <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 90px;" id="q10-i3"> l = mid + 1;</div>
            <div class="code-line">&nbsp;&nbsp;}</div>
            <div class="code-line">&nbsp;&nbsp;return -1;</div>
            <div class="code-line">};</div>  
    </div>`
];

var JS_answers = {
    1: [3, 'console', 'pop', 'split'],
    2: [3, 'length', 'max_str', 'maxi'],
    3: [4, 'new', 'getMonth', 'today', 'console'],
    4: [3, 'const', 'Math', '+'],
    5: [3, '&&', 'max', 'min'],
    6: [2, 'num', 'push'],
    7: [2, 'k', 'index'],
    8: [3, 'alert', 'else', 'prompt'],
    9: [3, 'docBody', 'p', 'rgb'],
   10: [3, '=>', 'guess', 'else'] 
}


var HTML_questions = [
    //HTML_Question: 01
    `<h1 class="code-name">Basic Page Structure</h1>
    <div class="code-ground">
        <div class="code-line">&lt;<input type="text" class="code-input" style="width: 50px;" id="q1-i1">DOCTYPE html&gt;</div>
        <div class="code-line">&lt;html&gt;</div>
        <div class="code-line">&lt;head&gt;</div>
        <div class="code-line">&lt;title&gt; Home &lt;/title&gt;</div>
        <div class="code-line">&lt;/<input type="text" class="code-input" style="width: 80px;" id="q1-i2">&gt;</div>
        <div class="code-line">&lt;<input type="text" class="code-input" style="width: 80px;" id="q1-i3">&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt; HTML & CSS  &lt;/p&gt;</div>
        <div class="code-line">&lt;/body&gt;</div>
        <div class="code-line">&lt;<input type="text" class="code-input" style="width: 80px;" id="q1-i4">&gt;</div>
    </div>`,

    //HTML_Question: 02
    `<h1 class="code-name">Adding CSS and JS</h1>
    <div class="code-ground">
        <div class="code-line">&lt;!DOCTYPE <input type="text" class="code-input" style="width: 90px;" id="q2-i1">&gt;</div>
        <div class="code-line">&lt;html&gt;</div>
        <div class="code-line">&lt;head&gt;</div>
        <div class="code-line">&lt;link <input type="text" class="code-input" style="width: 80px;" id="q2-i2"> ="stylesheet" <input type="text" class="code-input" style="width: 80px;" id="q2-i3">="style.css"&gt;</div>
        <div class="code-line">&lt;title&gt; Home &lt;/title&gt;</div>
        <div class="code-line">&lt;/head&gt;</div>
        <div class="code-line">&lt;body&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt; HTML & CSS  &lt;<input type="text" class="code-input" style="width: 80px;" id="q2-i4">&gt;</div>
        <div class="code-line">&lt;script  <input type="text" class="code-input" style="width: 80px;" id="q2-i5">="test.js"&gt; &lt;/script&gt;</div>
        <div class="code-line">&lt;/body&gt;</div>
        <div class="code-line">&lt;/html&gt;</div>
    </div>`,

    //HTML_Question: 03
    `<h1 class="code-name">Meta Tag</h1>
    <div class="code-ground">
        <div class="code-line">&lt;head&gt;</div>
        <div class="code-line">&lt;meta <input type="text" class="code-input" style="width: 100px;" id="q3-i1">="UTF-8"&gt;</div>
        <div class="code-line">&lt;meta name="keywords" content="HTML, CSS"&gt;</div>
        <div class="code-line">&lt;meta <input type="text" class="code-input" style="width: 100px;" id="q3-i2">="viewport" <input type="text" class="code-input" style="width: 100px;" id="q3-i3">="width=device-width, initial-scale=1.0"&gt;</div>
        <div class="code-line">&lt;/head&gt;</div>
    </div>`,

    //HTML_Question: 04
    `<h1 class="code-name">List</h1>
    <div class="code-ground">
        <div class="code-line">&lt;body&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<input type="text" class="code-input" style="width: 50px;" id="q4-i1"> <input type="text" class="code-input" style="width: 100px;" id="q4-i2">="i"&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;b&gt;Google&lt;/<input type="text" class="code-input" style="width: 50px;" id="q4-i3">&gt;&lt;/li&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;i&gt;Facebook&lt;/i&gt;&lt;/li&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;u&gt;Amazon&lt;/u&gt;&lt;/li&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;em&gt;Microsoft&lt;/em&gt;&lt;/li&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ol&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul <input type="text" class="code-input" style="width: 100px;" id="q4-i4">="list-style-type:disc;"&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;JavaScript&lt;/li&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Python&lt;/li&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Java&lt;/li&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;C++&lt;/<input type="text" class="code-input" style="width: 50px;" id="q4-i5">&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<input type="text" class="code-input" style="width: 50px;" id="q4-i6">&gt;</div>
        <div class="code-line">&lt;/body&gt;</div>
    </div>`,

    //HTML_Question: 05
    `<h1 class="code-name">Image as a Link</h1>
    <div class="code-ground">
        <div class="code-line">&lt;head&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;style&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 40px;" id="q5-i1">site-link{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 90px;" id="q5-i2">: flex;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 40px;" id="q5-i3">google-img:hover{</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 5px 5px 0 black;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/style&gt;</div>
        <div class="code-line">&lt;/head&gt;</div>
        <div class="code-line">&lt;body&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="site-link" <input type="text" class="code-input" style="width: 100px;" id="q5-i4">="https://www.google.com"&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img id="google-img" <input type="text" class="code-input" style="width: 100px;" id="q5-i5">="google.png" <input type="text" class="code-input" style="width: 80px;" id="q5-i6">="google"&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;</div>
        <div class="code-line">&lt;/body&gt;</div>
    </div>`,

    //HTML_Question: 06
    `<h1 class="code-name">Input and Button</h1>
    <div class="code-ground">
    <div class="code-line">&lt;head&gt;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<input type="text" class="code-input" style="width: 100px;" id="q6-i1">&gt;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input, button{</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 100px;" id="q6-i2">: block;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/style&gt;</div>
    <div class="code-line">&lt;/head&gt;</div>
    <div class="code-line">&lt;body&gt;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input <input type="text" class="code-input" style="width: 90px;" id="q6-i3">="text" placeholder="Enter username" &gt;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input <input type="text" class="code-input" style="width: 90px;" id="q6-i4">="password" placeholder="Enter password"&gt;</div>
    <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="submit"&gt;Login&lt;/<input type="text" class="code-input" style="width: 100px;" id="q6-i5">&gt;</div>
    <div class="code-line">&lt;/body&gt;</div>
    </div>`,

    //HTML_Question: 07
    `<h1 class="code-name">HTML Entities</h1>
    <div class="code-ground">
        <div class="code-line">&lt;body&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;HTML Entities&lt;<input type="text" class="code-input" style="width: 30px;" id="q7-i1">h1&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Greater Than: <input type="text" class="code-input" style="width: 100px;" id="q7-i2"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Less Than: <input type="text" class="code-input" style="width: 100px;" id="q7-i3"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Ampersand: <input type="text" class="code-input" style="width: 100px;" id="q7-i4"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Copyright: <input type="text" class="code-input" style="width: 100px;" id="q7-i5"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Single Quotation: <input type="text" class="code-input" style="width: 100px;" id="q7-i6"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Double Quotation: <input type="text" class="code-input" style="width: 100px;" id="q7-i7"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Plus: <input type="text" class="code-input" style="width: 100px;" id="q7-i8"></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Minus: <input type="text" class="code-input" style="width: 100px;" id="q7-i9"></div>
        <div class="code-line">&lt;/body&gt;</div>
    </div>`,

    //HTML_Question: 08
    `    <h1 class="code-name">Audio and Video</h1>
    <div class="code-ground">
        <div class="code-line">&lt;body&gt;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;audio <input type="text" class="code-input" style="width: 100px;" id="q8-i1"> autoplay&gt;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;source src="horse.<input type="text" class="code-input" style="width: 100px;" id="q8-i2">" type="audio/ogg"&gt;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;source src="horse.mp3" type="audio/mpeg"&gt;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Your browser does not support the audio element.</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/audio&gt;</div>
<br>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;video width="320" height="240" controls&gt;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;source <input type="text" class="code-input" style="width: 100px;" id="q8-i3">="movie.mp4" type="video/mp4"&gt;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<input type="text" class="code-input" style="width: 100px;" id="q8-i4"> src="movie.ogg" type="video/ogg"&gt;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Your browser does not support the video tag.</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/video&gt;</div>
<div class="code-line">&lt;/body&gt;</div>
    </div>`,

    //HTML_Question: 09
    `<h1 class="code-name">nav And footer</h1>
    <div class="code-ground">
        <div class="code-line">&lt;nav&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&lt;a <input type="text" class="code-input" style="width: 100px;" id="q9-i1">="/html/">HTML&lt;/a&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&lt;a href="/css/">CSS&lt;/a&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&lt;a href="/js/">JavaScript&lt;/a&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&lt;a href="/python/">Python&lt;/a&gt;</div>
        <div class="code-line">&lt;/<input type="text" class="code-input" style="width: 100px;" id="q9-i2">&gt;</div>
        <br>
        <div class="code-line">&lt;<input type="text" class="code-input" style="width: 100px;" id="q9-i3"> &gt;</div>
        <div class="code-line">&nbsp;&nbsp;&lt;p&gt;Author: Unknown&lt;/p&gt;</div>
        <div class="code-line">&nbsp;&nbsp;&lt;p&gt;&lt;a href="<input type="text" class="code-input" style="width: 100px;" id="q9-i4">:a@email.com"&gt;</div>
        <div class="code-line">a@email.com&lt;/a&gt;&lt;/p&gt;</div>
        <div class="code-line">&lt;/footer&gt;</div>
    </div>`,

    //HTML_Question: 10
    `<h1 class="code-name">HTML CSS JS</h1>
    <div class="code-ground">
        <div class="code-line">&lt;body&gt;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 90px;" id="q10-i1"> </div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML:</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hypertext <input type="text" class="code-input" style="width: 100px;" id="q10-i2"> Language</div>
<div class="code-line"><br></div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS:</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="code-input" style="width: 120px;" id="q10-i3"> Style Sheets</div>
<div class="code-line"><br></div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JS:</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;--&gt;</div>
<div class="code-line">&lt;/body&gt;</div>
<div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     </div>
    </div>`
];

var HTML_answers = {
    1: [4, '!', 'head', 'body', '/html'],
    2: [5, 'html', 'rel', 'href', '/h1', 'src'],
    3: [3, 'charset', 'name', 'content'],
    4: [6, 'ol', 'start', 'b', 'style','li', 'ul'],
    5: [6, '.', 'display', '#', 'href', 'src', 'alt'],
    6: [5, 'style', 'display', 'type', 'type', 'button'],
    7: [9, '/', '&gt;', '&lt;', '&amp;', '&copy;', '&apos;', '&quot;', '&plus;', '&minus;'],
    8: [4, 'constrols', 'ogg', 'type', 'source'],
    9: [4, 'href', 'nav', 'footer', 'mailto'],
   10: [3, '<!--', 'markup', 'cascading']
}



const langCodes = () => {
    if(language == 'c')
        return C_questions[q_no];
    else if(language == 'python')
        return Python_questions[q_no];
    else if(language == 'java')
        return Java_questions[q_no];
    else if(language == 'cpp')
        return Cpp_questions[q_no];
    else if(language == 'html') 
        return HTML_questions[q_no];
    else if(language == 'js')
        return JS_questions[q_no];
}

var language = "";
const codeGround = (lang) => {
    document.getElementById("main").innerHTML = `
        <div class="codes">
        <div id="codes" class="code-main-cnt"> </div>
        <button class="code-submit-btn q-counter-btn" id="question-no-btn"><span id="q-no-counter">0</span>/10</button>
        <button class="code-submit-btn check-btn" id="check-btn" onclick="checkResult('${lang}')">Check</button>
        <button class="code-submit-btn next-btn" id="skip-btn" onclick="skipQuestion()">Skip</button>
        </div>`;
    language = lang;
    codes();
}

const codes = () => {
    document.getElementById("codes").innerHTML = langCodes();
    document.getElementById("q-no-counter").innerText = q_no+1;
    q_no += 1;
}

const skipQuestion = () => {
    if(q_no == 9)
        document.getElementById("skip-btn").style.visibility = "hidden";
    
    if(q_no < 10){
        document.getElementById("check-btn").style.visibility = "visible";  
        document.getElementById("check-btn").innerText = "Check";
        document.getElementById("check-btn").removeAttribute("onclick");
        document.getElementById("check-btn").setAttribute("onclick", `checkResult('${language}')`);
        document.getElementById("skip-btn").innerText = "skip";
        codes();
    }
}

const answerFinder = (i) => {
    if(language == 'c')
        return C_answers[q_no][i];
    else if(language == 'cpp')
        return Cpp_answers[q_no][i];
    else if(language == 'python')
        return Python_answers[q_no][i];
    else if(language == 'html')
        return HTML_answers[q_no][i];
    else if(language == 'java')
        return Java_answers[q_no][i];
    else if(language == 'js')
        return JS_answers[q_no][i];
}

var  correct_ans = 0, flag = 0; 
const checkResult = (lang) => {
    let isAllCorrect = false;
    flag = 0;


    for(let i=1 ; i<=answerFinder(0) ; i++){
        let answer = document.getElementById(`q${q_no}-i${i}`);
        if(lang=='html' && (answer.value).toLowerCase() == answerFinder(i)){
            answer.style.backgroundColor = "#bde8e0";
            answer.style.border = "1px solid #40bf9c";
            flag += 1;
        }
        else if(lang !='html' && (answer.value).toLowerCase() == answerFinder(i)) {
            answer.style.backgroundColor = "#bde8e0";
            answer.style.border = "1px solid #40bf9c";
            flag += 1; 
        }
        else {
            answer.style.backgroundColor = "#ffada1";
            answer.style.border = "1px solid #f35843";
        }
    }

    if(flag == answerFinder(0))
        isAllCorrect = true;

    document.getElementById("skip-btn").innerText = "next";
    if(isAllCorrect){
        correct_ans += 1;
        if(q_no == 10){
            document.getElementById("question-no-btn").style.visibility = "hidden";
            document.getElementById("check-btn").setAttribute("onclick", "showResult()");
            document.getElementById("check-btn").innerText = "Result";
        }else {
            document.getElementById("check-btn").style.visibility = "hidden";
        }
    } else {
        document.getElementById("check-btn").setAttribute("onclick", "showAnswers()");
        document.getElementById("check-btn").innerText = 'Answers!';
    }
}

const showAnswers = () => {
    document.getElementById("check-btn").style.visibility = "visible";
    let answer = "";
    if(language == 'c'){
        for(let i=1 ; i<=C_answers[q_no][0] ; i++){
            answer = document.getElementById(`q${q_no}-i${i}`);
            answer.value = C_answers[q_no][i];
            answer.style.backgroundColor = "#bde8e0";
            answer.style.border = "1px solid #40bf9c";
        }
    }

    else if(language == 'python'){
        for(let i=1 ; i<=Python_answers[q_no][0] ; i++){
            answer = document.getElementById(`q${q_no}-i${i}`);
            answer.value = Python_answers[q_no][i];
            answer.style.backgroundColor = "#bde8e0";
            answer.style.border = "1px solid #40bf9c";
        }
    }

    else if(language == 'java'){
        for(let i=1 ; i<=Java_answers[q_no][0] ; i++){
            answer = document.getElementById(`q${q_no}-i${i}`);
            answer.value = Java_answers[q_no][i];
            answer.style.backgroundColor = "#bde8e0";
            answer.style.border = "1px solid #40bf9c";
        }
    }

    else if(language == 'cpp'){
        for(let i=1 ; i<=Cpp_answers[q_no][0] ; i++){
            answer = document.getElementById(`q${q_no}-i${i}`);
            answer.value = Cpp_answers[q_no][i];
            answer.style.backgroundColor = "#bde8e0";
            answer.style.border = "1px solid #40bf9c";
        }
    }

    else if(language == 'html'){
        for(let i=1 ; i<=HTML_answers[q_no][0] ; i++){
            answer = document.getElementById(`q${q_no}-i${i}`);
            answer.value = HTML_answers[q_no][i];
            answer.style.backgroundColor = "#bde8e0";
            answer.style.border = "1px solid #40bf9c";
        }
    }

    else if(language == 'js'){
        for(let i=1 ; i<=JS_answers[q_no][0] ; i++){
            answer = document.getElementById(`q${q_no}-i${i}`);
            answer.value = JS_answers[q_no][i];
            answer.style.backgroundColor = "#bde8e0";
            answer.style.border = "1px solid #40bf9c";
        }
    }

    if(q_no == 10){
        document.getElementById("question-no-btn").style.visibility = "hidden";
        document.getElementById("check-btn").setAttribute("onclick", "showResult()");
        document.getElementById("check-btn").innerText = "Result";
    }
}

const showResult = () => {
    document.getElementById("check-btn").removeAttribute("onclick");
    document.getElementById("check-btn").setAttribute("onclick", "Home()");
    document.getElementById("check-btn").innerText = "Home";
    let status = "", color = "";
    if(correct_ans < 3) {
        status = "Poor!"; 
        color = "#e91e63";
    }
    else if(correct_ans < 7){
        status = "Good!";
        color = "#00bcd4";
    }
    else if(correct_ans < 10){
        status = "Amazing!";
        color = "#349a61";
    }
    else {
        status = "Perfect!";
        color = "#349a61";
    }

    document.getElementById("codes").innerHTML = `
    <h1 class="code-name">Your Score!</h1>
    <div class="code-ground">
    <br><br>
    <div class="code-line" style="text-align: center; font-size: 50px;">${correct_ans}/10</div>
    <br>
    <div class="code-line" style="text-align: center; color:${color}; font-size: 2rem;">${status}</div>
    </div>`;
}

const Home = () => {
    q_no = 0;
    correct_ans = 0;
    document.getElementById("check-btn").innerText = "Check";
    document.getElementById("main").innerHTML = `
    <div class="lang-cnt">
        <button class="language" style="background-color: #134c7a;" onclick="codeGround('python')">Python</button>
        <button class="language" style="background-color: #fa9722;" onclick="codeGround('java')">Java</button>
        <button class="language" style="background-color: #0c6291;" onclick="codeGround('cpp')">C++</button>
        <button class="language" style="background-color: #2196f3;" onclick="codeGround('c')">C</button>
        <button class="language" style="background-color: #e54d26;" onclick="codeGround('js')">JavaScript</button>
        <button class="language" style="background-color: #652f91;" onclick="codeGround('html')">HTML CSS</button>
    </div>`;
}