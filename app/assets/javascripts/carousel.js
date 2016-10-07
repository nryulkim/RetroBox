$.Carousel = function(el) {
  this.$el = $(el);
  this.$items = this.$el.find("li");
  this.$nav = $("<nav></nav>");
  this.activeIdx = 0;
  this.transitioning = false;
  this.slideTo(0);
  this.$el.on("click", "button", this.clickButton.bind(this));
  this.$el.on("click", "span", this.clickNav.bind(this));
};

$.Carousel.prototype.clickButton = function(event) {
  this.slide(parseInt($(event.currentTarget).attr("data-dir")));
};

$.Carousel.prototype.clickNav = function(event) {
  this.slideTo($(event.currentTarget).index());
};

$.Carousel.prototype.slide = function(dir) {
  this.slideTo((this.activeIdx + dir + this.$items.length) % this.$items.length);
};

$.Carousel.prototype.slideTo = function(newIdx) {
  if (newIdx == this.activeIdx) {
    return;
  }
  this.$items.removeClass("is-previous");
  this.$items.eq(this.activeIdx)
    .removeClass("is-active")
    .addClass("is-previous");
  this.$items.eq(newIdx).addClass("is-active");
  this.activeIdx = newIdx;
};

$.fn.carousel = function() {
  return this.each(function () {
    new $.Carousel(this);
  });
};
