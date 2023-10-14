# top-calculator
Making a basic calculator using HTML, CSS and JS following The Odin Project

//Documentation for personal use, trying to understand the process

``HTML``

We have created a simple HTML DOM(Document Object Model) to contain all of the essential elements needed for our calculator.

We have an over-arching `calculator-grid` div container which holds the entire calculator structure

Within this container we have an `ouput` div, which will be where the active and previously active operands, operators and results will be displayed.

Next, we have all of the individual buttons required for the calculator to function.

Each button contains a text element to identify its function.

The `AC` annd `Equals` button are assigned the class of `'span-two'` which will be used in the CSS sheet to identify them as needing to occupy two spaces, while the other buttons occupy only one each.

As well as this, each button is assigned a `data attribute`.

``Data attributes allow individual elements (both semantic and non-semantic) to be given identifying features beyond just classes. Data attributes can hold specific data, somewhat similar to how Objects can contain various data to give the parent element characteristics.``

The data attributes work here to identify in the JavaScript which button is responsible for which role. In this case the data attribute holds no value beyond a name identifier, and works essentially the same as a Class, but the rational is to more clearly identify which part works with JavaScript, and which part works with CSS.

Aside from the boilerplate, title, linking of scripts etc, that is all that the HTML requires to construct a simple calculator.

``CSS``

In the CSS document we apply visual styles to the HTML elements created earlier.

`// *, *::before, *::after`
First, we use the `*` Universal Selector to select everything initially, as well as the `*::before` selector to target the pseudo-element `::before` and `*::after` to target the  pseudo-element `::after` for all elements in the document to define what may be inserted before, during and after every element on the page.

For these we apply:
`box-sizing: border-box` - This changes how the height and width of an element are calculated, instead of using the height, width, padding and border as individual elements with sizes, the border-box includes the padding and border into the total height and width. 

`Without:`
Height: 100px(content) + 20px(border-top + border-bottom) + 20px(padding-top + padding-bottom) = 140px

`With:`
Height: 100px(content + padding-top + padding-bottom + border-top + border-bottom) = 100px

We then set the font family and weight.


`// .body`

`padding: 0, margin: 0`
Then we select the body element and remove all padding and margin so that the element size only accounts for its content.

`background: linear-gradient(to right, #00AAFF, #00FFCC)`
Then the background is set to a linear gradient from left to right, going from blue to green.

`// .calculator-grid`

`display: grid`
Then we select the `calculator-grid` elements and set the display to `grid`. This creates a grid layout with all child elements becoming cells within that grid.

`justify-content: center` simply positions this element in the centre of the page on the `horizontal axis`.

`align-content: center` simply positions this element in the centre of the page on the `vertical axis`.

`min-height: 100vh` sets the minimum possible height at 100% of the viewport height, so that it will not compress down below that size on a responsive screen.

`grid-template-columns` sets the grid to have 4 columns, repeating, with each column taking 100px in width.

`grid-template-rows` 
The first row (`Display area`) is set to a minimum row-track (`space between two adjacent grid lines`) of 120px and a maximum of `auto`, to resize according to the content, in this case a potentially increasing number requiring more than one line to display.


`// .calculator-grid > button`
This targets each button element in the calculator

`cursor: pointer` This simply changes the mouse cursor to a hand pointer when the mouse is above the calculator, indicating that the items there can be clicked on.

`font-size: 2rem` This simply sets the font size.

`border: 1px solid white` This applies a solid white 1px border to each button.

`outline: none` This removes the outline from each button.

`background-color:...` This sets the background color of each button to a slightly transparant white.

`// .calculator-grid > button:hover`

`background-color:...` This sets the background color of each button to less transparant white when the cursor is hovered over the button.


`// .span-two`

`grid-column: span 2` This targets the `AC` and `Equals` buttons and makes them occupy the space of two columns on their rows to appear wider.

`// .output`
This is targeting the output area, where the operands, operations and results will display to the user

`grid-column: 1 / -1` This sets the display area to span from the first column (`1`) to the last column (`-1`). -1 is used because negative numbers count from the end towards the start, so -1 will always be the last column, regardless of how many columns there are.

`display: flex` This sets the elements within the output area to use a Flex based display system.

`align-items: flex-end` This positions the items inside the output against the end of the flex object, or the right side of the output area.

`justify-content: space-around` This uses the ability of Flexbox display to add spacing around each element on the vertical axis.

`flex-direction: column` This organizes the items inside the Flexbox from top to bottom, rather than left to right.

`word-wrap: break-word` This allows long words or strings to be broken and wrap onto the next line.

`word-break: break-all` This allows words to break at any character to prevent overflow.


`// .output .previous-operand`

This is the text on the upper half of the display for the numbers of the previous actions

`// .output .current-operand`

This is the text on the lower half of the display for the numbers of the current actions


``JavaScript``

Initially we will start below the `class Calculator`, by declaring the variables used in this script.

The various elements in the HTML document are selected using either `querySelector` for elements with a single instance like the equal button or display text, or `querySelectorAll` for elements with multiple instances, like number buttons. They are selected using the `data attributes` added in the HTML document.

After these, create the `class` of the calculator itself.

Inside this class, we add a `constructor` method which allows us to create the calculator object with specific input parameters, which in this case are the:
`previousOperandTextElement`
and
`currentOperandTextElement`

which were declared and assigned previously as the elements within the HTML document, as the `current display text` or the `previous display text`.

And when the calculator class is created, the  `clear()` function will be called to reset the `currentOperand` and `previousOperand` to empty strings, which will show on the display as nothing, and the `operation` as undefined, so there will be no initial choice of operation lingering.

`//`

Each `number button` is looped over using the `forEach` function, finding any buttons within that `data attribute` selection and then adding an `Event Listener` to it, listening for  a `click`, upon which the following methods will be called.

`calculator.appendNumber(button.innerText)` will call the Calculator classes `appendNumber` function, giving the parameter `number` as the `innerText` content of that button. So, by clicking 1, the content of 1 will be appended to the current operand.

Before this, and `if` check is applied, to limit how many `.'s` can be used.

If the number appended is `.`, AND the `currentOperand` already `includes` `.`, then `return` the function without proceeding further, ensuring only one `.` can be used in the string.

`if not` then the `currentOperand` is assigned as: the current version, converted `toString` for certainty and functionability, with the `input number` added to the string.

`//`

Back in the `addEventListener`, `updateDisplay` is called from the Calculator class.

`updateDisplay` takes no parameters,
The `currentOperandTextElement`'s innerText element is updated using: `getDisplayNumber` with the parameter of the  `currentOperand`.

`//`
`getDisplayNumber` creates 3 variables:
`stringNumber` is the input parameter (`currentOperand`) converted to a `String`
`integerDigits` is the stringNumber at the decimal point (`.`) to all numbers before that, then converted to a `float`. Example: 999.111 would cut 999 and create a seperate float.
`decimalDigits` is the stringNumber at the decimal point (`.`) to all numbers after that, but remaining as a `string`. Example, 999.111 would cut 111 and create a seperate string.

Then, `integerDisplay` is declared.

A check happens, `if integerDigits` is `NOT a number (NaN)` then integerDisplay is set to an empty string. `else` integerDisplay is set to integerDigits, converted `toLocaleString('en')` which is a formatting function to create standard formats for dates and numbers. In this case, placing a limit (`maximumFractionDigits: 0`) of zero digits after a decimal place, so that a whole integer is provided, since this is to define the part of the number before the decimal point.

Then, if there ARE `decimalDigits` remaining after the `.` in the supplied number, ie `Not equal to null`, then return a stitched together string of `integerDisplay`(The part before the decimal) `.` and `decimalDigits`(The part after the decimal).

`else`, if there are no `decimalDigits` given, then simply return the `integerDisplay` without an extra decimals.

`//`
Then, after the text to display has been formatted correctly, a check is made.
`if` the operation variable contains a variable (`!= null`), then the `previousOperandTextElement.innerText` is set to display as the `formatted previousOperand` + the `selected operator`.
`else`
The previousOperandTextElement innerText is set to an empty string.

`//`

For the `Operation Buttons`, each is looped over using `forEach` and assigned an `Event Listener` listening for a `click event`, whereupon it will `chooseOperation` with the innerText content of that button fed as the parameter.

The `chooseOperation` function checks if the currentOperand is an  `empty string`, if so it returns and does nothing.

If the currentOperand is `Not an empty string`, the `compute()` function is called.

`compute()`

An unnassigned variable is created for `computation`.
A `prev` variable is created and assigned as the `previousOperand` converted to a float number.
a `current` variable is created and assigned as the `currentOperand`
converted to a float number.

A `switch` method is then called, using the current `operation` variable as the parameter, checking it against equality to `+, -, *, ÷` strings.

If one is met, then that strings equivelant operation is applied between the  `prev` and the `current` variables and assigned to the `computation` variable. If none of the cases are met, nothing will happen.

Then, the `currentOperand` is assigned as the `computation` variables value, `operation` is cleared and set to `undefined` and the `previousOperand` is set to an empty string.

Then the display is updated with these values.

`// equals button`

The `equals button` is directly assigned an event listener, and the same `compute` function is called, but with no input parameter, result in the display area showing only the result of the operation.

`// all clear button`

The `all clear button` is directly assigned an event listener, and the `clear()` function is called with no parameters, removing any values from the current operands and operation.

`// delete button`

The `delete button` is directly assignd an event listener, which calles the `delete()` function with no parameters.

The `delete` function simply converts the current operand to a `string` and uses the `slice()` function at `element[0]` to `element[1]`, removing the first number of the currentOperand.