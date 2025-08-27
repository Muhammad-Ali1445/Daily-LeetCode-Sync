var BrowserHistory = function(homepage) {
  this.curr = homepage;
  this.backStack = [];
  this.forwardStack = [];
};

BrowserHistory.prototype.visit = function(url) {
  this.backStack.push(this.curr);
  this.curr = url;
  this.forwardStack.length = 0; 
};

BrowserHistory.prototype.back = function(steps) {
  while (steps > 0 && this.backStack.length > 0) {
    this.forwardStack.push(this.curr);
    this.curr = this.backStack.pop(); 
    steps--;
  }
  return this.curr;
};

BrowserHistory.prototype.forward = function(steps) {
  while (steps > 0 && this.forwardStack.length > 0) {
    this.backStack.push(this.curr);
    this.curr = this.forwardStack.pop(); 
    steps--;
  }
  return this.curr;
};
