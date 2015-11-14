// Utils for selection
var _ = function(e) { return document.querySelector(e); }
var __ = function(e) { return document.querySelectorAll(e); }

var step = _('#step_1'),
    c1    = _('#c_top_left'),
    c2    = _('#c_top_right'),
    c3    = _('#c_bottom_right'),
    c4    = _('#c_bottom_left');
    c5    = _('#c_top_left');


var tl = new TimelineMax({
  repeat: -1
}),
    e  = Elastic.easeInOut.config(1.1, 0.52),
    t  = .65;

tl.set([step, c2, c4], {
  autoAlpha: 1
})
tl.set([c1, c2, c3, c4, c5], {
  transformOrigin: "center center"
})
tl.set(c1, {
  autoAlpha: 1,
  x: 105,
  y: 105
})
tl.set(c3, {
  autoAlpha: 1,
  x: -105,
  y: -105
})


tl.add('start');

tl.to(step, t, {
  morphSVG: '#step_2',
  ease: e
}, 'start')
tl.to(c2, t, {
  x: -210,
  ease: e
}, 'start')


tl.to(step, t, {
  morphSVG: '#step_3',
  ease: e
}, 'start+=' + t)
tl.to(c4, t, {
  x: 210,
  ease: e
}, 'start+=' + t)

tl.to(step, t, {
  morphSVG: '#step_4',
  ease: e
}, 'start+=' + t*2)
tl.to(c1, t, {
  x: 210,
  y: 0,
  ease: e
}, 'start+=' + t*2)
tl.to(c3, t, {
  x: -210,
  y: 0,
  ease: e
}, 'start+=' + t*2)


tl.to(step, t, {
  morphSVG: '#step_5',
  ease: e
}, 'start+=' + t*3)
tl.to(c1, t, {
  x: 105,
  y: 105,
  scale: 3,
  ease: e
}, 'start+=' + t*3)
tl.to(c2, t, {
  x: -105,
  y: 105,
  scale: 3,
  ease: e
}, 'start+=' + t*3)
tl.to(c3, t, {
  x: -105,
  y: -105,
  scale: 3,
  ease: e
}, 'start+=' + t*3)
tl.to(c4, t, {
  x: 105,
  y: -105,
  scale: 3,
  ease: e
}, 'start+=' + t*3)


tl.to(step, t, {
  morphSVG: '#step_1',
  ease: e
}, 'start+=' + t*4)
tl.to(c2, t, {
  x: 0,
  y: 0,
  scale: 1,
  ease: e
}, 'start+=' + t*4)
tl.to(c4, t, {
  x: 0,
  y: 0,
  scale: 1,
  ease: e
}, 'start+=' + t*4)
tl.to(c1, t, {
  scale: 1,
  ease: e
}, 'start+=' + t*4.2)
tl.to(c3, t, {
  scale: 1,
  ease: e
}, 'start+=' + t*4.2)