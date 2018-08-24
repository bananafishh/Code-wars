# Are they the "same"?

Given two arrays <code>a</code> and <code>b</code> write a function <code>comp(a, b)</code> that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in <code>b</code> are the elements in <code>a</code> squared, regardless of the order.

## Valid arrays

```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```

<code>comp(a, b)</code> returns true because in <code>b</code> 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write <code>b</code>'s elements in terms of squares:

```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
```

## Invalid arrays

If we change the first number to something else, <code>comp</code> may not return true anymore:

```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```

<code>comp(a,b)</code> returns false because in <code>b</code> 132 is not the square of any number of <code>a</code>.

```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
```

<code>comp(a,b)</code> returns false because in <code>b</code> 36100 is not the square of any number of <code>a</code>.

## Remarks

<code>a</code> or <code>b</code> might be <code>[]</code>. <code>a</code> or <code>b</code> might be <code>null</code>.

If <code>a</code> or <code>b</code> are <code>null</code>, the problem doesn't make sense so return false.
If <code>a</code> or <code>b</code> are empty the result is evident by itself.

Уровень сложности **6kyu**.
