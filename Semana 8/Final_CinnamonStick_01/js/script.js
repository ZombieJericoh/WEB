$(document).ready(function())

$('body').scrollspy({ target: 'masthead-nav' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})