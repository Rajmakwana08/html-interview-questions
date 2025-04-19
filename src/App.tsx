import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. What is HTML?",
      answer: "HTML (HyperText Markup Language) is the standard language used to create and design web pages. It structures content like headings, paragraphs, links, images, etc.",
      codeExample: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>
`
    },
    {
      id: 2,
      question: "2. What are the different types of HTML elements?",
      answer: "HTML elements are mainly of three types: block-level, which structure the layout; \ninline, which style small parts of text; and \nempty elements, like <br> or <img>, which don't need a closing tag.",
      codeExample: `Block-level example:  <div> ... </div>
Inline example: <span> ... </span>, <strong> ... </strong>, <img src="..." />
Empty element example: <br>, <hr>`
    },
    {
      id: 3,
      question: "3. What is the difference between HTML and HTML5?",
      answer: "HTML5 is the modern version of HTML that supports audio, video, and advanced features like semantic tags, offline storage, and mobile-friendly design — all without needing extra plugins. \n✅ HTML (Old versions) \nBasic structure of web pages. \nOlder version used for creating simple websites. \nHad limited support for audio, video, and modern features. \nRequired third-party plugins like Flash for multimedia.",
    },
    {
      id: 4,
      question: "4. What is the structure of an HTML document?",
      answer: "",
      codeExample: `<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>`
    },
    {
      id: 5,
      question: "5. What are semantic HTML elements?",
      answer: "Semantic elements in HTML clearly describe their role on the page, like <header>, <footer>, and <nav>, which improves readability and SEO (Search Engine Optimization).",
    },
    {
      id: 6,
      question: "6. What is the purpose of the <!DOCTYPE> declaration?",
      answer: " It tells the browser which version of HTML is being used. It must be the first line in an HTML document.",
    },
    {
      id: 7,
      question: "7. What is the difference between <div> and <span>?",
      answer: "<div> is a block-level element, used for grouping large sections of content and it starts on a new line. \n<span> is an inline element, used for styling small portions of text and does not start a new line.",
      codeExample: ` <div> exaplem:
      <div>
  <p>This is inside a div.</p>
</div>


<span> example:
<p>This is a <span style="color: red;">red word</span> in a sentence.</p>
`
    },
    {
      id: 8,
      question: "8. What are void elements in HTML?",
      answer: "Void elements in HTML are tags that do not have a closing tag and cannot have any child elements. They are self-closing.",
      codeExample: `Examples:
<br> (line break)

<img> (image)

<input> (form input)

<hr> (horizontal line)

<meta>, <link>`
    },
    {
      id: 9,
      question: "9. What are HTML attributes? Give some examples.",
      answer: "Attributes provide additional information about elements.",
      codeExample: `Example: 
<img src="image.jpg" alt="description">`
    },
    {
      id: 10,
      question: "10. What is the difference between id and class in HTML?",
      answer: "id is unique (one per page) \nclass can be shared by multiple elements \nSelector->	#idName in CSS,	.className in CSS",
      codeExample: `<div id="header">Main Header</div>
<p class="text">Hello</p>
<p class="text">Hi</p>
`
    },
    {
      id: 11,
      question: "11. What is the use of the alt attribute in <img> tag?",
      answer: "It provides alternative text if the image cannot be displayed and improves accessibility.",
    },
    {
      id: 12,
      question: "12. What are global attributes in HTML?",
      answer: " Global attributes can be used on any HTML element. \nExamples: class, id, style, title, lang, tabindex.",
      codeExample: `
<p id="para1" class="highlight" title="This is a tooltip" style="color:blue;">
  Hello, world!
</p>

id, class, title, and style are all global attributes.      `
    },
    {
      id: 13,
      question: "13. What is the difference between <a> tag’s target=\"_blank\" and target=\"_self\"?",
      answer: "The target attribute in the <a> tag controls where the link will open.",
      codeExample: `
<!-- Opens in a new tab -->
<a href="https://example.com" target="_blank">Open in New Tab</a>

<!-- Opens in the same tab -->
<a href="https://example.com" target="_self">Open in Same Tab</a>
`
    },
    {
      id: 14,
      question: "14. What are HTML forms and why are they used?",
      answer: "HTML forms are used to collect user input and send it to a server for processing. \naction → Where to send data (URL) \nmethod → How to send it (GET or POST)",
      codeExample: `<form action="/submit" method="post">  // URL to send data
  <label>Name:</label>
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>
`
    },
    {
      id: 15,
      question: "15. What are the different types of input types in HTML?",
      answer: "HTML supports various input types like text, password, email, checkbox, radio, date, and more, to handle different kinds of user inputs in forms.",
      codeExample: `Input Type	Description
text	Single-line text input
password	Hides the characters (for passwords)
email	For email addresses
number	Only allows numbers
checkbox	A tick box (true/false)
radio	Choose one option from a group
submit	Submits the form
reset	Resets the form fields
button	A regular button (custom actions)
file	Upload a file
date	Choose a date
time	Choose time
tel	Telephone number input
url	Web address input
hidden	Hidden input (not shown to user)
range	Slider for selecting a value
color	Color picker`
    },
    {
      id: 16,
      question: "16. What is the difference between GET and POST methods in form submission?",
      answer: "GET shows data in the URL \nPOST sends data hidden in the body (more secure)",
    },
    {
      id: 17,
      question: "17. What is the required attribute in HTML forms?",
      answer: "If a field has required, the user must fill it before submitting the form.",
      codeExample: `<form>
  <input type="text" name="username" required>
  <button type="submit">Submit</button>
</form>
`
    },
    {
      id: 18,
      question: "18. How do you embed images, audio, and video in HTML?",
      answer: "In HTML, you can embed images, audio, and video using the <img>, <audio>, and <video> tags.",
      codeExample: `:
🖼️ Image:
<img src="image.jpg" alt="Description">


🔊 Audio:
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>


🎥 Video:
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
</video>
`
    },
    {
      id: 19,
      question: "19. What are the different types of lists in HTML?",
      answer: "HTML provides ordered, unordered, and description lists to organize items either by number, bullet, or term-definition format.",
      codeExample: `1. Ordered List (<ol>)
Items are numbered.
<ol>
  <li>First</li>
  <li>Second</li>
</ol>


2. Unordered List (<ul>)
Items use bullets.
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>


3. Description List (<dl>)
Used for terms and definitions.
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>`
    },
    {
      id: 20,
      question: "20. What are the basic HTML table tags?",
      answer: "HTML tables are built using tags like <table>, <tr>, <td>, and <th>. We can also organize them using <thead>, <tbody>, and <tfoot> for better structure.",
      codeExample: `Tag	Description
<table>	Creates the table
<tr>	Table row
<td>	Table data (cell)
<th>	Table header (bold & centered)
<thead>	Groups header content
<tbody>	Groups body content
<tfoot>	Groups footer content
<caption>	Adds title/caption to the table

Example:
<table>
  <caption>Student Info</caption>
  <tr>
    <th>Name</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>John</td>
    <td>A</td>
  </tr>
</table>
`
    },
    {
      id: 21,
      question: "21. What are data- attributes in HTML5?*",
      answer: "data- attributes in HTML5 are used to store extra custom data in HTML elements that JavaScript can access later.",
      codeExample: `
      📌 Syntax:
<div data-user-id="123" data-role="admin">User Info</div>

data-user-id and data-role are custom data attributes.


Can be accessed using JavaScript:
const div = document.querySelector('div');
console.log(div.dataset.userId); // "123"
console.log(div.dataset.role);   // "admin"`
    },
    {
      id: 22,
      question: "22. What is localStorage and sessionStorage in HTML5?",
      answer: "localStorage and sessionStorage are used to store data in the browser. localStorage keeps data even after closing the browser(Lifetime ->Data stays until manually cleared), but sessionStorage removes data when the tab or browser is closed.",
      codeExample: `Example:
// localStorage
localStorage.setItem("name", "John");
console.log(localStorage.getItem("name")); // John

// sessionStorage
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token")); // abc123
`
    },
    {
      id: 23,
      question: "23. What is the purpose of the <meta> tag in HTML?",
      answer: "<meta> tag gives information about the webpage to browsers and search engines, like charset, description, keywords, or viewport settings for mobile devices.",
      codeExample: `Set character encoding
<meta charset="UTF-8">

Control viewport (for responsive design)
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Add page description (used in SEO)
<meta name="description" content="This is a portfolio website.">

Define keywords
<meta name="keywords" content="HTML, CSS, React">`
    },
    {
      id: 24,
      question: "What is the <canvas> element used for?",
      answer: "<canvas> is used to draw graphics on a web page using JavaScript. It’s useful for things like games, visual effects, or charts.",
      codeExample: `Example:
<canvas id="myCanvas" width="200" height="100" style="border:1px solid black;"></canvas>

<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(20, 20, 150, 50);  // Draw a blue rectangle
</script>
`
    },
    {
      id: 25,
      question: "25. What is the purpose of the <iframe> tag?",
      answer: "<iframe> is used to display another webpage or content like YouTube videos or Google Maps inside our own webpage.",
      codeExample: `Example:
<iframe src="https://www.example.com" width="600" height="400"></iframe>

This displays the content of example.com inside your webpage.`
    },
    {
      id: 26,
      question: "26. What is the difference between <strong> and <b> tags?",
      answer: "<strong> is used when something is very important. \nIt makes the text bold AND tells the browser:👉 'This word is important.' \n\n<b> is only for bold style.",
      codeExample: `Example:
<strong>Important!</strong>  
<b>Just bold text</b>
`
    },
    {
      id: 27,
      question: "27. How do you comment in HTML?",
      answer: "! -> Exclamation mark, - -> Dash",
      codeExample: `"We use <!-- comment --> to add notes in HTML that are ignored by the browser."`
    },
    {
      id: 28,
      question: "28. How do you include an external CSS or JavaScript file in HTML?",
      answer: "We use the <link> tag to add external CSS and the <script> tag to include external JavaScript files.",
      codeExample: `Use the <link> tag inside the <head> section:
<link rel="stylesheet" href="style.css">

Use the <script> tag, usually at the end of the <body>:
<script src="script.js"></script>
`
    },
    {
      id: 29,
      question: "29. How is SEO related to HTML?",
      answer: "HTML supports SEO by using semantic elements, proper headings, title, meta tags, and alt attributes to help search engines understand and rank the page better.",
    },
    {
      id: 30,
      question: "30. What is the difference between relative and absolute URLs?",
      answer: "An absolute URL includes the full path including domain, while a relative URL is a shortcut path relative to the current page.",
      codeExample: `1. Absolute URL

Includes the full path (domain + page).

Works anywhere because it's a complete link.

🔹 Example:
https://example.com/about.html

2. Relative URL

Includes the path relative to the current page.

Used within the same website.

🔹 Example:
/about.html or about.html

`
    },
    {
      id: 31,
      question: "31. What is the difference between HTML4 and HTML5?",
      answer: "HTML5 is the modern version of HTML that supports audio, video, and advanced features like semantic tags, offline storage, and mobile-friendly design — all without needing extra plugins. \n✅ HTML (Old versions) \nBasic structure of web pages. \nOlder version used for creating simple websites. \nHad limited support for audio, video, and modern features. \nRequired third-party plugins like Flash for multimedia.",
      codeExample: `
Feature	        HTML4	                        HTML5
Doctype    	Long and complex	        Simple: <!DOCTYPE html>
Multimedia	Needs plugins like Flash	Supports <audio>, <video>
New Tags	No semantic tags	        Has tags like <header>, <footer>
Storage	        No local storage	        Has localStorage, sessionStorage
Form Features	Basic input types	        New input types like email, date
Mobile Support	Not mobile-friendly	        Designed for mobile and responsive`
    },
  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>React.js Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
