WordCloud
=========

Simple Word Cloud based on a file feed with respective data. After rendering the cloud of words you can click them to see the meta data on the right side of the screen. `Green` words stands for most positive mentions of the term, `red` - negative, `gray` - neutral. As usually, the word's size means dependency on mentions quantity.

Usage
-----

1. Clone repo `git clone https://github.com/vitalpoltava/WordCloud.git`;
2. Run `npm install` (to load dependencies);
3. Run `grunt` (this will compile the project);
4. Run `node app` (to start the server);
5. Launch the application as `http://localhost:8000` in your browser;
6. To run the tests (Jasmine + PhantomJS) run `grunt tests`.
