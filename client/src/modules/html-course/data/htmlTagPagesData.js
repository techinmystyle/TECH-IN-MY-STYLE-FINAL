const tagPagesData = [
  {
    tag: 'a',
    description: 'The <a> tag defines a hyperlink, which is used to link from one page to another. The most important attribute is the href attribute, which indicates the link destination.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anchor Tag Example</title>
  <style>
    a { color: #007bff; text-decoration: none; padding: 2px 4px; border-radius: 2px; transition: all 0.3s; }
    a:hover { background: #e8f0fe; text-decoration: underline; }
    .link-demo { background: #f8f9fa; padding: 15px; border-radius: 6px; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Anchor Tag Examples:</h2>

  <div class="link-demo">
    <h3>Basic Links:</h3>
    <p><a href="https://www.example.com">Regular link to Example</a></p>
    <p><a href="https://www.example.com" target="_blank">Open in new tab</a></p>
    <p><a href="https://www.example.com" target="_self">Open in same tab</a></p>
  </div>

  <div class="link-demo">
    <h3>Special Links:</h3>
    <p><a href="#section1">Jump to Section 1 Below</a></p>
    <p><a href="mailto:contact@example.com">Send Email</a></p>
    <p><a href="tel:+14155552671">Call: +1-415-555-2671</a></p>
    <p><a href="https://example.com/file.pdf" download>Download PDF</a></p>
  </div>

  <h3 id="section1">Section 1 - Successfully Jumped Here!</h3>
  <mark>Click links above to see different behaviors</mark>
</body>
</html>`
  },
  {
    tag: 'abbr',
    description: 'The <abbr> tag defines an abbreviation or acronym. The title attribute shows the full form when hovered.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Abbreviation Tag Example</title>
  <style>
    abbr { border-bottom: 2px dotted #007bff; cursor: help; padding: 2px 0; }
    .info-box { background: #e8f4fd; padding: 15px; border-radius: 6px; margin: 10px 0; border-left: 4px solid #007bff; }
  </style>
</head>
<body>
  <h2>Abbreviation Tag Examples:</h2>

  <div class="info-box">
    <p>The <abbr title="World Health Organization">WHO</abbr> was established in 1948.</p>
    <p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of web pages.</p>
    <p><abbr title="Cascading Style Sheets">CSS</abbr> controls visual presentation.</p>
    <p><abbr title="National Aeronautics and Space Administration">NASA</abbr> explores space.</p>
    <p><abbr title="As Soon As Possible">ASAP</abbr> means immediately.</p>
  </div>

  <mark>Hover over abbreviations to see full forms</mark>
</body>
</html>`
  },
  {
    tag: 'address',
    description: 'The <address> tag defines contact information for the author/owner of a document.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Address Tag Example</title>
  <style>
    address { background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #28a745; font-style: italic; line-height: 1.8; }
    a { color: #007bff; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h2>Address Tag Examples:</h2>

  <h3>Author Contact:</h3>
  <address>
    Written by <a href="mailto:author@example.com">John Developer</a><br>
    Location: San Francisco, CA<br>
    Email: <a href="mailto:contact@example.com">contact@example.com</a><br>
    Phone: <a href="tel:+14155552671">+1-415-555-2671</a>
  </address>

  <h3>Business Address:</h3>
  <address>
    <strong>Tech Academy Inc.</strong><br>
    456 Code Street<br>
    Silicon Valley, CA 94025<br>
    <a href="mailto:info@techacademy.com">info@techacademy.com</a>
  </address>

  <mark>Address information is semantic and searchable</mark>
</body>
</html>`
  },
  {
    tag: 'article',
    description: 'The <article> tag specifies independent, self-contained content like blog posts or news items.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Article Tag Example</title>
  <style>
    article { border: 1px solid #ddd; padding: 20px; margin: 15px 0; border-radius: 8px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    article h3 { color: #007bff; margin-top: 0; }
    footer { color: #888; font-size: 0.9em; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px; }
  </style>
</head>
<body>
  <h2>Article Tag Examples:</h2>

  <article>
    <h3>Understanding HTML Semantics</h3>
    <p>Semantic HTML improves accessibility and search engine optimization. Using proper tags like article, section, and nav makes your content more meaningful.</p>
    <footer>
      By Jane Smith | <time datetime="2024-01-15">January 15, 2024</time>
    </footer>
  </article>

  <article>
    <h3>CSS Grid vs Flexbox</h3>
    <p>While Flexbox excels at one-dimensional layouts, CSS Grid is powerful for two-dimensional designs. Understanding when to use each is crucial for modern web development.</p>
    <footer>
      By Mike Johnson | <time datetime="2024-01-20">January 20, 2024</time>
    </footer>
  </article>

  <mark>Each article is independent and can be distributed separately</mark>
</body>
</html>`
  },
  {
    tag: 'aside',
    description: 'The <aside> tag defines content placed aside from the main content, like sidebars or related information.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aside Tag Example</title>
  <style>
    body { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; font-family: Arial, sans-serif; padding: 20px; }
    main { background: white; }
    aside { background: #f0f4ff; padding: 15px; border-radius: 8px; border-left: 4px solid #007bff; }
    aside h4 { margin-top: 0; color: #007bff; }
    aside ul { list-style: none; padding-left: 0; }
    aside li { padding: 5px 0; }
  </style>
</head>
<body>
  <main>
    <h2>Web Development Fundamentals</h2>
    <p>HTML provides structure to web content. It defines elements like headings, paragraphs, links, and images. Combined with CSS for styling and JavaScript for interactivity, HTML forms the complete web development toolkit.</p>
    <p>Understanding semantic HTML is crucial for creating accessible, SEO-friendly websites that work well across all devices and browsers.</p>
  </main>

  <aside>
    <h4>Quick Facts</h4>
    <ul>
      <li>HTML created: 1989</li>
      <li>Current version: HTML5</li>
      <li>Standardized by: W3C</li>
    </ul>

    <h4>Related Topics</h4>
    <ul>
      <li>CSS Styling</li>
      <li>JavaScript DOM</li>
      <li>Web Accessibility</li>
      <li>SEO Basics</li>
    </ul>
  </aside>

  <mark>Aside content is tangentially related to main content</mark>
</body>
</html>`
  },
  {
    tag: 'audio',
    description: 'The <audio> tag embeds sound content. It supports multiple source formats for browser compatibility.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Tag Example</title>
  <style>
    .audio-demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #28a745; }
    audio { width: 100%; margin: 10px 0; }
    h3 { color: #333; }
  </style>
</head>
<body>
  <h2>Audio Tag Examples:</h2>

  <div class="audio-demo">
    <h3>Basic Audio with Controls:</h3>
    <audio controls>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>

  <div class="audio-demo">
    <h3>Autoplay and Loop:</h3>
    <audio controls autoplay loop>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>

  <div class="audio-demo">
    <h3>Muted Audio (Background):</h3>
    <audio controls muted>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>

  <h3>Audio Attributes:</h3>
  <ul>
    <li><strong>controls</strong> - Shows play/pause controls</li>
    <li><strong>autoplay</strong> - Starts playing automatically</li>
    <li><strong>loop</strong> - Repeats after ending</li>
    <li><strong>muted</strong> - Audio is muted initially</li>
    <li><strong>preload</strong> - When to load audio (auto, metadata, none)</li>
  </ul>

  <mark>Multiple source formats ensure compatibility</mark>
</body>
</html>`
  },
  {
    tag: 'b',
    description: 'The <b> tag specifies bold text without semantic importance. Use for visual emphasis only.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bold Tag Example</title>
  <style>
    .demo-box { background: #f8f9fa; padding: 15px; border-radius: 6px; margin: 10px 0; }
    .comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Bold (b) Tag Examples:</h2>

  <div class="demo-box">
    <h3>Visual Emphasis:</h3>
    <p>Product: <b>Premium Laptop Pro X1</b> - Now in stock!</p>
    <p>Recipe: Mix <b>2 cups flour</b>, <b>1 cup sugar</b>, and <b>3 eggs</b>.</p>
    <p>Key technologies: <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.</p>
  </div>

  <div class="comparison">
    <div>
      <h4>Using b tag:</h4>
      <p>This text is <b>bold</b> - visual only</p>
    </div>
    <div>
      <h4>Using strong tag:</h4>
      <p>This text is <strong>important</strong> - semantic</p>
    </div>
  </div>

  <mark>Use &lt;b&gt; for stylistic bolding, &lt;strong&gt; for semantic importance</mark>
</body>
</html>`
  },
  {
    tag: 'base',
    description: 'The <base> tag specifies the base URL and target for all relative URLs in a document.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Base Tag Example</title>
  <base href="https://www.example.com/" target="_blank">
  <style>
    .code-box { background: #f4f4f4; padding: 15px; border-radius: 6px; font-family: monospace; margin: 10px 0; border-left: 3px solid #007bff; }
    a { color: #007bff; }
  </style>
</head>
<body>
  <h2>Base Tag Example:</h2>

  <p>The base tag in the head sets: href="https://www.example.com/" and target="_blank"</p>

  <h3>Relative Links (resolve using base URL):</h3>
  <ul>
    <li><a href="about.html">About Us</a> → https://www.example.com/about.html</li>
    <li><a href="services.html">Services</a> → https://www.example.com/services.html</li>
    <li><a href="images/logo.png">Logo</a> → https://www.example.com/images/logo.png</li>
  </ul>

  <div class="code-box">
    &lt;base href="https://www.example.com/" target="_blank"&gt;
  </div>

  <h3>Base Tag Attributes:</h3>
  <ul>
    <li><strong>href</strong> - Base URL for relative URLs</li>
    <li><strong>target</strong> - Default target for all links</li>
  </ul>

  <mark>Only one base element allowed per document, must be in head</mark>
</body>
</html>`
  },
  {
    tag: 'bdi',
    description: 'The <bdi> tag isolates text that might have different directionality, useful for multilingual content.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BDI Tag Example</title>
  <style>
    .leaderboard { background: #f8f9fa; padding: 15px; border-radius: 8px; }
    .leaderboard li { padding: 8px 0; border-bottom: 1px solid #ddd; }
    .leaderboard li:last-child { border-bottom: none; }
  </style>
</head>
<body>
  <h2>BDI (Bidirectional Isolation) Tag:</h2>

  <p>BDI safely handles names and content from different language backgrounds.</p>

  <h3>Leaderboard Example:</h3>
  <div class="leaderboard">
    <ol>
      <li>Rank 1: <bdi>Ahmed Mohamed</bdi> - 950 points</li>
      <li>Rank 2: <bdi>Juan García</bdi> - 920 points</li>
      <li>Rank 3: <bdi>李明</bdi> - 890 points</li>
      <li>Rank 4: <bdi>Sarah Johnson</bdi> - 850 points</li>
      <li>Rank 5: <bdi>Yuki Tanaka</bdi> - 810 points</li>
    </ol>
  </div>

  <h3>Use Cases:</h3>
  <ul>
    <li>User-generated names from different languages</li>
    <li>Mixed LTR and RTL text</li>
    <li>Foreign language citations</li>
    <li>International product listings</li>
  </ul>

  <mark>BDI prevents layout issues with bidirectional text</mark>
</body>
</html>`
  },
  {
    tag: 'bdo',
    description: 'The <bdo> tag overrides text direction. Use dir="rtl" for right-to-left or dir="ltr" for left-to-right.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BDO Tag Example</title>
  <style>
    .direction-demo { background: #f8f9fa; padding: 10px; margin: 5px 0; border-radius: 4px; }
  </style>
</head>
<body>
  <h2>BDO (Bidirectional Override) Tag:</h2>

  <h3>Normal Text Direction:</h3>
  <p>This is normal left-to-right text.</p>

  <h3>Right-to-Left Override:</h3>
  <div class="direction-demo">
    <p>Normal: Hello World</p>
    <p>RTL: <bdo dir="rtl">Hello World</bdo></p>
  </div>

  <h3>Word Reversal Examples:</h3>
  <div class="direction-demo">
    <p>Normal word: <strong>Reversed</strong></p>
    <p>RTL output: <bdo dir="rtl">desreveR</bdo></p>
  </div>

  <h3>BDO Attributes:</h3>
  <ul>
    <li><strong>dir="ltr"</strong> - Left to Right</li>
    <li><strong>dir="rtl"</strong> - Right to Left</li>
  </ul>

  <mark>BDO changes visual direction, not semantic meaning</mark>
</body>
</html>`
  },
  {
    tag: 'blockquote',
    description: 'The <blockquote> tag specifies a section quoted from another source, typically indented.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blockquote Tag Example</title>
  <style>
    blockquote {
      border-left: 4px solid #007bff;
      padding: 15px 20px;
      margin: 15px 0;
      background: #f0f4ff;
      color: #333;
      font-style: italic;
      border-radius: 0 6px 6px 0;
    }
    blockquote footer { font-style: normal; color: #666; font-size: 0.9em; margin-top: 10px; }
  </style>
</head>
<body>
  <h2>Blockquote Tag Examples:</h2>

  <blockquote>
    <p>The only way to do great work is to love what you do.</p>
    <footer>— Steve Jobs</footer>
  </blockquote>

  <blockquote>
    <p>Innovation distinguishes between a leader and a follower.</p>
    <footer>— Steve Jobs</footer>
  </blockquote>

  <blockquote>
    <p>Life is what happens when you're busy making other plans.</p>
    <footer>— John Lennon</footer>
  </blockquote>

  <h3>Blockquote Features:</h3>
  <ul>
    <li>Semantically indicates quoted content</li>
    <li>Can include cite attribute for source URL</li>
    <li>Footer element for attribution</li>
    <li>Helpful for testimonials and quotes</li>
  </ul>

  <mark>Use for long quotations; use &lt;q&gt; for inline quotes</mark>
</body>
</html>`
  },
  {
    tag: 'button',
    description: 'The <button> tag defines a clickable button used to trigger actions or submit forms.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Tag Example</title>
  <style>
    button { margin: 5px; padding: 10px 20px; border-radius: 5px; cursor: pointer; border: none; font-weight: bold; transition: all 0.3s; }
    .primary { background: #007bff; color: white; }
    .primary:hover { background: #0056b3; }
    .success { background: #28a745; color: white; }
    .success:hover { background: #218838; }
    .danger { background: #dc3545; color: white; }
    .danger:hover { background: #c82333; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
    .button-group { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Button Tag Examples:</h2>

  <div class="button-group">
    <h3>Button Types:</h3>
    <button type="button" class="primary" onclick="alert('Button clicked!')">Click Me</button>
    <button type="submit" class="success">Submit Form</button>
    <button type="reset" class="primary">Reset Form</button>
  </div>

  <div class="button-group">
    <h3>Button Styles:</h3>
    <button class="primary">Primary Action</button>
    <button class="success">Success Action</button>
    <button class="danger">Delete Item</button>
    <button disabled>Disabled Button</button>
  </div>

  <div class="button-group">
    <h3>Form Example:</h3>
    <form onsubmit="event.preventDefault(); alert('Form submitted!');">
      <input type="text" placeholder="Enter your name" required>
      <button type="submit" class="success">Submit</button>
      <button type="reset" class="primary">Clear</button>
    </form>
  </div>

  <mark>Buttons can have type: button, submit, or reset</mark>
</body>
</html>`
  },
  {
    tag: 'canvas',
    description: 'The <canvas> tag is a container for graphics drawn with JavaScript using the Canvas API.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Canvas Tag Example</title>
  <style>
    canvas { border: 2px solid #ddd; border-radius: 6px; display: block; margin: 15px 0; background: white; }
    .canvas-demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Canvas Tag Examples:</h2>

  <div class="canvas-demo">
    <h3>Rectangle and Shapes:</h3>
    <canvas id="shapeCanvas" width="350" height="150"></canvas>
  </div>

  <div class="canvas-demo">
    <h3>Circle and Arc:</h3>
    <canvas id="circleCanvas" width="350" height="150"></canvas>
  </div>

  <div class="canvas-demo">
    <h3>Text and Lines:</h3>
    <canvas id="textCanvas" width="350" height="150"></canvas>
  </div>

  <script>
    // Shapes: Rectangle
    const ctx1 = document.getElementById('shapeCanvas').getContext('2d');
    ctx1.fillStyle = '#007bff';
    ctx1.fillRect(20, 20, 120, 80);
    ctx1.strokeStyle = '#dc3545';
    ctx1.lineWidth = 3;
    ctx1.strokeRect(160, 20, 120, 80);
    ctx1.fillStyle = '#28a745';
    ctx1.beginPath();
    ctx1.moveTo(290, 20);
    ctx1.lineTo(340, 80);
    ctx1.lineTo(290, 140);
    ctx1.closePath();
    ctx1.fill();

    // Circle
    const ctx2 = document.getElementById('circleCanvas').getContext('2d');
    ctx2.beginPath();
    ctx2.arc(80, 75, 50, 0, Math.PI * 2);
    ctx2.fillStyle = '#28a745';
    ctx2.fill();
    ctx2.strokeStyle = '#333';
    ctx2.lineWidth = 2;
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(200, 75, 40, 0, Math.PI);
    ctx2.fillStyle = '#ffc107';
    ctx2.fill();
    ctx2.stroke();

    // Text
    const ctx3 = document.getElementById('textCanvas').getContext('2d');
    ctx3.font = 'bold 24px Arial';
    ctx3.fillStyle = '#007bff';
    ctx3.fillText('Canvas Drawing!', 50, 60);
    ctx3.font = '14px Arial';
    ctx3.fillStyle = '#666';
    ctx3.fillText('Interactive graphics with JavaScript', 50, 100);
  </script>

  <mark>Canvas requires JavaScript to draw graphics</mark>
</body>
</html>`
  },
  {
    tag: 'caption',
    description: 'The <caption> tag defines a title for a table. It must be placed immediately after the opening <table> tag.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Caption Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 15px 0; }
    caption { font-size: 1.2em; font-weight: bold; padding: 12px; background: #e9ecef; text-align: left; border-radius: 6px 6px 0 0; }
    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
    th { background: #007bff; color: white; }
    tbody tr:hover { background: #f0f4ff; }
  </style>
</head>
<body>
  <h2>Caption Tag Examples:</h2>

  <table>
    <caption>Student Performance Report - 2024</caption>
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Subject</th>
        <th>Score</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice Johnson</td><td>Mathematics</td><td>95</td><td>A+</td></tr>
      <tr><td>Bob Smith</td><td>Science</td><td>87</td><td>B+</td></tr>
      <tr><td>Carol Davis</td><td>English</td><td>92</td><td>A</td></tr>
      <tr><td>David Lee</td><td>History</td><td>78</td><td>C+</td></tr>
    </tbody>
  </table>

  <table>
    <caption>Monthly Sales Summary</caption>
    <thead>
      <tr><th>Month</th><th>Sales</th><th>Revenue</th></tr>
    </thead>
    <tbody>
      <tr><td>January</td><td>156</td><td>$18,500</td></tr>
      <tr><td>February</td><td>189</td><td>$22,300</td></tr>
      <tr><td>March</td><td>201</td><td>$25,100</td></tr>
    </tbody>
  </table>

  <mark>Caption provides context for table data</mark>
</body>
</html>`
  },
  {
    tag: 'cite',
    description: 'The <cite> tag defines the title of a creative work like a book, song, movie, or painting.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cite Tag Example</title>
  <style>
    cite { font-style: italic; color: #007bff; }
    .quote-box { background: #f0f4ff; padding: 15px; border-left: 4px solid #007bff; border-radius: 0 6px 6px 0; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Cite Tag Examples:</h2>

  <h3>Books:</h3>
  <p><cite>To Kill a Mockingbird</cite> by Harper Lee is a classic novel.</p>
  <p>I recommend reading <cite>1984</cite> by George Orwell.</p>

  <h3>Movies and Shows:</h3>
  <p>My favorite movie is <cite>The Shawshank Redemption</cite>.</p>
  <p><cite>Inception</cite> features mind-bending science fiction concepts.</p>

  <h3>Music:</h3>
  <p>The song <cite>Bohemian Rhapsody</cite> was performed by Queen.</p>
  <p><cite>Imagine</cite> by John Lennon is an iconic track.</p>

  <h3>Quotes with Citations:</h3>
  <div class="quote-box">
    <blockquote>
      <p>It was the best of times, it was the worst of times.</p>
      <footer>From <cite>A Tale of Two Cities</cite> by Charles Dickens</footer>
    </blockquote>
  </div>

  <mark>Cite tag is for work titles, not for author citations</mark>
</body>
</html>`
  },
  {
    tag: 'code',
    description: 'The <code> tag defines a piece of computer code displayed in monospace font.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Tag Example</title>
  <style>
    code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace; color: #d73a49; }
    pre { background: #282c34; color: #abb2bf; padding: 15px; border-radius: 6px; overflow-x: auto; font-size: 14px; line-height: 1.6; }
    pre code { color: #abb2bf; background: none; padding: 0; }
    .inline-demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Code Tag Examples:</h2>

  <div class="inline-demo">
    <h3>Inline Code:</h3>
    <p>Use <code>console.log()</code> to print output in JavaScript.</p>
    <p>The <code>document.getElementById()</code> method finds elements by ID.</p>
    <p>In Python, use <code>print()</code> to display text.</p>
  </div>

  <div class="inline-demo">
    <h3>Code Block (with pre):</h3>
    <pre><code>function greet(name) {
  const message = "Hello, " + name + "!";
  console.log(message);
  return message;
}

greet("World");</code></pre>
  </div>

  <div class="inline-demo">
    <h3>HTML Code Example:</h3>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
  </div>

  <mark>Always use &lt;pre&gt; with &lt;code&gt; for multi-line code</mark>
</body>
</html>`
  },
  {
    tag: 'col',
    description: 'The <col> tag specifies column properties within a <colgroup> element for styling entire table columns.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Col Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 15px 0; }
    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
    th { background: #007bff; color: white; }
  </style>
</head>
<body>
  <h2>Col Tag Example:</h2>

  <h3>Column-Specific Styling:</h3>
  <table>
    <colgroup>
      <col style="background-color: #fffde7; width: 25%;">
      <col style="background-color: #d4edda; width: 25%;">
      <col style="background-color: #cce5ff; width: 25%;">
      <col style="background-color: #f8d7da; width: 25%;">
    </colgroup>
    <thead>
      <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Score</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice</td><td>Math</td><td>95</td><td>A</td></tr>
      <tr><td>Bob</td><td>Science</td><td>82</td><td>B</td></tr>
      <tr><td>Carol</td><td>English</td><td>91</td><td>A-</td></tr>
    </tbody>
  </table>

  <h3>Using col with span:</h3>
  <table>
    <colgroup>
      <col span="2" style="background-color: #e2e3e5;">
      <col style="background-color: #d1ecf1;">
    </colgroup>
    <tr><th>Product</th><th>Category</th><th>Price</th></tr>
    <tr><td>Laptop</td><td>Electronics</td><td>$999</td></tr>
    <tr><td>Book</td><td>Education</td><td>$29</td></tr>
  </table>

  <mark>Col allows styling entire columns at once</mark>
</body>
</html>`
  },
  {
    tag: 'colgroup',
    description: 'The <colgroup> tag groups one or more <col> elements for applying styles to multiple columns.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colgroup Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 650px; margin: 15px 0; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: center; }
    th { background: #007bff; color: white; }
  </style>
</head>
<body>
  <h2>Colgroup Tag Example:</h2>

  <table>
    <colgroup>
      <col style="background-color: #fffde7;">
      <col span="2" style="background-color: #d4edda;">
      <col style="background-color: #cce5ff;">
    </colgroup>
    <thead>
      <tr>
        <th>Product</th>
        <th>Q1 Sales</th>
        <th>Q2 Sales</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Widgets</td><td>150</td><td>180</td><td>330</td></tr>
      <tr><td>Gadgets</td><td>200</td><td>220</td><td>420</td></tr>
      <tr><td>Tools</td><td>120</td><td>140</td><td>260</td></tr>
    </tbody>
  </table>

  <mark>Colgroup groups columns for styling or span multiple columns</mark>
</body>
</html>`
  },
  {
    tag: 'data',
    description: 'The <data> tag links content with a machine-readable value for scripts and data processing.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data Tag Example</title>
  <style>
    .product-list { background: #f8f9fa; padding: 15px; border-radius: 8px; }
    .product-item { background: white; padding: 12px; margin: 8px 0; border-radius: 4px; border-left: 4px solid #007bff; }
  </style>
</head>
<body>
  <h2>Data Tag Example:</h2>

  <p>The data tag embeds machine-readable values alongside human-readable text.</p>

  <h3>Product Catalog:</h3>
  <div class="product-list">
    <div class="product-item">
      <data value="SKU-001">iPhone 15 Pro - $999</data>
    </div>
    <div class="product-item">
      <data value="SKU-002">Samsung Galaxy S24 - $899</data>
    </div>
    <div class="product-item">
      <data value="SKU-003">Google Pixel 8 - $699</data>
    </div>
  </div>

  <h3>Temperature Data:</h3>
  <p>Room temperature: <data value="21.5">21.5°C</data></p>
  <p>Water freezing point: <data value="0">0°C</data></p>

  <h3>Menu Pricing:</h3>
  <ul>
    <li><data value="3.50">Small Coffee</data></li>
    <li><data value="4.50">Medium Coffee</data></li>
    <li><data value="5.50">Large Coffee</data></li>
  </ul>

  <mark>Data values are machine-readable for processing and scripting</mark>
</body>
</html>`
  },
  {
    tag: 'datalist',
    description: 'The <datalist> tag provides autocomplete suggestions for an <input> element.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datalist Tag Example</title>
  <style>
    .input-group { margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    input { padding: 8px; width: 300px; border: 1px solid #ccc; border-radius: 4px; }
    input:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 3px rgba(0,123,255,0.15); }
  </style>
</head>
<body>
  <h2>Datalist Tag Example:</h2>

  <p>Start typing to see autocomplete suggestions:</p>

  <div class="input-group">
    <label for="country">Select a Country:</label>
    <input list="countries" id="country" placeholder="Try typing 'united' or 'ind'...">
    <datalist id="countries">
      <option value="United States">
      <option value="United Kingdom">
      <option value="United Arab Emirates">
      <option value="India">
      <option value="Indonesia">
      <option value="Ireland">
      <option value="Canada">
      <option value="Australia">
      <option value="Germany">
      <option value="France">
    </datalist>
  </div>

  <div class="input-group">
    <label for="language">Programming Language:</label>
    <input list="languages" id="language" placeholder="Try typing 'java' or 'python'...">
    <datalist id="languages">
      <option value="HTML">
      <option value="CSS">
      <option value="JavaScript">
      <option value="TypeScript">
      <option value="Python">
      <option value="Java">
      <option value="C++">
      <option value="PHP">
      <option value="Ruby">
      <option value="Go">
    </datalist>
  </div>

  <mark>Datalist provides suggestions while allowing custom input</mark>
</body>
</html>`
  },
  {
    tag: 'dd',
    description: 'The <dd> tag defines the description in a <dl> (description list) paired with <dt> (term).',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DD Tag Example</title>
  <style>
    dl { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0; }
    dt { font-weight: bold; color: #007bff; margin-top: 12px; }
    dd { margin-left: 20px; margin-bottom: 10px; color: #666; line-height: 1.6; }
  </style>
</head>
<body>
  <h2>DD (Description) Tag Examples:</h2>

  <h3>Glossary:</h3>
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language is the standard markup language for creating web pages and web applications.</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML.</dd>

    <dt>JavaScript</dt>
    <dd>JavaScript is a programming language commonly used to create interactive effects within web browsers.</dd>

    <dt>API</dt>
    <dd>Application Programming Interface is a set of protocols and tools for building software applications.</dd>

    <dt>DOM</dt>
    <dd>Document Object Model is a programming interface for web documents that represents the page structure.</dd>
  </dl>

  <h3>Web Concepts:</h3>
  <dl>
    <dt>Responsive Design</dt>
    <dd>Design approach that makes websites work well on devices of all sizes and resolutions.</dd>

    <dt>SEO</dt>
    <dd>Search Engine Optimization refers to practices that improve website visibility in search results.</dd>

    <dt>Accessibility</dt>
    <dd>The practice of making websites usable by everyone, including people with disabilities.</dd>
  </dl>

  <mark>DD provides descriptions for terms in a definition list</mark>
</body>
</html>`
  },
  {
    tag: 'del',
    description: 'The <del> tag marks text that has been deleted, typically displayed with strikethrough.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Del Tag Example</title>
  <style>
    del { color: #dc3545; text-decoration: line-through; }
    ins { color: #28a745; background: #d4edda; text-decoration: none; padding: 0 2px; }
    .revision-box { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #ffc107; }
  </style>
</head>
<body>
  <h2>Del (Deleted Text) Tag Examples:</h2>

  <div class="revision-box">
    <h3>Corrections:</h3>
    <p>My favorite color is <del>blue</del> <ins>green</ins>.</p>
    <p>The event is on <del>Friday</del> <ins>Saturday</ins>.</p>
  </div>

  <div class="revision-box">
    <h3>Price Changes:</h3>
    <p>Sale Price: <del>$199.99</del> <ins>$99.99</ins></p>
    <p>Regular: <del>$50/month</del> <ins>$30/month</ins></p>
  </div>

  <div class="revision-box">
    <h3>Document Revisions:</h3>
    <p><del datetime="2024-01-15">The meeting is scheduled for 10 AM.</del></p>
    <p><ins datetime="2024-01-16">The meeting has been moved to 2 PM.</ins></p>
  </div>

  <h3>Shopping List:</h3>
  <ul>
    <li><del>Milk</del> ✓</li>
    <li><del>Eggs</del> ✓</li>
    <li>Bread</li>
    <li>Cheese</li>
  </ul>

  <mark>Del marks deletions; ins marks insertions for version tracking</mark>
</body>
</html>`
  },
  {
    tag: 'details',
    description: 'The <details> tag creates a disclosure widget with a <summary> that users can click to expand/collapse.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Details Tag Example</title>
  <style>
    details { border: 1px solid #ddd; border-radius: 6px; margin: 10px 0; overflow: hidden; }
    summary { background: #007bff; color: white; padding: 12px 16px; cursor: pointer; font-weight: bold; }
    summary:hover { background: #0056b3; }
    details[open] summary { background: #0056b3; }
    details > *:not(summary) { padding: 15px 16px; background: white; }
  </style>
</head>
<body>
  <h2>Details Tag Examples:</h2>

  <details>
    <summary>What is HTML?</summary>
    <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of websites.</p>
  </details>

  <details>
    <summary>What is CSS?</summary>
    <p>CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, and animations.</p>
  </details>

  <details open>
    <summary>What is JavaScript? (Open by default)</summary>
    <p>JavaScript is a programming language that enables interactive and dynamic content on web pages, including user interactions and animations.</p>
  </details>

  <details>
    <summary>System Requirements</summary>
    <ul>
      <li>Operating System: Windows 10+ or macOS 10.12+</li>
      <li>RAM: Minimum 4GB</li>
      <li>Storage: At least 10GB free</li>
      <li>Browser: Chrome, Firefox, Safari, or Edge (latest)</li>
      <li>Internet: Broadband connection recommended</li>
    </ul>
  </details>

  <details>
    <summary>Troubleshooting Guide</summary>
    <p><strong>Issue:</strong> Page not loading</p>
    <p><strong>Solution:</strong> Clear browser cache and refresh the page.</p>
  </details>

  <mark>Click summaries to toggle details visibility</mark>
</body>
</html>`
  },
  {
    tag: 'dfn',
    description: 'The <dfn> tag marks the term being defined within a definition phrase.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dfn Tag Example</title>
  <style>
    dfn { font-weight: bold; color: #007bff; font-style: italic; }
    .definition-box { background: #f0f4ff; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #007bff; }
  </style>
</head>
<body>
  <h2>Dfn (Definition) Tag Examples:</h2>

  <div class="definition-box">
    <p><dfn>HTML</dfn> is the standard markup language for creating web pages and applications.</p>
    <p><dfn>CSS</dfn> provides styling and layout capabilities for HTML documents.</p>
    <p><dfn>JavaScript</dfn> enables interactive and dynamic behavior on web pages.</p>
  </div>

  <div class="definition-box">
    <p>The <dfn title="World Wide Web Consortium">W3C</dfn> is the main international standards organization for the web.</p>
  </div>

  <div class="definition-box">
    <h3>Important Terms:</h3>
    <p><dfn>Responsive Design</dfn> means a website adapts to different screen sizes and devices.</p>
    <p><dfn>Accessibility</dfn> ensures websites are usable by everyone, including people with disabilities.</p>
    <p><dfn>SEO</dfn> refers to practices that improve a website's visibility in search results.</p>
  </div>

  <h3>Technical Glossary:</h3>
  <dl>
    <dt><dfn>API</dfn></dt>
    <dd>Application Programming Interface - a set of rules for software communication.</dd>
    <dt><dfn>DOM</dfn></dt>
    <dd>Document Object Model - a representation of the page structure.</dd>
  </dl>

  <mark>DFN marks the term being defined for the first time</mark>
</body>
</html>`
  },
  {
    tag: 'dialog',
    description: 'The <dialog> tag defines a dialog box or modal window opened with showModal() or close() methods.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dialog Tag Example</title>
  <style>
    dialog { border: none; border-radius: 8px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); min-width: 350px; }
    dialog h3 { margin-top: 0; color: #007bff; }
    button { margin: 5px; padding: 8px 16px; border-radius: 4px; cursor: pointer; border: none; }
    .open-btn { background: #007bff; color: white; }
    .close-btn { background: #dc3545; color: white; }
    .button-group { margin-top: 15px; display: flex; gap: 10px; }
    .demo-buttons { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Dialog Tag Examples:</h2>

  <div class="demo-buttons">
    <button class="open-btn" onclick="document.getElementById('modal1').showModal()">Open Modal</button>
    <button class="open-btn" onclick="document.getElementById('modal2').showModal()">Confirmation Dialog</button>
    <button class="open-btn" onclick="document.getElementById('modal3').showModal()">Alert Dialog</button>
  </div>

  <dialog id="modal1">
    <h3>Welcome Dialog</h3>
    <p>This is a modal dialog box. Users must interact with it before returning to the main page.</p>
    <div class="button-group">
      <button class="close-btn" onclick="document.getElementById('modal1').close()">Close</button>
    </div>
  </dialog>

  <dialog id="modal2">
    <h3>Confirm Delete</h3>
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    <div class="button-group">
      <button class="close-btn" onclick="document.getElementById('modal2').close()">Cancel</button>
      <button style="background:#28a745; color:white;" onclick="alert('Deleted!'); document.getElementById('modal2').close()">Delete</button>
    </div>
  </dialog>

  <dialog id="modal3">
    <h3>Success!</h3>
    <p>Your action was completed successfully.</p>
    <div class="button-group">
      <button class="open-btn" onclick="document.getElementById('modal3').close()">OK</button>
    </div>
  </dialog>

  <mark>Use showModal() to display modal, close() to dismiss</mark>
</body>
</html>`
  },
  {
    tag: 'div',
    description: 'The <div> tag is a generic container for grouping elements and applying styles or scripts.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Div Tag Example</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .container { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }
    .main { background: white; }
    .card { background: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 15px; border-left: 4px solid #007bff; }
    .sidebar { background: #e9ecef; padding: 15px; border-radius: 8px; }
    .footer { background: #343a40; color: white; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Website Layout with Divs</h1>
    <p>Divs are essential for structuring page layouts</p>
  </div>

  <div class="container">
    <div class="main">
      <h2>Main Content</h2>

      <div class="card">
        <h3>Article 1</h3>
        <p>This is the primary content of the page. Divs group related elements together for styling and organization.</p>
      </div>

      <div class="card">
        <h3>Article 2</h3>
        <p>Multiple divs can be nested and styled independently using CSS classes or IDs.</p>
      </div>
    </div>

    <div class="sidebar">
      <h3>Sidebar</h3>
      <p>This sidebar is created using a div with grid layout.</p>
      <ul>
        <li>Related Topic 1</li>
        <li>Related Topic 2</li>
        <li>Related Topic 3</li>
      </ul>
    </div>
  </div>

  <div class="footer">
    <p>&copy; 2024 Website. All rights reserved.</p>
  </div>

  <mark>Divs are non-semantic; use semantic tags when possible</mark>
</body>
</html>`
  },
  {
    tag: 'dl',
    description: 'The <dl> tag defines a description list containing terms (<dt>) and their definitions (<dd>).',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DL Tag Example</title>
  <style>
    dl { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0; }
    dt { font-weight: bold; color: #007bff; margin-top: 12px; margin-bottom: 5px; }
    dd { margin-left: 20px; margin-bottom: 10px; color: #666; line-height: 1.6; }
  </style>
</head>
<body>
  <h2>DL (Description List) Examples:</h2>

  <h3>HTML Glossary:</h3>
  <dl>
    <dt>Semantic HTML</dt>
    <dd>HTML code that clearly describes its meaning and purpose, improving accessibility and SEO.</dd>

    <dt>Block Element</dt>
    <dd>HTML element that takes up the full width and starts on a new line (e.g., div, p, h1).</dd>

    <dt>Inline Element</dt>
    <dd>HTML element that only takes up as much width as necessary (e.g., span, a, strong).</dd>

    <dt>Void Element</dt>
    <dd>HTML element that has no closing tag (e.g., img, br, input, meta).</dd>
  </dl>

  <h3>Web Development Terms:</h3>
  <dl>
    <dt>DOM</dt>
    <dd>Document Object Model - the structure of a web page that JavaScript can manipulate.</dd>

    <dt>API</dt>
    <dd>Application Programming Interface - a set of rules for software applications to communicate.</dd>

    <dt>Responsive Design</dt>
    <dd>Design approach that makes websites work on devices of all sizes.</dd>

    <dt>Cross-browser Compatibility</dt>
    <dd>Ensuring websites work correctly on all major web browsers.</dd>
  </dl>

  <mark>DL is ideal for glossaries, definitions, and terminology</mark>
</body>
</html>`
  },
  {
    tag: 'dt',
    description: 'The <dt> tag defines a term in a <dl> (description list).',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DT Tag Example</title>
  <style>
    dl { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0; }
    dt { font-weight: bold; color: #007bff; font-size: 1.05em; margin-top: 12px; }
    dd { margin-left: 20px; margin-bottom: 10px; color: #666; }
  </style>
</head>
<body>
  <h2>DT (Definition Term) Tag:</h2>

  <h3>Technical Vocabulary:</h3>
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language used for creating web pages.</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets for styling web content.</dd>

    <dt>JavaScript</dt>
    <dd>Programming language for interactive web features.</dd>

    <dt>Responsive</dt>
    <dd>Design that adapts to different screen sizes.</dd>
  </dl>

  <h3>Business Terms:</h3>
  <dl>
    <dt>ROI</dt>
    <dd>Return on Investment - profit from an investment.</dd>

    <dt>UX</dt>
    <dd>User Experience - how users interact with a product.</dd>

    <dt>UI</dt>
    <dd>User Interface - visual elements users interact with.</dd>
  </dl>

  <mark>DT must be paired with DD in a DL element</mark>
</body>
</html>`
  },
  {
    tag: 'em',
    description: 'The <em> tag emphasizes text semantically, typically displayed in italic with semantic meaning.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Em Tag Example</title>
  <style>
    .example-box { background: #f0f4ff; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #007bff; }
    em { color: #d73a49; font-weight: 600; }
  </style>
</head>
<body>
  <h2>Em (Emphasis) Tag Examples:</h2>

  <div class="example-box">
    <h3>Important Statements:</h3>
    <p>You <em>must</em> submit the form before the deadline.</p>
    <p>The answer is <em>definitely not</em> what you expected.</p>
    <p>I <em>really</em> enjoy learning web development.</p>
  </div>

  <div class="example-box">
    <h3>Semantic Emphasis Changes Meaning:</h3>
    <p><em>Cats</em> are better than dogs. (emphasis on cats, not dogs)</p>
    <p>Cats are <em>better</em> than dogs. (better, not equal to)</p>
    <p>Cats are better than <em>dogs</em>. (comparing to dogs specifically)</p>
  </div>

  <div class="example-box">
    <h3>Em vs I vs B vs Strong:</h3>
    <ul>
      <li><em>Em</em> - Semantic emphasis (screen readers emphasize)</li>
      <li><i>Italic</i> - Visual italics only</li>
      <li><b>Bold</b> - Visual bold only</li>
      <li><strong>Strong</strong> - Semantic importance</li>
    </ul>
  </div>

  <mark>Em has semantic meaning; screen readers pronounce with stress</mark>
</body>
</html>`
  },
  {
    tag: 'embed',
    description: 'The <embed> tag embeds external content like plugins, media, or interactive applications.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Embed Tag Example</title>
  <style>
    .embed-demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #007bff; }
    embed { border-radius: 4px; }
  </style>
</head>
<body>
  <h2>Embed Tag Example:</h2>

  <div class="embed-demo">
    <h3>Embedded SVG Image:</h3>
    <embed src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100'%3E%3Crect width='200' height='100' fill='%23007bff'/%3E%3Ctext x='50' y='55' fill='white' font-size='18'%3EEmbedded SVG%3C/text%3E%3C/svg%3E" type="image/svg+xml" width="200" height="100">
  </div>

  <div class="embed-demo">
    <h3>Embed Attributes:</h3>
    <ul>
      <li><strong>src</strong> - URL of the embedded content</li>
      <li><strong>type</strong> - MIME type of the embedded content</li>
      <li><strong>width / height</strong> - Dimensions of the embedded content</li>
      <li><strong>style</strong> - CSS styling</li>
    </ul>
  </div>

  <div class="embed-demo">
    <h3>Common MIME Types:</h3>
    <ul>
      <li>image/svg+xml - SVG images</li>
      <li>application/pdf - PDF documents</li>
      <li>text/html - HTML pages</li>
      <li>application/x-shockwave-flash - Flash content</li>
    </ul>
  </div>

  <mark>For video/audio, use &lt;video&gt; or &lt;audio&gt; instead</mark>
</body>
</html>`
  },
  {
    tag: 'fieldset',
    description: 'The <fieldset> tag groups related form elements with a border and optional <legend> title.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fieldset Tag Example</title>
  <style>
    fieldset { border: 2px solid #007bff; border-radius: 6px; padding: 15px; margin: 15px 0; max-width: 400px; }
    legend { font-weight: bold; color: #007bff; padding: 0 10px; }
    .form-group { margin: 10px 0; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input { width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    button { margin-top: 10px; padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Fieldset Tag Example:</h2>

  <form>
    <fieldset>
      <legend>Personal Information</legend>
      <div class="form-group">
        <label for="fname">First Name:</label>
        <input type="text" id="fname" placeholder="Enter first name" required>
      </div>
      <div class="form-group">
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" placeholder="Enter last name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter email" required>
      </div>
    </fieldset>

    <fieldset>
      <legend>Address Details</legend>
      <div class="form-group">
        <label for="street">Street:</label>
        <input type="text" id="street" placeholder="Enter street address">
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" placeholder="Enter city">
      </div>
      <div class="form-group">
        <label for="country">Country:</label>
        <select id="country" style="width:100%; padding:6px;">
          <option>USA</option>
          <option>UK</option>
          <option>India</option>
        </select>
      </div>
    </fieldset>

    <button type="submit">Submit</button>
  </form>

  <mark>Fieldset helps organize form elements logically</mark>
</body>
</html>`
  },
  {
    tag: 'figcaption',
    description: 'The <figcaption> tag provides a caption for <figure> content.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Figcaption Tag Example</title>
  <style>
    figure { border: 1px solid #ddd; padding: 15px; display: inline-block; margin: 15px 10px 15px 0; border-radius: 8px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    figcaption { text-align: center; font-style: italic; color: #666; margin-top: 10px; font-weight: 500; }
    img { width: 200px; height: 150px; object-fit: cover; border-radius: 4px; display: block; background: #eee; }
  </style>
</head>
<body>
  <h2>Figcaption Tag Examples:</h2>

  <figure>
    <svg width="200" height="150" style="background:#f0f4ff;">
      <rect width="200" height="150" fill="#cce5ff"/>
      <text x="50" y="75" font-size="16" fill="#007bff">Sample Image 1</text>
    </svg>
    <figcaption>Fig 1: A descriptive caption for this figure</figcaption>
  </figure>

  <figure>
    <svg width="200" height="150" style="background:#d4edda;">
      <rect width="200" height="150" fill="#b1e0b6"/>
      <text x="50" y="75" font-size="16" fill="#28a745">Sample Image 2</text>
    </svg>
    <figcaption>Fig 2: Another figure with caption</figcaption>
  </figure>

  <figure>
    <pre style="margin:0;"><code>function example() {
  return "Hello";
}</code></pre>
    <figcaption>Code Listing 1: JavaScript function</figcaption>
  </figure>

  <mark>Figcaption provides context and attribution for figures</mark>
</body>
</html>`
  },
  {
    tag: 'figure',
    description: 'The <figure> tag groups self-contained content like images, diagrams, or code with an optional caption.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Figure Tag Example</title>
  <style>
    figure { border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin: 15px 0; background: #f9f9f9; }
    figcaption { font-style: italic; color: #666; margin-top: 10px; text-align: center; }
    svg { display: block; margin: auto; border-radius: 4px; }
  </style>
</head>
<body>
  <h2>Figure Tag Examples:</h2>

  <figure>
    <svg width="300" height="200" style="background:#f0f4ff;">
      <rect width="300" height="200" fill="#cce5ff"/>
      <circle cx="150" cy="100" r="40" fill="#007bff"/>
      <text x="100" y="180" font-size="16" fill="#333">Figure Illustration</text>
    </svg>
    <figcaption>Example of a figure with SVG graphics</figcaption>
  </figure>

  <figure>
    <svg width="300" height="150" style="background:#fffde7;">
      <rect width="300" height="150" fill="#fff8e1"/>
      <rect x="20" y="20" width="100" height="110" fill="#ffc107" stroke="#ff9800" stroke-width="2"/>
      <text x="30" y="85" font-size="14" fill="black">Chart</text>
    </svg>
    <figcaption>A sample chart figure</figcaption>
  </figure>

  <figure>
    <blockquote>The future belongs to those who believe in the beauty of their dreams.</blockquote>
    <figcaption>— Eleanor Roosevelt</figcaption>
  </figure>

  <mark>Figure groups visual content with semantic meaning</mark>
</body>
</html>`
  },
  {
    tag: 'footer',
    description: 'The <footer> tag defines footer content like copyright, links, and contact information.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Footer Tag Example</title>
  <style>
    body { display: flex; flex-direction: column; min-height: 100vh; font-family: Arial, sans-serif; }
    main { flex: 1; padding: 20px; max-width: 900px; margin: 0 auto; }
    footer { background: #343a40; color: white; padding: 30px 20px; margin-top: 20px; }
    .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px; }
    footer h4 { margin-top: 0; color: #ffc107; }
    footer a { color: #adb5bd; text-decoration: none; display: block; margin: 5px 0; }
    footer a:hover { color: white; }
    .footer-bottom { border-top: 1px solid #495057; padding-top: 15px; text-align: center; color: #6c757d; }
  </style>
</head>
<body>
  <main>
    <h2>Page Content</h2>
    <p>This page demonstrates footer usage. The footer is at the bottom.</p>
  </main>

  <footer>
    <div class="footer-grid">
      <div>
        <h4>Company</h4>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
      </div>
      <div>
        <h4>Resources</h4>
        <a href="#">Blog</a>
        <a href="#">Documentation</a>
        <a href="#">Support</a>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="mailto:info@example.com">info@example.com</a>
        <a href="tel:+14155552671">+1-415-555-2671</a>
      </div>
      <div>
        <h4>Legal</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Web Academy. All rights reserved.</p>
    </div>
  </footer>

  <mark>Footer appears at the bottom with company/contact information</mark>
</body>
</html>`
  },
  {
    tag: 'form',
    description: 'The <form> tag creates a user input form with various input elements and a submit button.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Tag Example</title>
  <style>
    form { max-width: 450px; background: #f8f9fa; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .form-group { margin-bottom: 15px; }
    label { display: block; font-weight: bold; margin-bottom: 5px; color: #333; }
    input, select, textarea { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-size: 14px; }
    input:focus, select:focus, textarea:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 3px rgba(0,123,255,0.15); }
    button { width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
    button:hover { background: #0056b3; }
  </style>
</head>
<body>
  <h2>Form Tag Example:</h2>

  <form onsubmit="event.preventDefault(); alert('Form submitted successfully!');">
    <h3>User Registration</h3>

    <div class="form-group">
      <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your full name" required>
    </div>

    <div class="form-group">
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" placeholder="example@email.com" required>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter password" required>
    </div>

    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" name="country" required>
        <option value="">-- Select Country --</option>
        <option value="usa">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="india">India</option>
      </select>
    </div>

    <div class="form-group">
      <label><input type="checkbox" name="terms"> I agree to Terms and Conditions</label>
    </div>

    <button type="submit">Register</button>
  </form>

  <mark>Forms collect and send user data to servers</mark>
</body>
</html>`
  },
  {
    tag: 'h1',
    description: 'The <h1> tag defines the main heading on a page. There should be only one h1 per page.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H1 Tag Example</title>
  <style>
    h1 { color: #1a1a2e; font-size: 2.5em; margin-bottom: 20px; border-bottom: 3px solid #007bff; padding-bottom: 10px; }
  </style>
</head>
<body>
  <h1>Main Page Title - Only One Per Page</h1>
  <p>This is the primary heading of the page. It should describe the main topic clearly for both users and search engines.</p>

  <h2>Why Use H1 Correctly?</h2>
  <ul>
    <li>Improves SEO - search engines prioritize h1 content</li>
    <li>Accessibility - screen readers use h1 for navigation</li>
    <li>Structure - defines page hierarchy clearly</li>
  </ul>

  <mark>Use only one &lt;h1&gt; per page for best results</mark>
</body>
</html>`
  },
  {
    tag: 'h2',
    description: 'The <h2> tag defines a second-level heading, used for main sections.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2 Tag Example</title>
  <style>
    h1 { color: #007bff; }
    h2 { color: #0056b3; font-size: 1.8em; margin-top: 20px; border-bottom: 2px solid #0056b3; padding-bottom: 5px; }
  </style>
</head>
<body>
  <h1>HTML Headings Guide</h1>

  <h2>Introduction to Headings</h2>
  <p>HTML provides six heading levels (h1-h6) to structure content hierarchically.</p>

  <h2>Best Practices</h2>
  <ul>
    <li>Use one h1 per page</li>
    <li>Use h2 for main sections</li>
    <li>Follow sequential order</li>
  </ul>

  <h2>Common Uses</h2>
  <p>H2 tags are perfect for section titles in articles, documentation, and web pages.</p>

  <mark>H2 starts the section hierarchy after H1</mark>
</body>
</html>`
  },
  {
    tag: 'h3',
    description: 'The <h3> tag defines a third-level heading, used for subsections.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H3 Tag Example</title>
  <style>
    h1 { color: #007bff; }
    h2 { color: #0056b3; }
    h3 { color: #0056b3; font-size: 1.3em; margin-top: 15px; }
  </style>
</head>
<body>
  <h1>Web Development Course</h1>

  <h2>Module 1: HTML Basics</h2>

  <h3>Introduction</h3>
  <p>Learn the fundamentals of HTML for web development.</p>

  <h3>HTML Elements</h3>
  <p>Understanding semantic and structural elements.</p>

  <h3>Best Practices</h3>
  <p>Writing clean and accessible HTML code.</p>

  <h2>Module 2: CSS Styling</h2>

  <h3>Selectors</h3>
  <p>CSS selectors for targeting HTML elements.</p>

  <h3>Layouts</h3>
  <p>Creating responsive layouts with Flexbox and Grid.</p>

  <mark>H3 breaks sections into subsections</mark>
</body>
</html>`
  },
  {
    tag: 'h4',
    description: 'The <h4> tag defines a fourth-level heading for sub-subsections.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H4 Tag Example</title>
  <style>
    h1 { color: #007bff; }
    h2 { color: #0056b3; }
    h3 { color: #0056b3; }
    h4 { color: #533483; font-size: 1.1em; }
  </style>
</head>
<body>
  <h1>Programming Languages</h1>

  <h2>Web Development</h2>
  <h3>Frontend</h3>
  <h4>JavaScript Frameworks</h4>
  <p>React, Vue, Angular are popular frameworks.</p>

  <h4>CSS Libraries</h4>
  <p>Tailwind, Bootstrap, Foundation for styling.</p>

  <h3>Backend</h3>
  <h4>Node.js Libraries</h4>
  <p>Express, Koa, Fastify for server development.</p>

  <h4>Database Tools</h4>
  <p>MongoDB, PostgreSQL, MySQL for data storage.</p>

  <mark>H4 provides deep structural hierarchy</mark>
</body>
</html>`
  },
  {
    tag: 'h5',
    description: 'The <h5> tag defines a fifth-level heading for detailed sub-subsections.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H5 Tag Example</title>
  <style>
    h1 { color: #007bff; }
    h2 { color: #0056b3; }
    h3 { color: #0056b3; }
    h4 { color: #533483; }
    h5 { color: #e94560; font-size: 1em; }
  </style>
</head>
<body>
  <h1>Advanced Web Development</h1>

  <h2>Performance Optimization</h2>
  <h3>Frontend Techniques</h3>
  <h4>Image Optimization</h4>
  <h5>WebP Format Benefits</h5>
  <p>Smaller file sizes with better quality compared to JPEG/PNG.</p>

  <h5>Lazy Loading Implementation</h5>
  <p>Load images only when they're about to be viewed.</p>

  <h4>Code Splitting</h4>
  <h5>Dynamic Imports</h5>
  <p>Load JavaScript modules on demand for faster initial load.</p>

  <mark>H5 provides very detailed content hierarchy</mark>
</body>
</html>`
  },
  {
    tag: 'h6',
    description: 'The <h6> tag defines a sixth-level heading, the smallest heading level.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H6 Tag Example</title>
  <style>
    h1 { color: #007bff; }
    h2 { color: #0056b3; }
    h3 { color: #0056b3; }
    h4 { color: #533483; }
    h5 { color: #e94560; }
    h6 { color: #999; font-size: 0.95em; }
  </style>
</head>
<body>
  <h1>Enterprise Solutions</h1>
  <h2>Cloud Infrastructure</h2>
  <h3>Deployment</h3>
  <h4>Kubernetes</h4>
  <h5>Container Orchestration</h5>
  <h6>Service Discovery and Load Balancing</h6>
  <p>Automatic service discovery with load balancing across containers.</p>

  <h6>Health Checks and Auto-Recovery</h6>
  <p>Automatic detection and recovery of failed containers.</p>

  <mark>H6 is the smallest and deepest level heading</mark>
</body>
</html>`
  },
  {
    tag: 'header',
    description: 'The <header> tag represents introductory content, logos, navigation menus, and site titles.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Header Tag Example</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    header { background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .logo { font-size: 1.5em; font-weight: bold; }
    nav a { color: white; text-decoration: none; margin-left: 25px; transition: all 0.3s; }
    nav a:hover { opacity: 0.8; border-bottom: 2px solid white; }
    main { padding: 20px; }
    article header { background: #e9ecef; color: #333; padding: 10px 15px; border-left: 4px solid #007bff; margin: 15px 0; }
  </style>
</head>
<body>
  <header>
    <div class="logo">Tech Academy</div>
    <nav>
      <a href="#">Home</a>
      <a href="#">Courses</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main>
    <h2>Web Page Header</h2>
    <p>The header above contains the main site navigation and branding.</p>

    <article>
      <header>
        <h3>Article Title</h3>
        <p>By John Smith | Published January 15, 2024</p>
      </header>
      <p>Articles can also have their own headers with metadata.</p>
    </article>
  </main>

  <mark>Header contains navigation and introductory content</mark>
</body>
</html>`
  },
  {
    tag: 'hgroup',
    description: 'The <hgroup> tag groups a main heading with supplementary headings or subheadings.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hgroup Tag Example</title>
  <style>
    hgroup { background: #f0f4ff; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #007bff; }
    hgroup h1, hgroup h2, hgroup h3 { margin: 0 0 5px 0; }
    hgroup h1 { color: #007bff; font-size: 1.8em; }
    hgroup h2 { color: #666; font-size: 1.1em; font-weight: normal; }
    hgroup p { margin: 5px 0 0 0; color: #999; font-size: 0.9em; }
  </style>
</head>
<body>
  <h1>Hgroup Tag Examples:</h1>

  <hgroup>
    <h1>Web Development Mastery</h1>
    <h2>Complete Guide for Beginners</h2>
  </hgroup>

  <hgroup>
    <h1>Advanced JavaScript Patterns</h1>
    <h2>Level: Intermediate to Advanced</h2>
    <p>Duration: 8 hours | Difficulty: ★★★★☆</p>
  </hgroup>

  <hgroup>
    <h2>Chapter 5: CSS Grid Layout</h2>
    <p>Learn modern CSS layout techniques for responsive design</p>
  </hgroup>

  <mark>Hgroup groups heading with related subtitles or metadata</mark>
</body>
</html>`
  },
  {
    tag: 'hr',
    description: 'The <hr> tag represents a thematic break or divider between content sections.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HR Tag Example</title>
  <style>
    hr { border: none; border-top: 2px solid #007bff; margin: 30px 0; }
    .styled-hr { border: none; border-top: 3px dashed #28a745; margin: 20px 0; }
    .custom-hr { border: none; height: 4px; background: linear-gradient(to right, #007bff, transparent); margin: 30px 0; }
  </style>
</head>
<body>
  <h2>HR Tag Examples:</h2>

  <h3>Introduction Section</h3>
  <p>This is the introduction to our topic on HTML semantic tags and their proper usage.</p>

  <hr>

  <h3>Main Content Section</h3>
  <p>Here we dive deeper into the specific use cases and benefits of semantic HTML.</p>

  <hr class="styled-hr">

  <h3>Another Section</h3>
  <p>Understanding proper HTML structure improves accessibility and SEO.</p>

  <hr class="custom-hr">

  <h3>Conclusion</h3>
  <p>Semantic HTML is essential for modern web development practices.</p>

  <mark>HR creates visual breaks between major content sections</mark>
</body>
</html>`
  },
  {
    tag: 'i',
    description: 'The <i> tag represents italic text for technical terms, foreign phrases, or thoughts.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>I Tag Example</title>
  <style>
    .demo-box { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>I (Italic) Tag Examples:</h2>

  <div class="demo-box">
    <h3>Technical Terms:</h3>
    <p>In web development, the <i>Document Object Model</i> (DOM) is crucial for JavaScript.</p>
    <p>The <i>event loop</i> is fundamental to understanding asynchronous JavaScript.</p>
  </div>

  <div class="demo-box">
    <h3>Foreign Words:</h3>
    <p>The Latin phrase <i>carpe diem</i> means "seize the day".</p>
    <p>In Spanish, <i>gracias</i> means thank you.</p>
  </div>

  <div class="demo-box">
    <h3>Thoughts and Inner Monologue:</h3>
    <p>Looking at the code, she thought, <i>This must be an error somewhere.</i></p>
  </div>

  <div class="demo-box">
    <h3>Scientific Names:</h3>
    <p>The lion is scientifically known as <i>Panthera leo</i>.</p>
  </div>

  <mark>I tag is visual only; use &lt;em&gt; for semantic emphasis</mark>
</body>
</html>`
  },
  {
    tag: 'iframe',
    description: 'The <iframe> tag embeds another HTML page within the current page.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iframe Tag Example</title>
  <style>
    .iframe-demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
    iframe { border: 2px solid #ddd; border-radius: 6px; width: 100%; }
  </style>
</head>
<body>
  <h2>Iframe Tag Example:</h2>

  <div class="iframe-demo">
    <h3>Embedded Video:</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=UUTech_in_my_style" title="Tech In My Style - HTML Tutorial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="iframe-demo">
    <h3>Embedded Map:</h3>
    <iframe width="100%" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNew%20York!5e0!3m2!1sen!2sus!4v1234567890" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>

  <h3>Iframe Attributes:</h3>
  <ul>
    <li><strong>src</strong> - URL of the page to embed</li>
    <li><strong>width / height</strong> - Dimensions</li>
    <li><strong>allowfullscreen</strong> - Allow fullscreen mode</li>
    <li><strong>loading="lazy"</strong> - Lazy load iframe</li>
  </ul>

  <mark>Iframes embed external content within a page</mark>
</body>
</html>`
  },
  {
    tag: 'img',
    description: 'The <img> tag embeds an image. The src and alt attributes are required.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Img Tag Example</title>
  <style>
    .img-demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
    img { border-radius: 6px; margin: 10px 0; }
    .responsive { max-width: 100%; height: auto; }
    .thumbnail { width: 100px; height: 100px; object-fit: cover; }
  </style>
</head>
<body>
  <h2>Img Tag Examples:</h2>

  <div class="img-demo">
    <h3>Basic Image:</h3>
    <img src="https://via.placeholder.com/300x200" alt="Placeholder image" width="300" height="200">
  </div>

  <div class="img-demo">
    <h3>Image with Title (Tooltip):</h3>
    <img src="https://via.placeholder.com/250x180" alt="Sample" title="Hover to see this tooltip" width="250" height="180">
  </div>

  <div class="img-demo">
    <h3>Responsive Image:</h3>
    <img src="https://via.placeholder.com/600x300" alt="Responsive image" class="responsive">
  </div>

  <div class="img-demo">
    <h3>Thumbnail Image:</h3>
    <img src="https://via.placeholder.com/300x300" alt="Thumbnail" class="thumbnail">
  </div>

  <h3>Image Attributes:</h3>
  <ul>
    <li><strong>src</strong> - Image file path</li>
    <li><strong>alt</strong> - Alternative text for accessibility</li>
    <li><strong>width / height</strong> - Dimensions</li>
    <li><strong>loading="lazy"</strong> - Lazy load</li>
  </ul>

  <mark>Always include descriptive alt text for accessibility</mark>
</body>
</html>`
  },
  {
    tag: 'input',
    description: 'The <input> tag specifies an input field where users can enter data, with many types available.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Input Tag Example</title>
  <style>
    .input-group { margin: 12px 0; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; }
    input:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 3px rgba(0,123,255,0.15); }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
  </style>
</head>
<body>
  <h2>Input Tag Examples:</h2>

  <div class="row">
    <div>
      <div class="input-group"><label>Text:</label><input type="text" placeholder="Enter text"></div>
      <div class="input-group"><label>Email:</label><input type="email" placeholder="email@example.com"></div>
      <div class="input-group"><label>Password:</label><input type="password" placeholder="Password"></div>
      <div class="input-group"><label>Number:</label><input type="number" min="0" max="100" value="50"></div>
      <div class="input-group"><label>Date:</label><input type="date"></div>
    </div>
    <div>
      <div class="input-group"><label>Phone:</label><input type="tel" placeholder="+1 234 567 8900"></div>
      <div class="input-group"><label>URL:</label><input type="url" placeholder="https://example.com"></div>
      <div class="input-group"><label>Color:</label><input type="color" value="#007bff"></div>
      <div class="input-group"><label>Checkbox:</label><input type="checkbox"> Accept terms</div>
      <div class="input-group"><label>File:</label><input type="file"></div>
    </div>
  </div>

  <mark>Input types: text, email, password, number, date, tel, url, color, checkbox, radio, file, submit, reset</mark>
</body>
</html>`
  },
  {
    tag: 'ins',
    description: 'The <ins> tag marks text that has been inserted, typically displayed with underline.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ins Tag Example</title>
  <style>
    del { color: #dc3545; text-decoration: line-through; }
    ins { color: #28a745; background: #d4edda; text-decoration: none; padding: 0 2px; }
  </style>
</head>
<body>
  <h2>Ins (Inserted Text) Tag Examples:</h2>

  <h3>Text Corrections:</h3>
  <p>My favorite color is <del>blue</del> <ins>green</ins>.</p>
  <p>The meeting is <del>Tuesday at 10am</del> <ins>Wednesday at 2pm</ins>.</p>

  <h3>Using Attributes:</h3>
  <p>
    <del datetime="2024-01-01">Price: $99</del>
    <ins datetime="2024-02-01">Price: $59</ins>
  </p>

  <h3>Document Updates:</h3>
  <p><ins>This new feature was added in version 2.0.</ins></p>
  <ul>
    <li>Original feature 1</li>
    <li><ins>New feature added</ins></li>
    <li>Original feature 2</li>
  </ul>

  <mark>Ins and del mark document revisions and changes</mark>
</body>
</html>`
  },
  {
    tag: 'kbd',
    description: 'The <kbd> tag defines keyboard input text, typically displayed in monospace.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kbd Tag Example</title>
  <style>
    kbd { background: #f7f7f7; border: 1px solid #ccc; border-bottom: 3px solid #999; border-radius: 4px; color: #333; display: inline-block; font-family: monospace; font-size: 0.9em; padding: 2px 6px; margin: 0 2px; box-shadow: 0 1px 0 rgba(0,0,0,0.2); }
    .shortcut-box { background: #f8f9fa; padding: 12px; border-radius: 6px; margin: 8px 0; border-left: 4px solid #007bff; }
  </style>
</head>
<body>
  <h2>Kbd (Keyboard Input) Tag Examples:</h2>

  <div class="shortcut-box">
    Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy selected text
  </div>

  <div class="shortcut-box">
    Press <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste text
  </div>

  <div class="shortcut-box">
    Press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo last action
  </div>

  <div class="shortcut-box">
    Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save file
  </div>

  <div class="shortcut-box">
    Press <kbd>Alt</kbd> + <kbd>Tab</kbd> to switch windows
  </div>

  <div class="shortcut-box">
    Press <kbd>F12</kbd> to open developer tools
  </div>

  <mark>Kbd displays keyboard keys and shortcuts</mark>
</body>
</html>`
  },
  {
    tag: 'label',
    description: 'The <label> tag associates text with form elements, improving usability and accessibility.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Label Tag Example</title>
  <style>
    form { max-width: 400px; padding: 20px; background: #f8f9fa; border-radius: 8px; }
    .form-group { margin: 12px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; cursor: pointer; }
    input, select { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    .radio-group label, .checkbox-group label { display: inline; font-weight: normal; margin-left: 5px; margin-right: 15px; }
    button { width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Label Tag Example:</h2>

  <form>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter username">
    </div>

    <div class="form-group">
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" placeholder="Enter email">
    </div>

    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" name="country">
        <option>USA</option>
        <option>UK</option>
        <option>India</option>
      </select>
    </div>

    <div class="form-group radio-group">
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label>
    </div>

    <div class="form-group checkbox-group">
      <input type="checkbox" id="terms" name="terms">
      <label for="terms">I agree to Terms and Conditions</label>
    </div>

    <button type="submit">Submit</button>
  </form>

  <mark>Labels improve accessibility by associating text with inputs</mark>
</body>
</html>`
  },
  {
    tag: 'legend',
    description: 'The <legend> tag defines a caption for a <fieldset> element.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Legend Tag Example</title>
  <style>
    fieldset { border: 2px solid #007bff; border-radius: 6px; padding: 15px; margin: 15px 0; max-width: 400px; }
    legend { font-weight: bold; font-size: 1.1em; color: #007bff; padding: 0 10px; }
    .form-group { margin: 10px 0; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input { width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
  </style>
</head>
<body>
  <h2>Legend Tag Example:</h2>

  <form>
    <fieldset>
      <legend>Personal Information</legend>
      <div class="form-group">
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" placeholder="John Doe">
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob">
      </div>
    </fieldset>

    <fieldset>
      <legend>Contact Information</legend>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" placeholder="+1 234 567 8900">
      </div>
      <div class="form-group">
        <label for="mail">Email:</label>
        <input type="email" id="mail" placeholder="email@example.com">
      </div>
    </fieldset>

    <fieldset>
      <legend>Preferences</legend>
      <div class="form-group">
        <label><input type="radio" name="theme"> Light Theme</label>
        <label><input type="radio" name="theme"> Dark Theme</label>
      </div>
    </fieldset>
  </form>

  <mark>Legend provides a title for fieldset groups</mark>
</body>
</html>`
  },
  {
    tag: 'li',
    description: 'The <li> tag defines a list item in <ul>, <ol>, or <menu> elements.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Li Tag Example</title>
  <style>
    ul, ol { margin: 10px 0; padding-left: 25px; }
    li { margin: 5px 0; line-height: 1.6; }
  </style>
</head>
<body>
  <h2>Li (List Item) Tag Examples:</h2>

  <h3>Unordered List:</h3>
  <ul>
    <li>HTML - Structure</li>
    <li>CSS - Styling</li>
    <li>JavaScript - Interactivity</li>
    <li>React - UI Library</li>
  </ul>

  <h3>Ordered List:</h3>
  <ol>
    <li>Open browser</li>
    <li>Navigate to website</li>
    <li>Click Register</li>
    <li>Fill form</li>
    <li>Submit</li>
  </ol>

  <h3>Nested Lists:</h3>
  <ul>
    <li>Frontend
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </li>
    <li>Backend
      <ul>
        <li>Node.js</li>
        <li>Python</li>
      </ul>
    </li>
  </ul>

  <mark>Li items belong inside ul, ol, or menu elements</mark>
</body>
</html>`
  },
  {
    tag: 'link',
    description: 'The <link> tag defines relationships with external resources like stylesheets.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Link Tag Example</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="canonical" href="https://www.example.com/page">
  <style>
    .code-box { background: #f4f4f4; padding: 15px; border-radius: 6px; font-family: monospace; margin: 10px 0; border-left: 3px solid #007bff; }
  </style>
</head>
<body>
  <h2>Link Tag Example:</h2>

  <p>The link tag connects external resources to your document.</p>

  <h3>Common Link Uses:</h3>
  <ul>
    <li>rel="stylesheet" - Link to CSS file</li>
    <li>rel="icon" - Link to favicon</li>
    <li>rel="canonical" - Specify canonical URL</li>
    <li>rel="preload" - Preload resource</li>
    <li>rel="preconnect" - Establish connection</li>
  </ul>

  <div class="code-box">
    &lt;link rel="stylesheet" href="styles.css"&gt;<br>
    &lt;link rel="icon" href="favicon.ico"&gt;<br>
    &lt;link rel="canonical" href="https://example.com"&gt;
  </div>

  <mark>Link tags go in the head section</mark>
</body>
</html>`
  },
  {
    tag: 'main',
    description: 'The <main> tag specifies the primary content of a document. There should be only one main element.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Main Tag Example</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; flex-direction: column; min-height: 100vh; }
    header { background: #007bff; color: white; padding: 15px; }
    main { flex: 1; padding: 30px; max-width: 900px; margin: 0 auto; width: 100%; }
    aside { background: #e9ecef; padding: 15px; border-radius: 6px; }
    footer { background: #343a40; color: white; padding: 15px; text-align: center; }
  </style>
</head>
<body>
  <header><h1>My Website</h1></header>

  <main>
    <h2>Main Content Area</h2>
    <p>This is the primary content section of the page. The main tag wraps all unique page content.</p>

    <article>
      <h3>Featured Article</h3>
      <p>Content unique to this page goes inside the main element.</p>
    </article>

    <aside>
      <h4>Related Information</h4>
      <p>Sidebar or related content goes here, but typically outside main.</p>
    </aside>
  </main>

  <footer>&copy; 2024 Website</footer>

  <mark>Only one &lt;main&gt; element per document</mark>
</body>
</html>`
  },
  {
    tag: 'mark',
    description: 'The <mark> tag highlights text relevant to the user, typically displayed with yellow background.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mark Tag Example</title>
  <style>
    mark { background-color: yellow; color: black; padding: 0 3px; border-radius: 2px; }
    .green-mark { background-color: #90EE90; }
    .pink-mark { background-color: #FFB6C1; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Mark (Highlight) Tag Examples:</h2>

  <h3>Basic Highlighting:</h3>
  <p>The most <mark>important concept</mark> in learning is understanding <mark>fundamentals</mark>.</p>

  <h3>Search Results:</h3>
  <p>Learn <mark>HTML</mark> and CSS to build beautiful websites. <mark>HTML</mark> provides the structure.</p>

  <h3>Custom Styling:</h3>
  <p>This is <mark class="green-mark">green highlighted</mark> text.</p>
  <p>This is <mark class="pink-mark">pink highlighted</mark> text.</p>

  <h3>Multiple Highlights:</h3>
  <p>In web development, <mark>HTML</mark> provides structure, <mark>CSS</mark> provides styling, and <mark>JavaScript</mark> provides interactivity.</p>

  <mark>Mark tag highlights important or relevant text</mark>
</body>
</html>`
  },
  {
    tag: 'meta',
    description: 'The <meta> tag provides metadata about HTML documents that doesn\'t display on the page.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML, CSS, and JavaScript from beginner to advanced.">
  <meta name="keywords" content="HTML, CSS, JavaScript, web development, tutorials">
  <meta name="author" content="Tech Academy">
  <meta name="robots" content="index, follow">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Meta Tag Example</title>
  <style>
    .info { background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #007bff; }
  </style>
</head>
<body>
  <h2>Meta Tag Example:</h2>

  <p>Meta tags provide information about the HTML document to browsers and search engines.</p>

  <div class="info">
    <h3>Common Meta Tags:</h3>
    <ul>
      <li><strong>charset</strong> - Document character encoding</li>
      <li><strong>viewport</strong> - Mobile device display settings</li>
      <li><strong>description</strong> - Page description for search engines</li>
      <li><strong>keywords</strong> - Page keywords</li>
      <li><strong>author</strong> - Document author</li>
      <li><strong>robots</strong> - Search engine crawling instructions</li>
    </ul>
  </div>

  <mark>Meta tags are not visible on the page</mark>
</body>
</html>`
  },
  {
    tag: 'meter',
    description: 'The <meter> tag represents a scalar measurement within a known range.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meter Tag Example</title>
  <style>
    .meter-demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; }
    label { display: block; font-weight: bold; margin: 10px 0 5px 0; }
    meter { width: 100%; height: 20px; }
  </style>
</head>
<body>
  <h2>Meter Tag Examples:</h2>

  <div class="meter-demo">
    <label>Disk Usage: 70%</label>
    <meter value="0.7" low="0.3" high="0.8" optimum="0.5">70%</meter>
  </div>

  <div class="meter-demo">
    <label>Battery Level: 85%</label>
    <meter value="85" min="0" max="100" low="20" high="80" optimum="100">85%</meter>
  </div>

  <div class="meter-demo">
    <label>Test Score - Alice (92/100):</label>
    <meter value="92" min="0" max="100" low="40" high="70" optimum="100">92</meter>
  </div>

  <div class="meter-demo">
    <label>Test Score - Bob (35/100 - Low):</label>
    <meter value="35" min="0" max="100" low="40" high="70" optimum="100">35</meter>
  </div>

  <mark>Meter shows measurements within ranges</mark>
</body>
</html>`
  },
  {
    tag: 'nav',
    description: 'The <nav> tag defines a set of navigation links for major navigation sections.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nav Tag Example</title>
  <style>
    header { background: #1a1a2e; padding: 15px 30px; }
    header nav { display: flex; gap: 20px; }
    header nav a { color: white; text-decoration: none; transition: all 0.3s; }
    header nav a:hover { color: #ffc107; }
    .breadcrumb { background: #f8f9fa; padding: 12px 20px; }
    .breadcrumb a { color: #007bff; text-decoration: none; margin: 0 5px; }
  </style>
</head>
<body>
  <header>
    <nav>
      <a href="#">Home</a>
      <a href="#">Tutorials</a>
      <a href="#">Projects</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <div class="breadcrumb">
    <nav aria-label="breadcrumb">
      <a href="#">Home</a> /
      <a href="#">HTML</a> /
      <a href="#">Nav Tag</a>
    </nav>
  </div>

  <h2>Navigation Examples</h2>

  <p>The nav tag defines major navigation sections on a page.</p>

  <h3>Uses of Nav:</h3>
  <ul>
    <li>Main site navigation menu</li>
    <li>Breadcrumb navigation</li>
    <li>Page table of contents</li>
    <li>Pagination links</li>
    <li>Related links section</li>
  </ul>

  <mark>Nav is for major navigation blocks only</mark>
</body>
</html>`
  },
  {
    tag: 'noscript',
    description: 'The <noscript> tag defines content displayed when JavaScript is disabled in the browser.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Noscript Tag Example</title>
  <style>
    .noscript-warning { background: #fff3cd; border: 1px solid #ffc107; border-radius: 6px; padding: 15px; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Noscript Tag Example:</h2>

  <noscript>
    <div class="noscript-warning">
      <strong>Important:</strong> This website requires JavaScript to be enabled. Please enable JavaScript in your browser settings.
    </div>
  </noscript>

  <div id="main-content">
    <h3>JavaScript-Dependent Content</h3>
    <p>This content requires JavaScript to function properly.</p>
    <button onclick="alert('Button clicked!')">Click Me</button>
  </div>

  <script>
    document.getElementById('main-content').innerHTML += '<p>JavaScript is enabled and working!</p>';
  </script>

  <h3>When to Use Noscript:</h3>
  <ul>
    <li>Display messages when JavaScript is disabled</li>
    <li>Provide alternative content for users without JS</li>
    <li>Direct users to enable JavaScript</li>
  </ul>

  <mark>Noscript shows content only when JavaScript is off</mark>
</body>
</html>`
  },
  {
    tag: 'object',
    description: 'The <object> tag embeds external resources like plugins, media, or web pages.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Object Tag Example</title>
  <style>
    object { border: 2px solid #ddd; border-radius: 6px; display: block; margin: 15px 0; }
    .demo-box { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Object Tag Example:</h2>

  <div class="demo-box">
    <h3>Embedded SVG:</h3>
    <object data="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='100'%3E%3Crect width='300' height='100' fill='%23007bff'/%3E%3Ctext x='80' y='55' fill='white' font-size='20'%3EEmbedded Object%3C/text%3E%3C/svg%3E" type="image/svg+xml" width="300" height="100">
    </object>
  </div>

  <h3>Object Attributes:</h3>
  <ul>
    <li><strong>data</strong> - URL of the resource</li>
    <li><strong>type</strong> - MIME type</li>
    <li><strong>width / height</strong> - Dimensions</li>
    <li><strong>param</strong> - Parameters for plugin</li>
  </ul>

  <mark>Object embeds external content or plugins</mark>
</body>
</html>`
  },
  {
    tag: 'ol',
    description: 'The <ol> tag defines an ordered (numbered) list of items.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ordered List Tag Example</title>
  <style>
    ol { margin: 10px 0; padding-left: 25px; }
    li { margin: 6px 0; line-height: 1.6; }
  </style>
</head>
<body>
  <h2>Ordered List (ol) Tag Examples:</h2>

  <h3>Default (Numbers):</h3>
  <ol>
    <li>Learn HTML basics</li>
    <li>Learn CSS styling</li>
    <li>Learn JavaScript</li>
    <li>Build projects</li>
  </ol>

  <h3>Lowercase Letters (type="a"):</h3>
  <ol type="a">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>

  <h3>Roman Numerals (type="i"):</h3>
  <ol type="i">
    <li>Chapter one</li>
    <li>Chapter two</li>
    <li>Chapter three</li>
  </ol>

  <h3>Start from Custom Number (start="5"):</h3>
  <ol start="5">
    <li>Step 5</li>
    <li>Step 6</li>
    <li>Step 7</li>
  </ol>

  <h3>Reversed List:</h3>
  <ol reversed>
    <li>Third place</li>
    <li>Second place</li>
    <li>First place</li>
  </ol>

  <mark>Ol creates numbered lists</mark>
</body>
</html>`
  },
  {
    tag: 'optgroup',
    description: 'The <optgroup> tag groups related options in a <select> dropdown list.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Optgroup Tag Example</title>
  <style>
    select { padding: 8px; width: 100%; max-width: 300px; border: 1px solid #ccc; border-radius: 4px; }
    label { display: block; font-weight: bold; margin-bottom: 5px; margin-top: 15px; }
  </style>
</head>
<body>
  <h2>Optgroup Tag Example:</h2>

  <label for="lang">Programming Languages:</label>
  <select id="lang">
    <option value="">-- Select Language --</option>
    <optgroup label="Frontend">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="js">JavaScript</option>
      <option value="ts">TypeScript</option>
    </optgroup>
    <optgroup label="Backend">
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="php">PHP</option>
      <option value="node">Node.js</option>
    </optgroup>
    <optgroup label="Database">
      <option value="mysql">MySQL</option>
      <option value="mongo">MongoDB</option>
    </optgroup>
  </select>

  <label for="car">Car Brands:</label>
  <select id="car">
    <optgroup label="Japanese">
      <option value="toyota">Toyota</option>
      <option value="honda">Honda</option>
    </optgroup>
    <optgroup label="European">
      <option value="bmw">BMW</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>

  <mark>Optgroup organizes options into categories</mark>
</body>
</html>`
  },
  {
    tag: 'option',
    description: 'The <option> tag defines an option in a <select> dropdown, <datalist>, or <optgroup>.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Option Tag Example</title>
  <style>
    .option-demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    select { padding: 8px; width: 100%; max-width: 300px; border: 1px solid #ccc; border-radius: 4px; }
  </style>
</head>
<body>
  <h2>Option Tag Example:</h2>

  <div class="option-demo">
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="">-- Select Country --</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="in" selected>India</option>
      <option value="ca">Canada</option>
      <option value="au">Australia</option>
    </select>
  </div>

  <div class="option-demo">
    <label for="size">T-Shirt Size (Multiple):</label>
    <select id="size" name="size" multiple size="5">
      <option value="xs">XS - Extra Small</option>
      <option value="s">S - Small</option>
      <option value="m" selected>M - Medium</option>
      <option value="l">L - Large</option>
      <option value="xl">XL - Extra Large</option>
    </select>
    <small>Hold Ctrl/Cmd to select multiple</small>
  </div>

  <mark>Option values are submitted with form data</mark>
</body>
</html>`
  },
  {
    tag: 'output',
    description: 'The <output> tag represents the result of a calculation or user action.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Output Tag Example</title>
  <style>
    form { max-width: 400px; background: #f8f9fa; padding: 20px; border-radius: 8px; }
    .form-group { margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    output { display: inline-block; background: #007bff; color: white; padding: 5px 12px; border-radius: 20px; font-weight: bold; margin-left: 10px; }
  </style>
</head>
<body>
  <h2>Output Tag Example:</h2>

  <form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
    <div class="form-group">
      <label for="a">Number 1:</label>
      <input type="number" id="a" name="a" value="10" min="0">
    </div>
    <div class="form-group">
      <label for="b">Number 2:</label>
      <input type="number" id="b" name="b" value="5" min="0">
    </div>
    <div class="form-group">
      <label>Sum:</label>
      <output id="result" for="a b">15</output>
    </div>
  </form>

  <mark>Output displays calculation or computation results</mark>
</body>
</html>`
  },
  {
    tag: 'p',
    description: 'The <p> tag defines a paragraph of text. Browsers add spacing around paragraphs.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paragraph Tag Example</title>
  <style>
    p { line-height: 1.8; color: #333; margin: 15px 0; }
    .lead { font-size: 1.2em; color: #666; font-weight: 300; }
  </style>
</head>
<body>
  <h2>Paragraph Tag Examples:</h2>

  <p>This is a basic paragraph. HTML paragraphs are defined with the p tag.</p>

  <p>Browsers automatically add space before and after each paragraph element.</p>

  <p class="lead">This is a lead paragraph with larger text, typically used for introductions.</p>

  <p>HTML provides semantic structure to web content. Combined with CSS for styling and JavaScript for interactivity, HTML forms the foundation of web development.</p>

  <mark>Each p tag creates a separate paragraph with default spacing</mark>
</body>
</html>`
  },
  {
    tag: 'param',
    description: 'The <param> tag defines parameters for an <object> element.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Param Tag Example</title>
  <style>
    .info-box { background: #e8f4fd; border: 1px solid #bee5eb; border-radius: 6px; padding: 15px; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Param Tag Example:</h2>

  <object data="https://example.com/media.swf" type="application/x-shockwave-flash" width="400" height="300">
    <param name="movie" value="media.swf">
    <param name="quality" value="high">
    <param name="bgcolor" value="#ffffff">
    <p>Flash content is not supported in your browser.</p>
  </object>

  <div class="info-box">
    <h3>Param Attributes:</h3>
    <ul>
      <li><strong>name</strong> - Parameter name</li>
      <li><strong>value</strong> - Parameter value</li>
    </ul>
    <p>Param elements customize object behavior through name-value pairs.</p>
  </div>

  <mark>Param passes configuration to embedded objects</mark>
</body>
</html>`
  },
  {
    tag: 'picture',
    description: 'The <picture> tag provides multiple image sources for responsive images.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Picture Tag Example</title>
  <style>
    picture img { max-width: 100%; border-radius: 6px; display: block; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Picture Tag Example:</h2>

  <h3>Responsive Image (different sizes for different screens):</h3>
  <picture>
    <source media="(min-width: 900px)" srcset="https://via.placeholder.com/900x400">
    <source media="(min-width: 600px)" srcset="https://via.placeholder.com/600x300">
    <img src="https://via.placeholder.com/400x200" alt="Responsive image">
  </picture>

  <h3>Modern Image Format (WebP with fallback):</h3>
  <picture>
    <source srcset="https://via.placeholder.com/600x300.webp" type="image/webp">
    <img src="https://via.placeholder.com/600x300" alt="Image with modern format">
  </picture>

  <h3>Dark Mode Image:</h3>
  <picture>
    <source srcset="https://via.placeholder.com/300x200?text=Dark+Mode" media="(prefers-color-scheme: dark)">
    <img src="https://via.placeholder.com/300x200?text=Light+Mode" alt="Adaptive image">
  </picture>

  <mark>Picture provides multiple sources for flexible image selection</mark>
</body>
</html>`
  },
  {
    tag: 'pre',
    description: 'The <pre> tag displays preformatted text with spaces and line breaks preserved.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pre Tag Example</title>
  <style>
    pre { background: #282c34; color: #abb2bf; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 14px; line-height: 1.6; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Pre (Preformatted Text) Tag Examples:</h2>

  <h3>Code Block:</h3>
  <pre>function fibonacci(n) {
    if (n &lt;= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i &lt; 10; i++) {
    console.log(fibonacci(i));
}</pre>

  <h3>ASCII Art:</h3>
  <pre>
    /\\_/\\
   ( o.o )
    > ^ <
   /|   |\\
  (_|   |_)</pre>

  <h3>HTML Structure:</h3>
  <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

  <mark>Pre preserves exact spacing and line breaks</mark>
</body>
</html>`
  },
  {
    tag: 'progress',
    description: 'The <progress> tag represents the progress of a task, showing completion percentage.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Progress Tag Example</title>
  <style>
    .progress-demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    progress { width: 100%; height: 25px; }
    button { padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 5px; }
  </style>
</head>
<body>
  <h2>Progress Tag Examples:</h2>

  <div class="progress-demo">
    <label>File Download:</label>
    <progress value="65" max="100">65%</progress>
    <p>65 of 100 MB downloaded</p>
  </div>

  <div class="progress-demo">
    <label>Course Progress:</label>
    <progress value="42" max="100">42%</progress>
    <p>42 of 100 lessons completed</p>
  </div>

  <div class="progress-demo">
    <label>Interactive Progress:</label>
    <progress id="myProgress" value="0" max="100">0%</progress>
    <p><span id="percent">0</span>%</p>
    <button onclick="updateProgress(10)">+10%</button>
    <button onclick="updateProgress(-10)">-10%</button>
    <button onclick="resetProgress()">Reset</button>
  </div>

  <script>
    function updateProgress(amount) {
      const p = document.getElementById('myProgress');
      let newVal = p.value + amount;
      p.value = Math.max(0, Math.min(100, newVal));
      document.getElementById('percent').textContent = p.value;
    }
    function resetProgress() {
      document.getElementById('myProgress').value = 0;
      document.getElementById('percent').textContent = '0';
    }
  </script>

  <mark>Progress shows task completion visually</mark>
</body>
</html>`
  },
  {
    tag: 'q',
    description: 'The <q> tag defines a short inline quotation, automatically adding quotation marks.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Q Tag Example</title>
  <style>
    q { color: #555; font-style: italic; }
  </style>
</head>
<body>
  <h2>Q (Inline Quotation) Tag Examples:</h2>

  <h3>Basic Quotes:</h3>
  <p>According to Steve Jobs, <q>The only way to do great work is to love what you do.</q></p>

  <p>Shakespeare wrote, <q>To be, or not to be, that is the question.</q></p>

  <h3>Nested Quotations:</h3>
  <p>She said, <q>He told me <q>I will be there</q> but never came.</q></p>

  <h3>Quote with Citation:</h3>
  <p>According to the MDN docs, <q cite="https://developer.mozilla.org">The q element indicates that the enclosed text is a short inline quotation.</q></p>

  <h3>Q vs Blockquote:</h3>
  <p>Use <code>&lt;q&gt;</code> for short inline quotes. For long block quotes use <code>&lt;blockquote&gt;</code>.</p>

  <mark>Q automatically adds quotation marks</mark>
</body>
</html>`
  },
  {
    tag: 's',
    description: 'The <s> tag represents text that is no longer correct or accurate, displayed with strikethrough.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>S Tag Example</title>
  <style>
    s { color: #999; }
    .sale-item { background: #f8f9fa; padding: 12px; border-radius: 6px; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>S (Strikethrough) Tag Examples:</h2>

  <h3>Price Discounts:</h3>
  <div class="sale-item">
    Regular Price: <s>$199.99</s> <strong style="color:#28a745;">Sale Price: $99.99</strong>
  </div>
  <div class="sale-item">
    Was: <s>$49</s> Now: <strong>$29</strong>
  </div>

  <h3>Outdated Information:</h3>
  <div class="sale-item">
    Event Date: <s>Friday, January 10</s> Rescheduled to Monday, January 13
  </div>

  <h3>Product Availability:</h3>
  <ul>
    <li>Blue Widget - $15 ✓</li>
    <li><s>Red Widget - $20</s> (Out of Stock)</li>
    <li>Green Widget - $18 ✓</li>
  </ul>

  <h3>S vs Del:</h3>
  <p><s>Incorrect information</s> — use &lt;s&gt; for inaccurate text</p>
  <p><del>Deleted content</del> — use &lt;del&gt; for removed text</p>

  <mark>S shows text that is no longer relevant or accurate</mark>
</body>
</html>`
  },
  {
    tag: 'section',
    description: 'The <section> tag defines a thematic grouping of content with a heading.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section Tag Example</title>
  <style>
    section { border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin: 15px 0; background: white; }
    section h2 { color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 8px; }
  </style>
</head>
<body>
  <h1>Web Development Guide</h1>

  <section>
    <h2>HTML Section</h2>
    <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
    <p>It provides structure and semantic meaning to web content.</p>
  </section>

  <section>
    <h2>CSS Section</h2>
    <p>CSS (Cascading Style Sheets) is used to style HTML elements.</p>
    <p>It controls layout, colors, fonts, and responsive design.</p>
  </section>

  <section>
    <h2>JavaScript Section</h2>
    <p>JavaScript enables interactive and dynamic content on web pages.</p>
    <p>It allows client-side programming for enhanced user experiences.</p>
  </section>

  <mark>Section groups thematic content with semantic meaning</mark>
</body>
</html>`
  },
  {
    tag: 'select',
    description: 'The <select> tag creates a dropdown list for user selection within forms.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Select Tag Example</title>
  <style>
    form { max-width: 350px; background: #f8f9fa; padding: 20px; border-radius: 8px; }
    .form-group { margin-bottom: 15px; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    select { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; }
    button { width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Select Tag Example:</h2>

  <form>
    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" name="country" required>
        <option value="">-- Select Country --</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="in" selected>India</option>
        <option value="ca">Canada</option>
      </select>
    </div>

    <div class="form-group">
      <label for="tech">Technologies:</label>
      <select id="tech" name="tech">
        <optgroup label="Frontend">
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
        </optgroup>
        <optgroup label="Backend">
          <option value="node">Node.js</option>
          <option value="python">Python</option>
        </optgroup>
      </select>
    </div>

    <button type="submit">Submit</button>
  </form>

  <mark>Select creates dropdown menus for form selection</mark>
</body>
</html>`
  },
  {
    tag: 'small',
    description: 'The <small> tag represents smaller text for fine print, disclaimers, or side comments.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Small Tag Example</title>
</head>
<body>
  <h2>Small Tag Examples:</h2>

  <h3>Copyright Footer:</h3>
  <p>&copy; 2024 Tech Academy. <small>All rights reserved.</small></p>

  <h3>Pricing Information:</h3>
  <p><strong>$9.99/month</strong> <small>(billed annually, cancel anytime)</small></p>

  <h3>Legal Disclaimer:</h3>
  <p>Results may vary. <small>*Individual results are not guaranteed. Past performance does not guarantee future results.</small></p>

  <h3>Product Details:</h3>
  <h1>SuperPhone X <small>by TechBrand</small></h1>
  <p>Advanced smartphone for professionals. <small>Patent pending</small></p>

  <h3>Terms and Conditions:</h3>
  <p>By using this service, you agree to our terms.</p>
  <small>This agreement is subject to change without notice. Please review periodically.</small>

  <mark>Small text is typically one font size smaller</mark>
</body>
</html>`
  },
  {
    tag: 'source',
    description: 'The <source> tag specifies media resources for <picture>, <video>, and <audio> elements.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Source Tag Example</title>
  <style>
    video, audio { display: block; margin: 15px 0; border-radius: 6px; }
  </style>
</head>
<body>
  <h2>Source Tag Example:</h2>

  <h3>Video with Multiple Formats:</h3>
  <video width="400" controls>
    <source src="video.webm" type="video/webm">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>

  <h3>Audio with Multiple Formats:</h3>
  <audio controls>
    <source src="audio.ogg" type="audio/ogg">
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <h3>Picture with Responsive Sources:</h3>
  <picture>
    <source media="(min-width: 900px)" srcset="https://via.placeholder.com/800x400">
    <source media="(min-width: 600px)" srcset="https://via.placeholder.com/600x300">
    <img src="https://via.placeholder.com/400x200" alt="Responsive">
  </picture>

  <mark>Source provides fallback options for media elements</mark>
</body>
</html>`
  },
  {
    tag: 'span',
    description: 'The <span> tag is an inline container for styling a portion of text or content.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Span Tag Example</title>
  <style>
    .highlight { background: yellow; }
    .red { color: red; font-weight: bold; }
    .blue { color: #007bff; }
    .badge { background: #28a745; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; }
  </style>
</head>
<body>
  <h2>Span Tag Examples:</h2>

  <h3>Inline Styling:</h3>
  <p>My car is <span class="red">red</span> and my bike is <span class="blue">blue</span>.</p>

  <h3>Highlighting:</h3>
  <p>Note: <span class="highlight">Payment is due by January 31st</span>.</p>

  <h3>Badges:</h3>
  <p>HTML Tutorial <span class="badge">New</span></p>
  <p>JavaScript Course <span class="badge" style="background:#007bff;">Updated</span></p>

  <h3>Span vs Div:</h3>
  <p><span style="color:green;">Span is inline</span> — doesn't break the line.</p>
  <div style="color:purple; border: 1px solid purple; padding: 5px;">Div is block — takes full width.</div>

  <mark>Span is inline; Div is block-level</mark>
</body>
</html>`
  },
  {
    tag: 'strong',
    description: 'The <strong> tag indicates text with strong importance, typically displayed bold.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Strong Tag Example</title>
</head>
<body>
  <h2>Strong Tag Examples:</h2>

  <h3>Important Warnings:</h3>
  <p><strong>Warning:</strong> Do not leave the oven unattended.</p>
  <p><strong>Important:</strong> Save your work frequently.</p>
  <p><strong>Note:</strong> All fields marked * are required.</p>

  <h3>Emphasizing Key Terms:</h3>
  <p>The three core technologies are <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</p>

  <h3>Step Instructions:</h3>
  <ol>
    <li><strong>First</strong>, install Node.js.</li>
    <li><strong>Then</strong>, run npm install.</li>
    <li><strong>Finally</strong>, start the server.</li>
  </ol>

  <h3>Strong vs Bold:</h3>
  <p><strong>Strong</strong> — semantic importance (screen readers emphasize)</p>
  <p><b>Bold</b> — visual styling only</p>

  <mark>Strong indicates semantic importance</mark>
</body>
</html>`
  },
  {
    tag: 'style',
    description: 'The <style> tag defines CSS styles for an HTML document, placed in the head section.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Style Tag Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
      padding: 20px;
    }
    h2 { color: #007bff; text-align: center; }
    .card {
      background: white;
      border-radius: 10px;
      padding: 20px;
      margin: 15px auto;
      max-width: 400px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .card h3 { color: #007bff; }
    .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 0.85em; }
    .badge-blue { background: #cce5ff; color: #004085; }
  </style>
</head>
<body>
  <h2>Style Tag Example</h2>
  <div class="card">
    <h3>HTML Fundamentals</h3>
    <p>Learn the building blocks of web development.</p>
    <span class="badge badge-blue">Beginner</span>
  </div>
  <div class="card">
    <h3>CSS Advanced</h3>
    <p>Master modern CSS layout techniques.</p>
    <span class="badge badge-blue">Intermediate</span>
  </div>

  <mark>Style tag contains CSS for the document</mark>
</body>
</html>`
  },
  {
    tag: 'sub',
    description: 'The <sub> tag defines subscript text, displayed lower than normal text.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sub Tag Example</title>
  <style>
    .formula { background: #f8f9fa; padding: 12px; border-left: 3px solid #007bff; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Sub (Subscript) Tag Examples:</h2>

  <h3>Chemical Formulas:</h3>
  <div class="formula">Water: H<sub>2</sub>O</div>
  <div class="formula">Carbon Dioxide: CO<sub>2</sub></div>
  <div class="formula">Glucose: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></div>
  <div class="formula">Sulfuric Acid: H<sub>2</sub>SO<sub>4</sub></div>

  <h3>Mathematical Expressions:</h3>
  <p>Logarithm: log<sub>10</sub>(100) = 2</p>
  <p>Base 2: log<sub>2</sub>(8) = 3</p>

  <h3>Footnotes:</h3>
  <p>Research shows<sub>1</sub> that learning is effective<sub>2</sub>.</p>
  <p><sub>1</sub> Smith et al. (2024). Research Journal.</p>
  <p><sub>2</sub> Jones (2024). Science Review.</p>

  <mark>Sub positions text as subscript</mark>
</body>
</html>`
  },
  {
    tag: 'summary',
    description: 'The <summary> tag provides a visible heading for the <details> disclosure widget.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Summary Tag Example</title>
  <style>
    details { border: 1px solid #ddd; border-radius: 6px; margin: 10px 0; overflow: hidden; }
    summary { background: #007bff; color: white; padding: 12px 16px; cursor: pointer; font-weight: bold; }
    summary:hover { background: #0056b3; }
    details > *:not(summary) { padding: 15px 16px; background: white; }
  </style>
</head>
<body>
  <h2>Summary Tag Examples:</h2>

  <details>
    <summary>What is HTML?</summary>
    <p>HTML provides the structure and content for web pages.</p>
  </details>

  <details>
    <summary>What is CSS?</summary>
    <p>CSS handles styling and layout of HTML elements.</p>
  </details>

  <details open>
    <summary>What is JavaScript? (Open by default)</summary>
    <p>JavaScript enables interactive features on web pages.</p>
  </details>

  <mark>Click summaries to expand details</mark>
</body>
</html>`
  },
  {
    tag: 'sup',
    description: 'The <sup> tag defines superscript text, displayed higher than normal text.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sup Tag Example</title>
  <style>
    .formula { background: #f8f9fa; padding: 12px; border-left: 3px solid #28a745; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Sup (Superscript) Tag Examples:</h2>

  <h3>Mathematical Powers:</h3>
  <div class="formula">x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup></div>
  <div class="formula">2<sup>10</sup> = 1024</div>
  <div class="formula">E = mc<sup>2</sup></div>

  <h3>Ordinal Numbers:</h3>
  <p>1<sup>st</sup> place, 2<sup>nd</sup> place, 3<sup>rd</sup> place, 4<sup>th</sup> place</p>

  <h3>Trademarks and Copyright:</h3>
  <p>Google<sup>&trade;</sup> is a trademark.</p>
  <p>Tech Academy<sup>&reg;</sup> is registered.</p>

  <h3>Footnotes:</h3>
  <p>Climate change requires action<sup>1</sup>.</p>
  <p><sup>1</sup> UN Climate Report, 2023</p>

  <mark>Sup positions text as superscript</mark>
</body>
</html>`
  },
  {
    tag: 'svg',
    description: 'The <svg> tag defines a container for scalable vector graphics.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SVG Tag Example</title>
</head>
<body>
  <h2>SVG Tag Examples:</h2>

  <h3>Basic Shapes:</h3>
  <svg width="400" height="120" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="80" fill="#007bff" rx="5"/>
    <circle cx="160" cy="50" r="40" fill="#28a745"/>
    <ellipse cx="270" cy="50" rx="60" ry="35" fill="#dc3545"/>
  </svg>

  <h3>Text in SVG:</h3>
  <svg width="300" height="60" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="40" font-family="Arial" font-size="30" fill="#007bff" font-weight="bold">SVG Text</text>
  </svg>

  <h3>Star Polygon:</h3>
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,5 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="#FFD700"/>
  </svg>

  <h3>Circle with Gradient:</h3>
  <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="grad"><stop offset="0%" style="stop-color:#007bff"/><stop offset="100%" style="stop-color:#0056b3"/></radialGradient>
    </defs>
    <circle cx="75" cy="75" r="70" fill="url(#grad)"/>
  </svg>

  <mark>SVG creates scalable vector graphics</mark>
</body>
</html>`
  },
  {
    tag: 'table',
    description: 'The <table> tag defines an HTML table with rows and columns for tabular data.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Table Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 700px; margin: 15px 0; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
    th { background: #007bff; color: white; }
    tbody tr:hover { background: #f0f4ff; }
  </style>
</head>
<body>
  <h2>Table Tag Example:</h2>

  <table>
    <caption>Student Report Card - 2024</caption>
    <thead>
      <tr><th>Name</th><th>Subject</th><th>Score</th><th>Grade</th></tr>
    </thead>
    <tbody>
      <tr><td>Alice</td><td>Math</td><td>95</td><td>A+</td></tr>
      <tr><td>Bob</td><td>Science</td><td>87</td><td>B+</td></tr>
      <tr><td>Carol</td><td>English</td><td>92</td><td>A</td></tr>
    </tbody>
    <tfoot>
      <tr><td colspan="2">Class Average</td><td>91.3</td><td>A</td></tr>
    </tfoot>
  </table>

  <mark>Tables organize data into rows and columns</mark>
</body>
</html>`
  },
  {
    tag: 'tbody',
    description: 'The <tbody> tag groups the body content of a table.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tbody Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; }
    th, td { border: 1px solid #ddd; padding: 10px; text-align: center; }
    thead { background: #007bff; color: white; }
    tbody tr:hover { background: #f0f4ff; }
    tfoot { background: #e9ecef; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Tbody Tag Example:</h2>

  <table>
    <thead>
      <tr><th>#</th><th>Name</th><th>Score</th></tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Alice</td><td>95</td></tr>
      <tr><td>2</td><td>Bob</td><td>82</td></tr>
      <tr><td>3</td><td>Carol</td><td>91</td></tr>
      <tr><td>4</td><td>David</td><td>78</td></tr>
    </tbody>
    <tfoot>
      <tr><td colspan="2">Average</td><td>86.5</td></tr>
    </tfoot>
  </table>

  <mark>Tbody groups table body rows</mark>
</body>
</html>`
  },
  {
    tag: 'td',
    description: 'The <td> tag defines a data cell in a table row.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Td Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; }
    th, td { border: 2px solid #333; padding: 10px; text-align: center; }
    th { background: #007bff; color: white; }
  </style>
</head>
<body>
  <h2>Td (Table Data Cell) Tag Example:</h2>

  <h3>Basic Table:</h3>
  <table>
    <tr><th>Name</th><th>Age</th><th>City</th></tr>
    <tr><td>Alice</td><td>28</td><td>New York</td></tr>
    <tr><td>Bob</td><td>35</td><td>London</td></tr>
  </table>

  <h3>Colspan and Rowspan:</h3>
  <table>
    <tr><th colspan="3">Student Report</th></tr>
    <tr><th>Name</th><th>Subject</th><th>Score</th></tr>
    <tr><td rowspan="2">Alice</td><td>Math</td><td>95</td></tr>
    <tr><td>Science</td><td>88</td></tr>
  </table>

  <mark>Td cells contain table data</mark>
</body>
</html>`
  },
  {
    tag: 'textarea',
    description: 'The <textarea> tag defines a multi-line text input for forms.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Textarea Tag Example</title>
  <style>
    form { max-width: 400px; background: #f8f9fa; padding: 20px; border-radius: 8px; }
    .form-group { margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    textarea { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-family: inherit; resize: vertical; }
    button { width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Textarea Tag Example:</h2>

  <form onsubmit="event.preventDefault(); alert('Submitted!');">
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message..."></textarea>
    </div>

    <div class="form-group">
      <label for="bio">Biography:</label>
      <textarea id="bio" name="bio" rows="5">Hello! I am a web developer with experience in HTML, CSS, and JavaScript.</textarea>
    </div>

    <div class="form-group">
      <label for="review">Feedback (max 200 chars):</label>
      <textarea id="review" name="review" rows="4" maxlength="200" placeholder="Max 200 characters..."></textarea>
    </div>

    <button type="submit">Submit</button>
  </form>

  <mark>Textarea accepts multiple lines of text</mark>
</body>
</html>`
  },
  {
    tag: 'tfoot',
    description: 'The <tfoot> tag groups the footer content in a table, typically for totals or summaries.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tfoot Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; }
    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
    thead { background: #007bff; color: white; }
    tbody tr:hover { background: #f0f4ff; }
    tfoot { background: #343a40; color: white; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Tfoot (Table Footer) Tag Example:</h2>

  <table>
    <caption>Monthly Expenses</caption>
    <thead>
      <tr><th>Category</th><th>Description</th><th>Amount</th></tr>
    </thead>
    <tfoot>
      <tr><td colspan="2">Total</td><td>$2,150</td></tr>
    </tfoot>
    <tbody>
      <tr><td>Housing</td><td>Rent</td><td>$1,200</td></tr>
      <tr><td>Food</td><td>Groceries</td><td>$450</td></tr>
      <tr><td>Transport</td><td>Gas</td><td>$250</td></tr>
      <tr><td>Utilities</td><td>Electric</td><td>$250</td></tr>
    </tbody>
  </table>

  <mark>Tfoot shows table summaries and totals</mark>
</body>
</html>`
  },
  {
    tag: 'th',
    description: 'The <th> tag defines a header cell in a table, typically bold and centered.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Th Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; }
    th, td { border: 1px solid #ccc; padding: 10px; }
    th { background: #007bff; color: white; text-align: center; }
    td { text-align: center; }
    tbody tr:hover { background: #f0f4ff; }
  </style>
</head>
<body>
  <h2>Th (Table Header) Tag Example:</h2>

  <h3>Column Headers:</h3>
  <table>
    <tr>
      <th>Student</th>
      <th>Math</th>
      <th>Science</th>
      <th>English</th>
      <th>Average</th>
    </tr>
    <tr><td>Alice</td><td>95</td><td>88</td><td>91</td><td>91.3</td></tr>
    <tr><td>Bob</td><td>82</td><td>76</td><td>85</td><td>81.0</td></tr>
  </table>

  <h3>Row Headers:</h3>
  <table>
    <tr><th>Subject</th><th>Q1</th><th>Q2</th><th>Q3</th></tr>
    <tr><th>Math</th><td>88</td><td>91</td><td>95</td></tr>
    <tr><th>Science</th><td>82</td><td>79</td><td>86</td></tr>
  </table>

  <mark>Th cells are table headers, typically bold</mark>
</body>
</html>`
  },
  {
    tag: 'thead',
    description: 'The <thead> tag groups the header content in a table.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thead Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 11px; text-align: left; }
    thead { background: linear-gradient(90deg, #007bff, #0056b3); color: white; }
    tbody tr:hover { background: #f0f4ff; }
    tfoot { background: #e9ecef; }
  </style>
</head>
<body>
  <h2>Thead (Table Header) Tag Example:</h2>

  <table>
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Product</th>
        <th>Customer</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>#1001</td><td>Laptop</td><td>Alice</td><td>$999</td></tr>
      <tr><td>#1002</td><td>Mouse</td><td>Bob</td><td>$25</td></tr>
      <tr><td>#1003</td><td>Keyboard</td><td>Carol</td><td>$75</td></tr>
    </tbody>
    <tfoot>
      <tr><td colspan="3">Total Revenue</td><td>$1,099</td></tr>
    </tfoot>
  </table>

  <mark>Thead groups table header rows</mark>
</body>
</html>`
  },
  {
    tag: 'time',
    description: 'The <time> tag represents a specific time or date for search engines and scripts.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Time Tag Example</title>
  <style>
    time { color: #007bff; font-weight: bold; }
    .event { background: #f8f9fa; border-left: 4px solid #007bff; padding: 12px; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Time Tag Examples:</h2>

  <h3>Store Hours:</h3>
  <p>Opens at <time>09:00</time> and closes at <time>21:00</time> daily.</p>

  <h3>Historical Date:</h3>
  <p>HTML5 was published on <time datetime="2014-10-28">October 28, 2014</time>.</p>

  <h3>DateTime:</h3>
  <p>Meeting scheduled for <time datetime="2024-12-25T18:00:00">December 25 at 6 PM</time>.</p>

  <h3>Blog Post Timestamp:</h3>
  <div class="event">
    <p><time datetime="2024-01-15T10:30:00">January 15, 2024 at 10:30 AM</time></p>
    <strong>Introduction to HTML5</strong>
    <p>Explore new features introduced in HTML5...</p>
  </div>

  <mark>Time element provides machine-readable dates</mark>
</body>
</html>`
  },
  {
    tag: 'title',
    description: 'The <title> tag defines the title of the HTML document shown in browser tabs.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Title Tag Example | Tech Academy</title>
</head>
<body>
  <h2>Title Tag Example</h2>
  <p>The title tag in this page's head is: <strong>"Title Tag Example | Tech Academy"</strong></p>
  <p>Look at your browser tab to see the title!</p>

  <h3>Where Titles Appear:</h3>
  <ul>
    <li>Browser tab at top of window</li>
    <li>Bookmarks when you save</li>
    <li>Search results from Google</li>
    <li>Social media when shared</li>
    <li>Browser history</li>
  </ul>

  <h3>Best Practices:</h3>
  <ul>
    <li>Keep titles 50-60 characters</li>
    <li>Put main keyword near start</li>
    <li>Make each page title unique</li>
    <li>Use format: "Page Name | Site Name"</li>
  </ul>

  <mark>Title is crucial for SEO and user experience</mark>
</body>
</html>`
  },
  {
    tag: 'tr',
    description: 'The <tr> tag defines a row in a table containing one or more <th> or <td> elements.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tr Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; }
    th, td { border: 1px solid #ddd; padding: 10px; }
    tr:first-child { background: #007bff; color: white; }
    tr:hover { background: #f0f4ff; }
  </style>
</head>
<body>
  <h2>Tr (Table Row) Tag Example:</h2>

  <table>
    <tr><th>Name</th><th>Role</th><th>Salary</th><th>Status</th></tr>
    <tr><td>Alice</td><td>Developer</td><td>$95,000</td><td>Active</td></tr>
    <tr><td>Bob</td><td>Designer</td><td>$75,000</td><td>Active</td></tr>
    <tr><td>Carol</td><td>Manager</td><td>$82,000</td><td>Active</td></tr>
    <tr><td>David</td><td>Developer</td><td>$62,000</td><td>Inactive</td></tr>
  </table>

  <mark>Tr contains table data or header cells</mark>
</body>
</html>`
  },
  {
    tag: 'track',
    description: 'The <track> tag specifies text tracks for <video> and <audio> (subtitles, captions, descriptions).',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Track Tag Example</title>
  <style>
    video { display: block; width: 100%; max-width: 600px; border-radius: 6px; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Track Tag Example:</h2>

  <p>Video with subtitle and caption support:</p>
  <video controls width="600">
    <source src="https://www.example.com/video.mp4" type="video/mp4">
    <track kind="subtitles" src="https://www.example.com/en.vtt" srclang="en" label="English" default>
    <track kind="subtitles" src="https://www.example.com/es.vtt" srclang="es" label="Spanish">
    <track kind="captions" src="https://www.example.com/captions.vtt" srclang="en" label="English Captions">
    Your browser does not support HTML5 video.
  </video>

  <h3>Track Kinds:</h3>
  <ul>
    <li><strong>subtitles</strong> - Translations of dialogue</li>
    <li><strong>captions</strong> - Dialogue and sound descriptions</li>
    <li><strong>descriptions</strong> - For blind users</li>
    <li><strong>chapters</strong> - Navigation chapters</li>
    <li><strong>metadata</strong> - For scripts (hidden)</li>
  </ul>

  <mark>Track adds accessibility and translations to video/audio</mark>
</body>
</html>`
  },
  {
    tag: 'u',
    description: 'The <u> tag represents underlined text for spellings, proper names, or annotations.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>U Tag Example</title>
  <style>
    .spelling-error { text-decoration: underline wavy red; }
    .custom { text-decoration: underline dotted blue; }
  </style>
</head>
<body>
  <h2>U (Underline) Tag Examples:</h2>

  <h3>Basic Underline:</h3>
  <p>This is <u>underlined text</u> using the u tag.</p>

  <h3>Misspelled Words:</h3>
  <p>The <u class="spelling-error">wrold</u> is beautiful.</p>
  <p>I enjoy <u class="spelling-error">progamming</u> websites.</p>

  <h3>Proper Names:</h3>
  <p>Author <u>J.K. Rowling</u> wrote the Harry Potter series.</p>

  <h3>Custom Styling:</h3>
  <p><u class="custom">Custom dotted underline</u></p>

  <h3>U vs Link:</h3>
  <p><u>Underlined</u> text vs <a href="#">hyperlink</a> — they look similar!</p>

  <mark>Avoid using u for links; use it for annotations</mark>
</body>
</html>`
  },
  {
    tag: 'ul',
    description: 'The <ul> tag defines an unordered (bulleted) list of items.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unordered List Tag Example</title>
  <style>
    ul { margin: 10px 0; padding-left: 25px; }
    li { margin: 5px 0; line-height: 1.6; }
  </style>
</head>
<body>
  <h2>Unordered List (ul) Tag Examples:</h2>

  <h3>Default (bullet points):</h3>
  <ul>
    <li>Learn HTML structure</li>
    <li>Master CSS styling</li>
    <li>Build JavaScript skills</li>
    <li>Create web projects</li>
  </ul>

  <h3>Circle Bullets (type="circle"):</h3>
  <ul style="list-style-type: circle;">
    <li>React library</li>
    <li>Vue.js framework</li>
    <li>Angular platform</li>
  </ul>

  <h3>Square Bullets (type="square"):</h3>
  <ul style="list-style-type: square;">
    <li>Node.js runtime</li>
    <li>Express server</li>
    <li>MongoDB database</li>
  </ul>

  <h3>Nested List:</h3>
  <ul>
    <li>Frontend
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>Frameworks</li>
      </ul>
    </li>
    <li>Backend
      <ul>
        <li>Node.js</li>
        <li>Python</li>
      </ul>
    </li>
  </ul>

  <mark>Ul creates bulleted lists</mark>
</body>
</html>`
  },
  {
    tag: 'var',
    description: 'The <var> tag represents a variable in programming or mathematical expressions.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Var Tag Example</title>
  <style>
    var { font-style: italic; font-weight: bold; color: #6f42c1; }
    .code { background: #f4f4f4; padding: 8px; border-radius: 4px; font-family: monospace; }
  </style>
</head>
<body>
  <h2>Var (Variable) Tag Examples:</h2>

  <h3>Programming Variables:</h3>
  <p>Declare variables using: <var>let</var>, <var>const</var>, or <var>var</var>.</p>
  <p class="code">let <var>name</var> = "Alice";</p>
  <p class="code">const <var>PI</var> = 3.14159;</p>

  <h3>Mathematical Variables:</h3>
  <p>Formula: <var>E</var> = <var>m</var><var>c</var><sup>2</sup></p>
  <p>Area: <var>A</var> = &pi;<var>r</var><sup>2</sup></p>

  <h3>In Documentation:</h3>
  <p>The function accepts <var>width</var> and <var>height</var> parameters.</p>
  <p>Pass <var>userId</var> to retrieve user data.</p>

  <mark>Var represents program or math variables</mark>
</body>
</html>`
  },
  {
    tag: 'video',
    description: 'The <video> tag embeds video content with playback controls.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Tag Example</title>
  <style>
    video { border-radius: 6px; width: 100%; max-width: 600px; display: block; margin: 15px 0; background: #000; }
  </style>
</head>
<body>
  <h2>Video Tag Example:</h2>

  <h3>Basic Video with Controls:</h3>
  <video controls width="600">
    <source src="https://www.example.com/video.mp4" type="video/mp4">
    Your browser does not support the video element.
  </video>

  <h3>Video with Poster:</h3>
  <video controls width="600" poster="https://via.placeholder.com/600x300">
    <source src="https://www.example.com/video.mp4" type="video/mp4">
    Your browser does not support the video element.
  </video>

  <h3>Autoplay Muted Video:</h3>
  <video autoplay muted loop width="600">
    <source src="https://www.example.com/video.mp4" type="video/mp4">
  </video>

  <h3>Video Attributes:</h3>
  <ul>
    <li><strong>controls</strong> - Show player controls</li>
    <li><strong>autoplay</strong> - Play automatically</li>
    <li><strong>loop</strong> - Repeat playback</li>
    <li><strong>muted</strong> - Mute audio by default</li>
    <li><strong>poster</strong> - Thumbnail image</li>
    <li><strong>playsinline</strong> - Play inline on mobile</li>
  </ul>

  <mark>Video tag provides native HTML5 video playback</mark>
</body>
</html>`
  },
  {
    tag: 'wbr',
    description: 'The <wbr> tag specifies where text can break to the next line in narrow containers.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WBR Tag Example</title>
  <style>
    .narrow { width: 200px; border: 2px solid #007bff; padding: 10px; border-radius: 4px; background: #f8f9fa; }
    .url { font-family: monospace; color: #007bff; }
  </style>
</head>
<body>
  <h2>WBR (Word Break) Tag Example:</h2>

  <h3>Long URL Without WBR (may overflow):</h3>
  <div class="narrow">
    <p class="url">https://www.example.com/very/long/path/to/resource</p>
  </div>

  <h3>Long URL With WBR (breaks nicely):</h3>
  <div class="narrow">
    <p class="url">https://www.<wbr>example.<wbr>com/<wbr>very/<wbr>long/<wbr>path/<wbr>to/<wbr>resource</p>
  </div>

  <h3>Long Technical Term:</h3>
  <div class="narrow">
    <p>Super<wbr>califragilistic<wbr>expialidocious</p>
  </div>

  <h3>When to Use WBR:</h3>
  <ul>
    <li>Long URLs in narrow containers</li>
    <li>Long technical terms</li>
    <li>Long code identifiers</li>
    <li>Long file paths on mobile</li>
  </ul>

  <mark>WBR allows flexible line breaking</mark>
</body>
</html>`
  }
];

export default tagPagesData;
